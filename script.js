document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    document.getElementById("panel_left").classList.add("panel_left");
    document.getElementById("panel_right").classList.add("panel_right");
    document.getElementById("loader").classList.add("loaded-circle");
    document.getElementById("loader-img").classList.add("loaded-img");
    document.getElementById("preloader").classList.add("loaded-img");
  }
};

//nav
function closeNav() {
  // Check if the checkbox is checked (dropdown is open)
  var checkbox = document.getElementById("nav-check");
  if (checkbox.checked) {
    // Uncheck the checkbox to close the dropdown
    checkbox.checked = false;
  }
}

// nav bg
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var nav = document.querySelector(".nav");
    var navHeight = nav.offsetHeight;
    var scrollPosition = window.scrollY;

    // Add the 'nav-scrolled' class when scrolling down
    if (scrollPosition > navHeight) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
});

//end of nav
$("#prev").on("click", function () {
  $("#cards").animate(
    {
      scrollLeft: "-=500",
    },
    500,
    "swing"
  );
});

$("#next").on("click", function () {
  $("#cards").animate(
    {
      scrollLeft: "+=500",
    },
    500,
    "swing"
  );
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  autoplay: {
    delay: 2000,
  },
});
//imageslider
let imageAnim = document.getElementById("image-animate");

let imageArray = [
  "image/01.jpg",
  "image/02.jpg",
  "image/03.jpg",
  "image/about.jpg",
];

let imageIndex = 0;

const startImage = () => {
  imageAnim.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
};

// Set the interval to change images every 800 milliseconds (0.8 seconds)
const slideshowInterval = setInterval(startImage, 2200);

// Optionally, you can stop the slideshow after a certain number of iterations
// For example, stop after 10 iterations
const maxIterations = 10;
let currentIteration = 0;

const stopSlideshow = () => {
  clearInterval(slideshowInterval);
};

// Uncomment the line below if you want to stop the slideshow after a certain number of iterations
// setTimeout(stopSlideshow, 800 * maxIterations);
