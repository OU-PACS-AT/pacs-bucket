var server = "https://pacs-bucket.outreach.ou.edu/";


// ***************************************************************
// ***************************************************************
// SALSA / Accordion
// jquery-ui_accordion_only.min.js
$.getScript(server + 'canvas_js/jquery-ui_accordion_only.min.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('Jquery-ui_accordion_only.min.js');
    
    // syllabus_accordion.js
    $.getScript(server + 'canvas_js/syllabus_accordion.js', function() {
        //script is loaded and executed put your dependent JS here
        console.log('syllabus_accordion.js');
    });
});
// ***************************************************************
// ***************************************************************


// ***************************************************************
// ***************************************************************
// Will Poillion - 2021-01-14 
//  new RCE kennethware turnover

// NEW RCE
// kennethware_2.js

$.getScript(server + 'canvas_js/kennethware_2.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('kennethware_2.js');
});
// ***************************************************************
// ***************************************************************



// ***************************************************************
// ***************************************************************
//  Google Analytics
// pacsgoogleanalytics.js
$.getScript('https://www.googletagmanager.com/gtag/js?id=UA-118215078-1', function() {
    console.log('pacsgoogleanalytics.js');
});

// google_analytics_new_dashboard_pacs.js
$.getScript(server + 'canvas_js/google_analytics_new_dashboard_pacs.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('Custom Google Analytics Loaded!');
});

// google_analytics_pacs.js
$.getScript(server + 'canvas_js/google_analytics_pacs.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('Google Analytics Loaded!');
});
// ***************************************************************
// ***************************************************************


// browser_check_pacs.js
$.getScript(server + 'canvas_js/browser_check_pacs.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('pacs_browser_check.js');
});


// helpdesk_student_pacs.js
$.getScript(server + 'canvas_js/helpdesk_student_pacs.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('helpdesk_student_pacs.js');
    // issue_collector.js
    $.getScript(server + 'canvas_js/issue_collector.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('issue_collector.js');
    });
});


// remove_color_from_dashboard.js
$.getScript(server + 'canvas_js/remove_color_from_dashboard.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('remove_color_from_dashboard.js');
});





// canvas_footer.js
$.getScript(server + 'canvas_js/canvas_footer.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('canvas_footer.js');
});

// dashcard_sorter.js
$.getScript(server + 'canvas_js/dashcard_sorter.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('dashcard_sorter.js');
});

// remove_help_button.js
$.getScript(server + 'canvas_js/remove_help_button.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('remove_help_button.js');
});

// remove_max_width.js
$.getScript(server + 'canvas_js/remove_max_width.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('remove_max_width.js');
});


// html_syntax_highlighter.js
$.getScript(server + 'canvas_js/html_syntax_highlighter.js", function(){
    //script is loaded and executed put your dependent JS here
    console.log('html_syntax_highlighter.js');
});


