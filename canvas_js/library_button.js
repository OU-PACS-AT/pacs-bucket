// University Libraries change link

$(function(){
    var pacs_library_link = "http://guides.ou.edu/pacs";
    var library_button_title = "University Libraries";
    
    $("a[title|= \"" + library_button_title + "\"]").attr("href", pacs_library_link).attr("target", "_blank");

});