 
    $(document).ready(function() {
        $('#hideButton').click(function(){
          $('#disclaimer').hide();
        });
      });
    
    $(document).ready(function() {
        $('#hideButton').click(function(){
          $(this).hide();
        });
        $('#showButton').click(function(){
          $('#disclaimer').show();
        });
      });
    
    $(document).ready(function(){
        $('#toggleButton').click(function(){
        if($('#disclaimer').is(':visible')) {
          $('#disclaimer').hide();
        } else {
          $('#disclaimer').show();
        }
      });
    
    });
    
    $(document).ready(function(){
      $('#toggleButton2').click(function(){
        $('#disclaimer').toggle();
      });
    });
    
    //hide toggle text on toggle2  
    $(document).ready(function(){
      $('#toggleButton3').click(function(){
        $('#disclaimer').toggle();
        
        if($('#disclaimer').is(':visible')) {
          $(this).val('Hide Disclaimer').css({'background-color': '#004488'});
        } else {
          $(this).val('Show Disclaimer').css({'background-color': '#884400'});
        }
    });
    });
    
    $(document).ready(function(){
      $('<input type="button" value="Toggle Button 4" id="toggleButton">').insertAfter('#disclaimer');
      $('#toggleButton').click(function(){
        $('#disclaimer').toggle();
      });
    });
    
    $(document).ready(function(){
      $('<input type="button" value="toggle 5" id="toggleButton">').insertBefore('#disclaimer');
      $('#toggleButton').click(function(){
        $('#disclaimer').toggle();
      });
    });
    
    $(document).ready(function(){
      $('<strong>START!</strong>').prependTo('#disclaimer2');
      $('<strong>END!</strong>').appendTo('#disclaimer2');
    });
    
    $(document).ready(function(){
      $('#no-script').remove();
    });

    
    // JQuery intro Example Animation//
    //Week One//
    
    $("document").ready(function() {
      $("#Go").click(function() {
        $("#testDiv").animate({width:100},100)
        .animate({height: 100},100)
        .animate({left: 100},400)  
        .animate({top:"+=10", borderWidth: 3}, "slow")
    });
    
    });
    
    $("document").ready(function()  {
      $("#Intro").css("border", "3px solid #CC0000");
    
    });
    $("document").ready(function()  {
        $(".selectors").css("border", "3px solid #3366FF");
        $(".filters").css("border", "3px solid #322E3D");
    });

    $("document").ready(function()  {
        $("h1:not(.selectors)").css("border", "3px solid #CC0066");
    });


    $("document").ready(function()  {
        $("#testDiv2").css("border", "3px solid #322E3D");
    });

    
    
    $("document").ready(function() {
        $("#Go1").click(function() {$("#TestDiv3")
        .animate({width:100},200)
        .animate({height: 100},200)
        .animate({left: 100},200)  
        .animate({top:"+=20", borderWidth: 3}, "slow")
    });
});



 //Week Two//
 
 //Animate the arrow get bigger//
 $("document").ready(function() {
  $("#Go2").click(function() {$("#TestDiv4")
  .animate({width:"150px"}, 200);
  });
});

 //Animate the arrow to move to the left//

$("document").ready(function() {
  $("#Go3").click(function() {$("#TestDiv4")
  .animate({left: "300px"},1000,"swing");
})
});

 //Animate the arrow to get bigger and move to the left//

$("document").ready(function() {
  $("#Go4").click(function() {$("#TestDiv4")
  .animate({left: "300px", width:"150px"},1000,"swing");
})
});


//Animate the square to fade in//

$("document").ready(function() {
  $("#Go5").click(function()  {$("#TestDiv5")
  .fadeIn("normal");
});
  $("#Go6").click(function()  {$("#TestDiv5")
  .fadeOut("normal");
});

$("#Go7").click(function() {$("#TestDiv5")
              .fadeTo("fast", 0.3)
              .fadeTo("fast", 1.0)
              .fadeTo("fast", 0.3)
              .fadeTo("fast", 1.0);
});

});