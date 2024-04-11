let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let totalSlides = slides.length;

// Preload images
for (let i = 0; i < totalSlides; i++) {
  let img = new Image();
  img.src = slides[i].getElementsByTagName('img')[0].src;
}

showSlides();

function showSlides() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > totalSlides) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000); // Change slide every 2 seconds
}
