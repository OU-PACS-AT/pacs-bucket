////////////////////////////////////////////////////////////////////////////////
// Create colored left borders on module items that indicate completion status//
////////////////////////////////////////////////////////////////////////////////

//Check to see if we're on the module page by looking for '.module-item-status-icon i'
$('.module-item-status-icon i').ready(function(){
    //I was having problems with this code executing before the page fully loaded.  document.ready doesn't even seem to work.  Probably needs to be refactored
    $(document).ready(()=>{
        //to solve my code running before page finished loading problem I had to put in this bandaid.  You may need to adjust the timeout or if you can refactor this that would be great.
        setTimeout(()=>{
            //grab each context module block that is on the modules page.
            var contextModule = $(".context_module");
            //loop through each module block that you have
            $.each(contextModule, function() {
              //Each 'item' inside a module block is identified by the class of .ig-row.  Grab all those
              var igRows = $(this).find(".ig-row");
              var totalItems = igRows.length;
              //Grabs the element that currently says "complete all item". We're going to change that
              var requirementsMsg = $(this).find(".requirements_message");
              var completedItems = 0;
              //loop through each item in the module block.  If it has a green check, then we add one to our completeItems
              $.each(igRows, function(index, value) {
                  if ($(this).find("i.icon-check").css("display") === "inline-block") {
                      completedItems++;
                      //this is optional styling flair I added to the items in my module block.  You can delete or edit this line
                      $(this).css("border-left", "3px solid #aebe37");
                  } else {
                      $(this).css("border-left", "3px solid #ebbab9");
                  }
            })
            //Change the "complete all items" to instead be a tracker with total items completed.
            $(requirementsMsg).find("ul li").text(completedItems + "/" + totalItems);
        })
        },1000)
    })
})