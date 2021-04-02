$.ajax({ url: "https://d1la9j37oq1fed.cloudfront.net/canvas_shared/canut_base_canvas_050714.min.js", dataType: "script", cache: true, crossDomain: true }).done(function () {

    try {
        $('div.accordion').accordion();
    }
    catch (err) { }

// Will Poillion - Reorgnized and changed helpdesk link to jira service desk
container = '<div class="al-dropdown_container">';
need_additional_help_dropdown = '<a class="al-trigger Button Button--primary Button--block" role="button" href="#">Need additional Help <i class="icon-mini-arrow-down"></i></a><ul class="al-options" role="menu" tabindex="0" aria-hidden="true" aria-expanded="false">';
student_resources_link = '<li><a href="https://sites.google.com/view/pacs-student-resources/home" target="_blank" tabindex="-1" role="menuitem">Student Resources</a></li>';
//support_desk_link = '<li><a href="https://pacs-help.outreach.ou.edu/" target="_blank" tabindex="-1" role="menuitem" id="pacs_help_link">Support Desk</a></li>';
support_desk_link = '<li><a href="https://jira.outreach.ou.edu/plugins/servlet/desk/portal/9" target="_blank" tabindex="-1" role="menuitem" id="pacs_help_link">Support Desk</a></li>';
// Will Poillion - Commented out student walkthrough per John's request 6-20-18
//student_walkthrough = '<li><a href="https://canvas.ou.edu/courses/59220" target="_blank" tabindex="-1" role="menuitem">Student Walkthrough</a></li>';
close_container = '</ul></div><br />';

$('#right-side').prepend(container + need_additional_help_dropdown + student_resources_link + support_desk_link + close_container);

});

/* Will Poillion - Replaced 6/11/18
$('#right-side').prepend('<div class="al-dropdown_container"><a class="al-trigger Button Button--primary Button--block" role="button" href="#">Need additional Help <i class="icon-mini-arrow-down"></i></a><ul class="al-options" role="menu" tabindex="0" aria-hidden="true" aria-expanded="false"><li><a href="http://cols.ou.edu/canvas/studentresources" target="_blank" tabindex="-1" role="menuitem">Student Resources</a></li><li><a href="http://cols.ou.edu/helpdesk/students/" target="_blank" tabindex="-1" role="menuitem">Support Desk</a></li><li><a href="https://canvas.ou.edu/courses/59220" target="_blank" tabindex="-1" role="menuitem">Student Walkthrough</a></li></ul></div><br />')

});
*/