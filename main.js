let currentSlide = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(n) {
  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[currentSlide].style.display = "block";
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

// Automatically advance the slider every 3 seconds
setInterval(nextSlide, 3000);

// Show the initial slide
showSlide(currentSlide);
