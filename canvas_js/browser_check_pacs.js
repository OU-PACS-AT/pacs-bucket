// external.js
//$.getScript('https://drive.google.com/uc?export=download&id=0B_RxBaBMYxt8bnhqRmNJSXpnUm8', function() {
    //script is loaded and executed put your dependent JS here
//});

/* ------------------ BEGIN FUNCTION SECTION */

// Get current browser info
// Source: http://stackoverflow.com/questions/5916900/how-can-you-detect-the-version-of-a-browser
var getBrowserInfo = function(){

    var ua = navigator.userAgent, tem

    M = ua.match(/(opera|crios|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1] === 'CriOS') {
        M[1] = "Chrome"
    }
    if(M[1] === 'Chrome'){
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
}

// Show the browser info when on dashboard page
var showBrowserInfo = function() {
    var getCurrentPage = document.getElementsByTagName("title")[0].innerHTML; 
    if (getCurrentPage == "Economic Development Institution") {
        var browser, getImageSrc, browserHTML;
        var browserIcons = {
            'safari' : 'https://goo.gl/BzPBtN',
            'chrome' : 'https://goo.gl/fw1WHe',
            'firefox' : 'https://goo.gl/44gm4H',
            'ie' : 'https://goo.gl/CnVSXi',
            'edge' : 'https://goo.gl/NlfIsd',
            'opera' : 'https://goo.gl/8UHgvw'
        };
        browser = getBrowserInfo().split(' ')[0];
        browser = browser.toLowerCase();
        getImageSrc = browserIcons[browser];
        browserHTML = '<div class="container-footnote"><span class="close-button"></span><img class="browser-img" src="' + getImageSrc + '"/><div class="for-browser-info"><h5>You are currently using ' + getBrowserInfo() + '</h5><a class="button" href="#" target="new">Read More</a></div><div class="additional-info"><a class="link" href="http://www.whatsmybrowser.org" target="new">More info on my browser</a><a class="link" href="https://community.canvaslms.com/docs/DOC-1284" target="new">Is my browser compatible with Canvas?</a><a class="link" href="https://community.canvaslms.com/docs/DOC-2059" target="new">Is my computer compatible with Canvas?</a></div></div>' 
        $('body').append(browserHTML)
    }

    // Close/hide the browser element if the user doesn't want it cluttering the dashboard
    $('.container-footnote .close-button').click(function () {
        closeBrowser()
    })

    // Handle the methods for when a user wants to learn more/less about the current browser
    $('.container-footnote .button').click(function(e) {
        var infoState = $('.additional-info').is(':visible')
        showMore();
        if(infoState) {
            $(this).text('Read More')
        } else {
            $(this).text('Read Less')
        }
        e.preventDefault()
    })
}

// Hide the browser info when the close button is clicked
var closeBrowser = function() {
    var container = $('.container-footnote')
    container.addClass('slide-n-hide')
}

// Show additional links/details for browser info
var showMore = function() {
    $('.additional-info').toggle();
}

/* ------------------ END FUNCTION SECTION */

/* ------------------ RUN ON PAGE LOAD */

$(document).ready(function () {
	showBrowserInfo()
})
