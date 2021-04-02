var copyrightLink = '<a style="text-decoration:none;white-space:nowrap;">&copy; 2018 &nbsp;</a>';

var pacsLink = '<a href="http://pacs.ou.edu" target="_blank">University of Oklahoma Extended Campus &nbsp;</a>';

var policiesLink = '<a href="http://www.ou.edu/content/web/landing/policy.html" target="_blank">&nbsp;Policies &nbsp;</a>';

var faceLink = '<a href="https://www.facebook.com/ouprofessionalandcontinuingstudies/" target="_blank">&nbsp;Facebook &nbsp;</a>';

var twitLink = '<a href="https://twitter.com/OU_PACS" target="_blank">&nbsp;Twitter &nbsp;</a>';

 
if (document.getElementById('footer') !== null){
    document.getElementById('footer').innerHTML=('<div style="border-top: 1px solid #fff;padding: 12px 0 0 0;"></div>' + copyrightLink + pacsLink  + policiesLink + faceLink + twitLink);
}
