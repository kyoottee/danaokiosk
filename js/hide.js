const sliderContainer = document.getElementById("slider-container");
const sliderContents = document.querySelectorAll(".slider-content");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentSlide = 0;

// Hide "previous" button on first slide
prevButton.classList.add("hidden");

// Show/hide "next" and "previous" buttons based on current slide
function showHideButtons() {
  if (currentSlide === 0) {
    prevButton.classList.add("hidden");
  } else {
    prevButton.classList.remove("hidden");
  }

  if (currentSlide === sliderContents.length - 