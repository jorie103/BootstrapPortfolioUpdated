$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
      if ($("#carouselButton").children("i").hasClass  ("fa-pause")) {
              $(".carousel").carousel("pause");
              $("#carouselButton").children("i").removeClass("fa-pause");
              $("#carouselButton").children("i").addClass("fa-play");
      } else {
              $(".carousel").carousel("cycle");
              $("#carouselButton").children("i").removeClass("fa-play");
              $("#carouselButton").children("i").addClass("fa-pause"); 
      } 
    });  
         $("#reserveButton").click(function() {
                $("#reserveModal").modal("show");
                }); 
                
        $("#loginButton").click(function() {
                $("#loginModal").modal("show");
                });

});

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
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tab;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tab = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    tab[i].className = tab[i].className.replace("dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += "dark-grey";
}
document.getElementById("tab").click();