


$(document).ready(function(){
    $("#corp").click(function(){
        $(".first-partners").fadeIn();
      $(".first-partners").css({"display": "block"});
          $(".second-partners").css({"display": "none","border-bottom": "4px solid lightgrey","color":"grey"});
      $(".third-partners").css({"display": "none"});
    });
  });


  $(document).ready(function(){
    $("#public").click(function(){
        $(".second-partners").fadeIn();
      $(".second-partners").css({"display": "block","border-bottom": "4px solid lightgrey","color":"grey"});
      $(".first-partners").css({"display": "none"});
      $(".third-partners").css({"display": "none"});
    });
  });  


  $(document).ready(function(){
    $("#comm").click(function(){
        $(".third-partners").fadeIn();
      $(".third-partners").css({"display": "block","border-bottom": "4px solid lightgrey","color":"grey"});
      $(".first-partners").css({"display": "none"});
      $(".second-partners").css({"display": "none"});
    });
  }); 



//   scroll code

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadein').each( function(){
            
            var bottom_of_element = $(this).offset().top ;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'0px',"opacity" : "1"},1000);
            }
            
        }); 
    });
});


// SLIDE AND FADE IN FUNCTION

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadedown').each( function(){
            
            var bottom_of_element = $(this).offset().top ;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-top':'0px',"opacity" : "1"},1000);
            }
            
        }); 
    });
});



$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeint').each( function(){
            
            var bottom_of_element = $(this).offset().top ;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'0px',"opacity" : "1"},1000);
            }
            
        }); 
    });
});


// 


$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  });




//   slider***************************

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  document.getElementsByClassName("default").style.zIndex = "0";
  dots[slideIndex-1].className += " active";

}


