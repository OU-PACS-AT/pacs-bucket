// Creates a Jquery UI accordion within the SALSA syllabus
// Will Poillion - 6-20-2017


$(document).ready(function() {
  
    
  
    if ($("#accordion").length) {
        // Will Poillion - 3-25-2020
        //  Previously canvas was automatically stripping <section> nodes when salsa was publishing to canvas.
        //  They stopped doing this and it broke the accordion.
        //  Since the <section> tags are crucial to how salsa itself functions, opting to remove them on the front end.
        var syllabusHtml = $("#accordion").html();
        syllabusHtml = syllabusHtml.replace(/\<section.*\>/g,'');
        syllabusHtml = syllabusHtml.replace(/\<\/section\>/g,'');
        
        $("#accordion").html(syllabusHtml);
        
        $("#accordion").accordion({
            active: false,
            collapsible: true, 
            heightStyle: "content"
        });
    }

});


