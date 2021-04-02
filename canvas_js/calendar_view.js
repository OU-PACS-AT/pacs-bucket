var LinkText = "Calendar"; //Edit between quotes to change the link text
 
var cururl = location.href;
if (cururl.indexOf("/courses/") >= 0)
{
var CanvasTenant = window.location.host.split('.')[0]
                var courseid = cururl.split('/')[4];
                var newsechtml = "<li class='section'><a href='https://" + CanvasTenant + ".ou.edu/calendar?include_contexts=course_" + courseid + "' class='settings' target='_blank' tabindex='0'>" + LinkText + "</a></li>";
$('#section-tabs').append(newsechtml);
}