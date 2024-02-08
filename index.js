// for first slider Animation

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function updateSlider() {
  const translateValue = -currentIndex * 100 + "%";
  slider.style.transform = "translateX(" + translateValue + ")";
}

// for service section slider

const imageWrapper = document.querySelector(".image-wrapper");
const imageItems = document.querySelectorAll(".service-image");
const imageLength = imageItems.length;

let totalScroll = 0;

function next() {
  totalScroll = (totalScroll + 1 + imageLength) % imageLength;
  scrolling();
}

function previous() {
  totalScroll = (totalScroll - 1 + imageLength) % imageLength;
  scrolling();
}

function scrolling() {
  const translateValue = -totalScroll * 25 + "%";
  imageWrapper.style.transform = "translateX(" + translateValue + ")";
}

// service section slider smaller device
const imageWrapper2 = document.querySelector(".image-wrapper2");
const imageItems2 = document.querySelectorAll(".service-image2");
const imageLength2 = imageItems2.length;

let totalScroll2 = 0;

function next2() {
  totalScroll2 = (totalScroll2 + 1 + imageLength2) % imageLength2;
  scrolling2();
}

function previous2() {
  totalScroll2 = (totalScroll2 - 1 + imageLength2) % imageLength2;
  scrolling2();
}

function scrolling2() {
  const translateValue = -totalScroll2 * 100 + "%";
  imageWrapper2.style.transform = "translateX(" + translateValue + ")";
}

// RESPONSIVE NAV BAR

// btn = hamburger
// to open = responsive-navlinks

const navOpen = document.querySelector(".hamburger");
const content = document.querySelector(".responsive-navlinks");
const navClose = document.querySelector(".nav-close");

navOpen.addEventListener("click", () => {
  content.style.display = "block";
});
navClose.addEventListener("click", () => {
  content.style.display = "none";
});

//DROPDOWN MENU
const dropdownBtn = document.querySelector(".expandable-btn");

const dropdownContent = document.querySelector(".expandable");

dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("dropdown-active");
});

//BACK TO TOP AFTER SCROLL
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
