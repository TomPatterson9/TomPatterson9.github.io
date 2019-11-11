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

bulmaCarousel.attach('#project-carousel', {
    slidesToScroll: 1,
    slidesToShow: 2,
    infinite: true,
    
 });