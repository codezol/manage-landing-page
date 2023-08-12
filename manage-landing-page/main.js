const navToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryheader = document.querySelector(".primary-header")
const close_icon = document.querySelector(".icon-close")
const hamburger_icon = document.querySelector(".icon-hamburger")
const body = document.querySelector("body")
navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible")
  primaryheader.toggleAttribute("data-visible")
  body.toggleAttribute("data-visible")
  close_icon.classList.toggle("hidden")
  hamburger_icon.classList.toggle("hidden")
})

// slider 
const slider = new A11YSlider(document.querySelector(".slider"), {
  // slidesToShow: 1,
  // arrows: true, // arrows enabled 767px and down
  dots: true,
  // autoplay: true,
  // autoplaySpeed: 2500,
  centerMode: true,
  responsive: {
    600 : {
      // disable: false,
      // slidesToShow: 4,
      dots: false // dots enabled 1280px and up
    }
  }
});;