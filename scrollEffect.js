// JavaScript for Scrolling Animation
const animateItems = document.querySelectorAll("#scroll-effect");

function checkAnimation() {
  animateItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight * 0.75) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", checkAnimation);
checkAnimation(); // Check initially on page load
