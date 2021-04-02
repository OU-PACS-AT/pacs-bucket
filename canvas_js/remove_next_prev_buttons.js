// Remove prev / next default canvas navigation buttons

$(document).ready(function() {
    // Will Poillion 2020-09-09
    // Switched to use vanilla JS so as not to depend on jquery
    //$('.module-sequence-footer').remove();
    
    var navigationFooter = document.getElementsByClassName("module-sequence-footer");
    if (navigationFooter != undefined && navigationFooter[0] != undefined) {
        navigationFooter[0].remove();
    } 
    
    console.log("Module Navigation Removed.");
}); 