

/**
 * @name initHamburger
 * @description Init hamburger logic with animated
 */
function initHamburger() {
  const btn = document.querySelector("[hamburger-js]"),
    hideScrollContainer = document.querySelectorAll("html, body"),
    mobileContainer = document.querySelector(".header__wrapper-mobile");

  btn.addEventListener("click", (e) => {

    e.currentTarget.classList.toggle("is-active");

    hideScrollContainer.forEach((val, idx) => {
      val.classList.toggle("is-hideScroll");
    });

    mobileContainer.classList.toggle("is-open")
  });
}