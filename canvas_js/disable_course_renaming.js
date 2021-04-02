// Disables the input for renaming the Course Name / Course Code within the settings page
// Implemented  Will Poillion - 11-10-2017


$(document).ready(function() {
    if (window.location.href.match(/courses\/\d+\/settings/) !== null) { 
        $('#course_name')[0].disabled = true;
        $('#course_course_code')[0].disabled = true;
    }
});
