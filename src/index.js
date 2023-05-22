const toggle = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar")

toggle.addEventListener('click', () => {
    navbar.classList.toggle("active");
})

let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let container = document.querySelector(".slideshow-container");

console.log(slides)

// 6 slides
let slideIndex = 1;
let sIndex = 0
// slideIndex 0: the lord's prayer
showSlidesAuto();
showSlidesManual();
dotsdisplay()
// slides.length  = 6
function showSlidesAuto() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  sIndex++;
  if (sIndex > slides.length) {sIndex = 1}
  
  slides[sIndex-1].style.display = "block";
  setTimeout(showSlidesAuto, 5000);


}

function dotsdisplay() {
  for(let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[sIndex-1].className += " active";
  setTimeout(dotsdisplay, 5000)
}

const changeSlides = (n) => {
  showSlidesManual(slideIndex += n)
}

const currentSlide = (n) => {
  showSlidesManual(slideIndex = n)
}
function showSlidesManual(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    
  }
  for(let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


