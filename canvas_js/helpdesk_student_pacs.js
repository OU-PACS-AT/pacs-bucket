$.ajax({ url: "https://d1la9j37oq1fed.cloudfront.net/canvas_shared/canut_base_canvas_050714.min.js", dataType: "script", cache: true, crossDomain: true }).done(function () {

    try {
        $('div.accordion').accordion();
    }
    catch (err) { }
 
// Will Poillion - Organized links into variables 6-11-18
container =  '<div class="al-dropdown_container">';
need_additional_help_dropdown = '<a class="al-trigger Button Button--block" role="button" href="#" style="background: #993333; color: #fff">Need additional Help <i class="icon-mini-arrow-down"></i></a><ul class="al-options" role="menu" tabindex="0" aria-hidden="true" aria-expanded="false">';
student_walkthrough = '<li><a href="https://pacs.instructure.com/courses/6" target="_blank" tabindex="-1" role="menuitem">Student Walkthrough</a></li>';
//support_desk_link = '<li><a href="#" target="_blank" role="menuitem" id="pacs_help_link">Support Desk</a></li>';
support_desk_link = '<li><a href="https://pacs-bucket.outreach.ou.edu/issuecollector/" target="_blank" role="menuitem" id="temp_link">Support Desk</a></li>';
close_container = '</ul></div><br />';

$('#right-side').prepend(container + need_additional_help_dropdown + student_walkthrough + support_desk_link + close_container);

});


/* Will Poillion - Replaced with more organized code 6-11-18
$('#right-side').prepend('<div class="al-dropdown_container"><a class="al-trigger Button Button--block" role="button" href="#" style="background: #993333; color: #fff">Need additional Help <i class="icon-mini-arrow-down"></i></a><ul class="al-options" role="menu" tabindex="0" aria-hidden="true" aria-expanded="false"><li><a href="https://ouedi.instructure.com/courses/6" target="_blank" tabindex="-1" role="menuitem">Student Walkthrough</a></li></ul></div><br />')

});
*/