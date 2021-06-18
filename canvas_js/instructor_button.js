// Add instructor button

$(function(){
    var insertInstructorButton = function(instructor_url) {
        if (Object.entries(instructor_url).length !== 0){
            var instructor_link = $("#section-tabs li:first-child").clone()[0];
            var atag = instructor_link.getElementsByTagName("a")[0];
            atag.setAttribute("href",instructor_url);
            atag.setAttribute("title","Instructor");
            atag.innerText = "Instructor";
            atag.setAttribute("class","instructor");
        

            $("#section-tabs li:first-child").after(instructor_link);

            console.log("Instructor button added!");
        } else {
            console.log("No instructor found so instructor button not added.");
        }
    };
    
    $.getTeacherURL(insertInstructorButton);
    
    
});