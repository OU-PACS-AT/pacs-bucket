// "Edit your SALSA" button for Canvas LMS
// Using a custom instance of Salsa? --> In variable salsaLink, replace 'http://salsa.usu.edu/SALSA/' with the URL to YOUR custom instance.
// Example: salsaLink = 'http://myschool.salsa.usu.edu/SALSA/' + salsaID;
// Paste JavaScript into your Canvas global JS file


// Store account for pre-production 
//    Edit button should show up for pp only
//    viewID is where current account id is stored.
var pp_account_id = 16;

var url = window.location.href;

var leveledURL = url.split('/');
var view = url.match(/\.edu\/?$/) ? 'dashboard' : leveledURL[3];
view = view.match(/^\?/) ? 'dashboard' : view;
var viewID = (view !== 'dashboard' && typeof leveledURL[4] !== 'undefined') ?
	leveledURL[4] : null;


// Store Canvas course number in a variable
var coursenum, matches, killspot;
coursenum = null;
matches = location.pathname.match(/\/courses\/(.*)/);
if (matches) {
    coursenum = matches[1];
    killspot = coursenum.indexOf("/", 0);
    if (killspot >= 0) {
        coursenum = coursenum.slice(0, killspot);
    }
}

$(document).ready(function() {
  

    // Will Poillion - 6/12/2017
    //    Only show edit button if admin & in pp
    //if (pp_account_id == viewID) {
    
// WILL POILLION - 4-2-2018
// Removed edit salsa link temporarily for server migration. 
// Salsa on atari turned off
// Use salsa on panther (https://dev-salsa.outreach.ou.edu for now. Must be within outreach VPN to access)
  
  if (ENV['current_user_roles'].includes('admin')){
            if ($('.edit_syllabus_link').length > 0 && $('#salsa_document_edit_link').length > 0) {
        
                var salsaLink = $("#salsa_document_edit_link").attr("href");
                $('.edit_syllabus_link').before('<a class="btn salsaLink button-sidebar-wide" href="' + salsaLink + '" data-tooltip="top" title="Button will open in a new tab" target="_blank"><img src="https://raw.githubusercontent.com/idbygeorge/salsa/master/public/img/salsa_icon.png"> Edit My SALSA</a>');
            }
        } 
    
    //}

    // Remove old edit button
    $('.edit_syllabus_link').remove();


});


