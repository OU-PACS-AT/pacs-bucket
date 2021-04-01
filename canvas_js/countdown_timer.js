if (document.getElementById("countdown_timer") !== null){
    // Set the date we're counting down to
    
    try{
        var countDownDate = new Date(document.getElementById("countdown_timer").innerHTML).getTime();
    
        // Update the count down every 1 second
        var x = setInterval(function() {
    
          // Get todays date and time
          var now = new Date().getTime();
        
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
        
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
          // Display the result in the element with id="demo"
          
          document.getElementById("countdown_timer").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";
        
          // If the count down is finished, write some text 
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown_timer").innerHTML = "EXPIRED";
          }
        }, 1000);

    
    } catch (e){
        console.log("Error converting countown_timer to real date");
        console.log(e);
    }
}