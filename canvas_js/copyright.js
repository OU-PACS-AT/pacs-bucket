var copyrightText = "Board of Regents-University of Oklahoma Extended Campus-College of Professional and Continuing Studies"
var currentYear = (new Date()).getFullYear();
var copyrightHtml = '<p>&copy; ' + currentYear + ' &nbsp;' +  copyrightText + '</p>';

var positioningCSS = "position: fixed; bottom: 0px; right: 0px; left: 0px; margin-left: auto; margin-right: auto;  float:left; z-index:99; ";
var fontCSS = "font-size: 10px; line-height: 0px; ";
var divCSS = "background-color: white; display: block; border: 1px solid black; padding: 0px 5px; max-width: 512px;";

var divContainer = "<div style='" + positioningCSS + divCSS + fontCSS + "'>" + copyrightHtml + "</div>";

if ($('body') !== null){
    $('body').append(divContainer);
}
