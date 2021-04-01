// Disables the input for renaming the Course Name / Course Code within the settings page
// Implemented  Will Poillion - 11-10-2017


$(document).ready(function() {
    if (window.location.href.match(/courses\/\d+\/settings/) !== null) { 
        $('.display_grading_standard .standard_title .displaying').remove();
        $('.display_grading_standard .displaying a:contains("manage grading schemes")').remove();
    }
});


