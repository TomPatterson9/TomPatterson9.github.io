var i = 0;
var txt = "Hello, World !";
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("topButton").style.display = "block";
      const progressBarsArray = document.querySelectorAll('.progress66, .progress33, .progress100');

    progressBarsArray.forEach(element => {
      element.style.animationPlayState = "running";
      element.style.WebkitAnimationPlayState = "running";

    })

  } else {
    document.getElementById("topButton").style.display = "none";
  }
}

function scrollUp(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("imageSlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}