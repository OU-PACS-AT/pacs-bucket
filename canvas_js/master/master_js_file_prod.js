var server = "https://pacs-bucket.outreach.ou.edu/";


// ***************************************************************
// ***************************************************************
// SALSA / Accordion
// jquery-ui_accordion_only.min.js
$.getScript(server + 'canvas_js/jquery-ui_accordion_only.min.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('jquery-ui_accordion_only.min.js');
    
    // syllabus_accordion.js
    $.getScript(server + 'canvas_js/syllabus_accordion.js', function() {
        //script is loaded and executed put your dependent JS here
        console.log('syllabus_accordion.js');
    });
});

// salsa_edit_button.js
$.getScript(server + 'canvas_js/salsa_edit_button.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('salsaEditButton.js');
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
// google_analytics_prod.js
$.getScript('https://www.googletagmanager.com/gtag/js?id=UA-118170707-1', function() {
    //script is loaded and executed put your dependent JS here
    console.log('google_analytics_prod.js');
});

// google_analytics_new_dashboard.js
$.getScript(server + 'canvas_js/google_analytics_new_dashboard.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('Custom Google Analytics Loaded!');
});
// ***************************************************************
// ***************************************************************


// announcements.js
$.getScript(server + 'canvas_js/announcements.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('announcements.js');
});

// browser_check.js
$.getScript(server + 'canvas_js/browser_check.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('browser_check.js');
});

// helpdesk_student.js
$.getScript(server + 'canvas_js/helpdesk_student.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('helpdesk_student.js');
});

// remove_help_button.js
$.getScript(server + 'canvas_js/remove_help_button.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('remove_help_button.js');
});





// module_completion.js
$.getScript(server + 'canvas_js/module_completion.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('module_completion.js');
});




// calendar_view.js
$.getScript(server + 'canvas_js/calendar_view.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('calendar_view.js');
});

// view_all_pages_link.js
$.getScript(server + 'canvas_js/view_all_pages_link.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('view_all_pages_link.js');
});

// remove_choose_home_page_button.js
$.getScript(server + 'canvas_js/remove_choose_home_page_button.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('remove_choose_home_page_button.js');
});




// banner_width_fix.js
$.getScript(server + 'canvas_js/banner_width_fix.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('banner_width_fix.js');
});

// rubrics_importer.js
$.getScript(server + 'canvas_js/rubrics_importer.js', function(){
    //script is loaded and executed put your dependent JS here
    console.log('rubrics_importer.js');
});

// canvas_footer.js
$.getScript(server + 'canvas_js/canvas_footer.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('canvas_footer.js');
});

// copyright.js
$.getScript(server + 'canvas_js/copyright.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('copyright.js');
});

// canvas_api.js
$.getScript(server + 'canvas_js/canvas_api.js', function() {
	console.log('canvas_api.js');
	
	// instructor_button.js
	$.getScript(server + 'canvas_js/instructor_button.js', function() {
		//script is loaded and executed put your dependent JS here
		console.log('instructor_button.js');
	});
});

// library_button.js
$.getScript(server + 'canvas_js/library_button.js', function() {
    //script is loaded and executed put your dependent JS here
    console.log('library_button.js');
});






// ****************** Loaded in Production Only ****************** //
// disable_course_renaming.js
$.getScript(server + 'canvas_js/disable_course_renaming.js', function(){
    //script is loaded and executed put your dependent JS here
    console.log('disable_course_renaming.js');
});

// disable_grading_scheme_changing.js
$.getScript(server + 'canvas_js/disable_grading_scheme_changing.js', function(){
    //script is loaded and executed put your dependent JS here
    console.log('disable_grading_scheme_changing.js');
});

