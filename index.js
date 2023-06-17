//change background
function changeBackground(imagePath) {
  document.body.style.backgroundImage =
    "linear-gradient(to left,rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)),url('" +
    imagePath +
    "')";
  document.body.style.transition = "background-image 0.5s ease-in-out";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}

function changeBackground1(imagePath) {
  document.body.style.backgroundImage =
    "linear-gradient(to left,rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),url('" +
    imagePath +
    "')";
  document.body.style.transition = "background-image 0.5s ease-in-out";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}

document.addEventListener("DOMContentLoaded", function () {
  //nav for small screens
  const hamburgerMenu = document.querySelector(".bx-menu");
  const menu = document.querySelector(".nav__menu");
  const closeButton = document.querySelector(".close-button");

  hamburgerMenu.addEventListener("click", function () {
    menu.style.display = "block";
    closeButton.style.display = "block";
    hamburgerMenu.style.display = "none";
  });

  closeButton.addEventListener("click", function () {
    menu.style.display = "none";
    closeButton.style.display = "none";
    hamburgerMenu.style.display = "block";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      menu.style.display = "block";
      closeButton.style.display = "none";
    } else {
      menu.style.display = "none";
      closeButton.style.display = "none";
    }
  });

  //title
  AOS.init();

  const items = document.querySelectorAll(".menu .wrapper");

  const typingEffect = new Typed(".span", {
    strings: ["CEBUTECH - DANAO CAMPUS"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1500,
  });

  items.forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      const newTitle = wrapper.getAttribute("data-title");

      typingEffect.strings = [newTitle];

      typingEffect.reset();
      typingEffect.start();
    });
  });

  //welcome chuchu
  const welcome = document.querySelector(".welcome");
  items.forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      welcome.innerHTML = "THIS IS";
    });
  });

  //description
  const description = document.querySelector(".data-description");

  items.forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      const newDescription = wrapper.getAttribute("data-description");

      description.textContent = newDescription;
    });
  });

  //location
  const location = document.querySelector(".data-location");

  items.forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      const newLocation = wrapper.getAttribute("data-location");

      location.textContent = newLocation;
    });
  });

  //image
  // Get the slider items
  const sliderItems = document.querySelectorAll('.slider .menu .wrapper');

  const imageElement = document.querySelector('.image');

  // Add click event listener to each slider item
  sliderItems.forEach((item) => {
    item.addEventListener('click', () => {
      // Get the image attribute value of the clicked slider item
      const imageSrc = item.getAttribute('image');
      
      // Change the image source of the building div
      imageElement.src = imageSrc;
    });
  });


  //button
  const buttontext = document.querySelector(".button-62");
  const codepoint = "\f";

  items.forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      buttontext.innerHTML =
        codepoint + " <a href='dir.html'> Go to Directory</a>";
    });
  });

  //scroll on drag
  const scrollContainer = document.querySelector(".slider-wrapper");
  const scrollContent = document.querySelector(".menu");
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const moveX = (x - startX) * 1; // Adjust the scrolling sensitivity as needed
    scrollContainer.scrollLeft = scrollLeft - moveX;
  });

  //modal
  const openModalButton = document.getElementById("button");
  const mapModal = document.getElementById("mapModal");
  const closeModal = mapModal.querySelector(".close");
  const modalImage = mapModal.querySelector("#mapImage");
  const sliderImages = document.querySelectorAll(".slider .menu .wrapper");

  openModalButton.addEventListener("click", function () {
    mapModal.style.display = "block";
  });

  closeModal.addEventListener("click", function () {
    mapModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === mapModal) {
      mapModal.style.display = "none";
    }
  });

  sliderImages.forEach(function (sliderImage) {
    sliderImage.addEventListener("click", function () {
      const imagePath = this.getAttribute("data-image");
      modalImage.src = imagePath;
    });
  });

  //search
  const searchInput = document.getElementById("searchInput");
  const wrappers = Array.from(document.getElementsByClassName("wrapper"));

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    wrappers.forEach((wrapper) => {
      const title = wrapper.getAttribute("data-title").toLowerCase();

      if (title.includes(searchTerm)) {
        wrapper.style.display = "block";
      } else {
        wrapper.style.display = "none";
      }
    });
  });

});

  //prev next scroll
  const sliderWrapper = document.getElementById("menu");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  
  let currentIndex = 0;
  const maxIndex = (sliderWrapper.children.length - 1)/3;
  
  prevButton.style.display = "none";
  
  function scrollSlider(index) {
  sliderWrapper.style.transform = `translateX(-${index * 14}%)`;
  
  // Show/hide the previous and next buttons based on the index
  if (index == 0) {
      prevButton.style.display = "none";
  } else {
      prevButton.style.display = "block";
  }
  
  if (index == maxIndex) {
      nextButton.style.display = "none";
  } else {
      nextButton.style.display = "block";
  }
  }
  
  prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
      currentIndex--;
      scrollSlider(currentIndex);
  }
  });
  
  nextButton.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
      currentIndex++;
      scrollSlider(currentIndex);
  }
  });  
    
