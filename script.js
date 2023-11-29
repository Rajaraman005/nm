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
