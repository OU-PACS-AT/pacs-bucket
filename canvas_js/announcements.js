//Announcement Config


$(function() {

    // Config
    // At most display this many announcements
    var maxDisplay = 20;

    // Don't display announcements older than n days.  CURRENTLY NOT USED
    var noOlderThan = 0;

    // Abbreviate announcements to a set length
    var truncateLength = 15000;

    // Matches trailing non-space characters.
    var chop = /(\s*\S+|\s)$/;

    // Return a truncated html string.  Delegates to $.fn.truncate.
    $.truncate = function(html, options) {
        return $('<div></div>').append(html).truncate(options).html();
    };

    // Truncate the contents of an element in place.
    $.fn.truncate = function(options) {
        if ($.isNumeric(options)) {options = {length: options};}
        var o = $.extend({}, $.truncate.defaults, options);

        return this.each(function() {
            var self = $(this);

            if (o.noBreaks) {self.find('br').replaceWith(' ');}

            var text = self.text();
            var excess = text.length - o.length;

            if (o.stripTags) {self.text(text);}

            // Chop off any partial words if appropriate.
            if (o.words && excess > 0) {
                excess = text.length - text.slice(0, o.length).replace(chop, '').length - 1;
            }

            if (excess < 0 || !excess && !o.truncated) {return;}

            // Iterate over each child node in reverse, removing excess text.
            $.each(self.contents().get().reverse(), function(i, el) {
                var $el = $(el);
                var text = $el.text();
                var length = text.length;

                // If the text is longer than the excess, remove the node and continue.
                if (length <= excess) {
                    o.truncated = true;
                    excess -= length;
                    $el.remove();
                    return;
                }

                // Remove the excess text and append the ellipsis.
                if (el.nodeType === 3) {
                    $(el.splitText(length - excess - 1)).replaceWith(o.ellipsis);
                    return false;
                }

                // Recursively truncate child nodes.
                $el.truncate($.extend(o, {length: length - excess}));
                return false;
            });
        });
    };

    $.truncate.defaults = {

        // Strip all html elements, leaving only plain text.
        stripTags: false,

        // Only truncate at word boundaries.
        words: false,

        // Replace instances of <br> with a single space.
        noBreaks: false,

        // The maximum length of the truncated html.
        length: Infinity,

        // The character to use as the ellipsis.  The word joiner (U+2060) can be
        // used to prevent a hanging ellipsis, but displays incorrectly in Chrome
        // on Windows 7.
        // http://code.google.com/p/chromium/issues/detail?id=68323
        ellipsis: '\u2026' // '\u2060\u2026'

    };

    // Are we on the homepage?  If so, can we extract the atom feed URL?  And is it a valid feed URL?
    if ( ! /courses\/\d+(?:\/(?:pages|wiki)\/front\-page)?\/?$/.test(document.location.href) ) {return;}

    // If accessed from /pages/front-page or /wiki/front-page, atom feed doesn't exist.  Display a note explaining this.
    if ( /courses\/\d+(?:\/(?:pages|wiki)\/front\-page)\/?$/.test(document.location.href) ) {
        //window.location.replace(document.location.href.replace(/(?:pages|wiki)\/front\-page\/?/, ''));
        $(".cc-homepage-announcements").append('<p>To view the latest announcements please click on "Announcements" or "Home"</p>');
        return;
    }

    var $atomLink = $('link[rel=alternate][title="Course Atom Feed"]');
    if ( ! $atomLink ){ return;}
    var atomCourseUrl = $.trim($atomLink.attr('href'));
    if (!atomCourseUrl || !~atomCourseUrl.indexOf("_") ||!~atomCourseUrl.indexOf(".atom")){ return;}

    // Sweet.  Now let's extract the atom feed ID from the course feed url so we can construct an announcements feed URL
    var feedId = atomCourseUrl.substring(atomCourseUrl.lastIndexOf("/") + 1, atomCourseUrl.lastIndexOf(".atom"));
    if (!feedId) {
		return;
	}
    // Now that we have the feed ID, we can construct the announcements feed URL from it
    var announcementsFeedUrl = 'https://' + location.hostname + '/feeds/announcements/' + feedId + '.atom';

    console.log("Found feed URL: " + announcementsFeedUrl.toString());

    var $xhr = $.ajax({
            url: announcementsFeedUrl,
            dataType: "xml"
        }),
        announcements = [];

    $xhr.done(function( data ) {
        var $xml = $(data);
        $xml.find("entry").each(function(i, entry) {
            var $this = $(entry);
            announcements.push({
                link: $.trim($this.find('link').attr('href')),
                title: $.trim($this.find('title').text()),
                published: new Date($.trim($this.find('published').text())),
                author: $.trim($this.find('author').text()),
                content: $.trim($this.find('content').text())
            });
        });

        //This should work but it appears to be backwards for Safari (works in Firefox and Chrome)
        announcements.sort(function( a, b ) {

            var aDate = a.published.getTime(),
                bDate = b.published.getTime();

            return aDate < bDate ? 1 : (aDate > bDate ? -1 : 0);

        });

        $(".cc-homepage-announcements").append((function() {
            var announcementsHtml = [];
            var displayedCount = 0;
            var shortenedTitle;
            for (var i = 0; i < announcements.length; i++) {
                // Was announcement published longer than than 1 week ago?
                //var oneWeekAgo = new Date().getTime() - noOlderThan * 24 * 60 * 60 * 1000;
                //if (announcements[i].published.getTime() > oneWeekAgo) {
                //}

                //Strip the word "Announcement: " that is at the start of every title
                if(announcements[i].title.search("Announcement:") >= 0) {
                    shortenedTitle = announcements[i].title.substring(14);
                }else{
                    shortenedTitle = announcements[i].title;
                }

                announcementsHtml.push('<h6 style="text-align:left;color:#000000">' + (announcements[i].published.getMonth() + 1) + '/'+ announcements[i].published.getDate() + '/' + announcements[i].published.getFullYear() + '</h6>');
                announcementsHtml.push('<h5 style="margin:0px;padding:0px;text-align:left;"><a href="' + announcements[i].link + '">' + shortenedTitle + '</a></h5>');
                announcementsHtml.push('<p>' + $.truncate(announcements[i].content,truncateLength) + '</p>');
                displayedCount++;


                if (displayedCount >= maxDisplay) {break;}
                announcementsHtml.push('<hr style="color:#1C1C1C; background-color:#1C1C1C; height:1px;">');  //Add a <hr> if there are more announcements
            }

            return $( announcementsHtml.join(""));

        }()));

    });


    $xhr.fail(function( xhr, status, err ) {
        // Show an error if desired if feed failed to load
    });

});