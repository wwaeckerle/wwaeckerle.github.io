 
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


//Animate the square to fade in, fade out, and pulse//

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


//Animate the square to show, hide, and toggle.//
$("document").ready(function(){
  $("#Go8").click(function()  
  {$("#TestDiv6").show("normal");
});
$("#Go9").click(function()  
{$("#TestDiv6").hide(1000,"swing");
});
$("#Go10").click(function()  
{$("#TestDiv6").toggle("normal");
});


});


//Animate the square to slide up, slide down, and toggle slide.//
$("document").ready(function(){
  $("#Go11").click(function()  
  {$("#TestDiv7").slideUp(1000);
});
$("#Go12").click(function()  
{$("#TestDiv7").slideDown(200);
});
$("#Go13").click(function()  
{$("#TestDiv7").slideToggle("normal");
});

});

//Animate the color of the square//
$("document").ready(function(){
let state = true;
$("#Go14").on("click" , function(){
if(state){
$("#TestDiv8").animate({
  backgroundColor:"#aa0000",
  height:400,
  width: 400
  } , 1000);
} else  {
  $("#TestDiv8").animate({
    backgroundColor:"#000",
    height: 400,
    width: 700
  } , 1000);
  }
  state = !state;
});
});


//Animate one image to rollover fade onto the other//
$(document).ready(function()  {
  $('#fader').hover(function()  {
  $(this).find('img:eq(1)').stop(true,true).fadeIn();
}, function(){
  $(this).find('img:eq(1)').fadeOut();
})
});

//Animate the green box to move with setInterval timer//
$(document).ready(function(){
  let $green = $('#green');
  greenLeft = $green.offset().left;
  setInterval(function()  {
    $green.css('left', ++greenLeft);
  }, 100);
})

//Animate the red box to move with setInterval timer//
$(document).ready(function()  {
  let $red = $('#red'),
  redLeft = $('#red').offset().left;
  function moveRed()  {
    $red.css('left', ++redLeft);
    setTimeout(moveRed,200);
  }
  moveRed();
});

//Animate the slidshow_fade//
$(document).ready(function()  {
  slideShow();
});

function  slideShow() {
  let current = $('#photos .show');
  let next = current.next().length ?
   current.next() : current.siblings().first();

   current.hide().removeClass('show');
   next.fadeIn().addClass('show');

   setTimeout(slideShow, 3000);
}



//Animate a dropdown menu
$(document).ready(function(){
  $('#practice_menu li ul').css({
    display: "none",
    left: "auto"
  });
  $('#practice_menu li').hover(function() {
    $(this)
      .find('ul')
      .stop(true, true)
      .slideDown('fast');
  }, function() {
    $(this)
      .find('ul')
      .stop(true,true)
      .fadeOut('fast');
  });
});


//Animate with event propagation
$(document).ready(function ()  {
  $('.epropagation').click(function() {
    alert('Hello from ' + $(this).attr('id'));
  });
});


///Animate a simple accordion menu
$(document).ready(function(){
    $('#simple_accordion ul > li ul')
      .click(function(event){
      event.stopPropagation();
  })
  .filter(':not(:first)')
  .hide();


$('#simple_accordion ul > li').click(function(){
  let selfClick = $(this).find('ul:first').is(':visible');
  if(selfClick)  {
    return;
  }

 $(this)
    .parent()
    .find('> li ul:visible')
    .slideToggle();
  

$(this)
.find('ul:first')  
.stop(true, true)
.slideToggle();
});
});
