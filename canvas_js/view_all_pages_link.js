// Change Pages button to go straight to 'View All Pages'

$(function(){
    if (document.location.pathname.match(/\/courses\//)) {
        if ($('a[title=Pages]').length > 0){
            $('a[title=Pages]').attr("href",$('a[title=Pages]').attr("href").replace("wiki","pages"));
        }
    }
});