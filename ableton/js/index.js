// desktop nav More + toggle
const collapsibleContent = document.querySelector(
  ".collapsible-content-container"
);
const collapsibleToggle = document.querySelector(".collapsible-toggle");
const collapsibleToggleIcon = document.querySelector(".bx-plus");
let collapsibleOpen = false;
// function to collapsible content
const handleCollapsible = () => {
  collapsibleOpen = !collapsibleOpen;
  collapsibleContent.classList.toggle("open-collapsible");

  if (collapsibleOpen) {
    collapsibleToggleIcon.classList.add("bx-minus");
    collapsibleToggleIcon.classList.remove("bx-plus");
  } else {
    collapsibleToggleIcon.classList.remove("bx-minus");
    collapsibleToggleIcon.classList.add("bx-plus");
  }
};

// tablet and mobile menu toggle
const menu = document.querySelector(".main-nav-content");
const menuToggle = document.querySelector(".menu-toggle");
const menuToggleIcon = document.querySelector(".bx-caret-down");
const logo = document.querySelector(".main-site-logo");
const secondaryNav = document.querySelector(".secondary-nav");
let isNavOpen = false;
// function to toggle menu
const setOpenNav = () => {
  isNavOpen = !isNavOpen;
  if (isNavOpen === false) {
    secondaryNav.style.position = "relative";
  }
  logo.classList.toggle("white-logo");
  menuToggle.classList.toggle("white-menu-toggle");
  menuToggleIcon.classList.toggle("bx-caret-up");
  menu.classList.toggle("visible-nav");
};

// Make secondary nav sticky when scrolling up
let lastScroll = 0;
window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY;

  if (currentScrollPos > lastScroll) {
    secondaryNav.style.top = "-140px";
  } else if (currentScrollPos < lastScroll && currentScrollPos > 45) {
    secondaryNav.style.top = "0";
    secondaryNav.style.position = "sticky";

    secondaryNav.style.zIndex = "15";
  } else {
    secondaryNav.style.zIndex = "1";
  }

  if (isNavOpen) {
    secondaryNav.style.background = "#ffffffe1";
    if (window.matchMedia("(max-width: 1024px)").matches) {
      secondaryNav.style.position = "fixed";
    }
  }

  lastScroll = currentScrollPos;
});