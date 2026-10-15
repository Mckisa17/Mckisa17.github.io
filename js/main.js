// Small enhancements only. The site works fully without this file.

// 1. Tell the CSS that JavaScript is running, so it can hide the
//    nav links behind the "Menu" button on small screens.
document.documentElement.classList.add("js");

// 2. Mobile menu: show/hide the nav links when the button is pressed.
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    // aria-expanded tells screen readers whether the menu is open
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// 3. Keep the footer year current automatically.
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
