"use strict";

/*!
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - objectFitImages.js;
* - preventBehavior.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 * @description Init hamburger logic with animated
 */
function initHamburger() {
  var btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector(".header__wrapper-mobile");

  btn.addEventListener("click", function (e) {

    e.currentTarget.classList.toggle("is-active");

    hideScrollContainer.forEach(function (val, idx) {
      val.classList.toggle("is-hideScroll");
    });

    mobileContainer.classList.toggle("is-open");
  });
}

/**
 * @name initHeaderFixed
 * @description
 */
function initHeaderFixed() {

  var countScroll = $(window).scrollTop(),
      headerElement = $('.header');

  if (countScroll > 10) {
    headerElement.addClass("header--fixed");
  } else {
    headerElement.removeClass("header--fixed");
  }
}

/**
 * @name initObjectFitImages
 * @description Polyfill object-fit/object-position on <img>
 */
var initObjectFitImages = function initObjectFitImages() {
  var objFitImages = document.querySelectorAll('[objFitImages-js]');

  objectFitImages(objFitImages);
};

/**
 * @name initPreventBehavior
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {
  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSmoothScroll
 * @description
 */
function initSmoothScroll() {
  var btnName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[anchor-js]";
  var animateSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;


  $(btnName).on("click", function (e) {

    var linkHref = $(e.currentTarget).attr('href'),
        headerHeight = $(".header").outerHeight() || 0,
        topHeightOffset = $(linkHref).offset().top - headerHeight;

    $('body, html').animate({
      scrollTop: topHeightOffset
    }, animateSpeed);
  });
}

/**
 * @name initWebFontLoader
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

  WebFont.load({
    google: {
      families: ['Montserrat:400,500,700,800']
    }
  });

  // const WebFontConfig = {
  //   custom: {
  //     families: [
  //       'Lato:n1,n3,n4,n5,n6,n7,n9'
  //     ]
  //   }
  // };
};

/**
 * @description Window on load.
 */
$(window).on("load", function (ev) {
  initHeaderFixed();
});

/**
 * @description Window on resize.
 */
$(window).on("resize", function (ev) {});

/**
 * @description Window on scroll.
 */
$(window).on("scroll", function (ev) {
  initHeaderFixed();
});

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = $(document),
      _window = $(window);

  /**
   * =============================================
   * CALLBACK
   * =============================================
   */
  /**
   *
   */
  var parallaxTitle = function parallaxTitle() {
    if ($("[parallax-js]").length) {
      $(function () {
        $.stellar({
          horizontalScrolling: false,
          hideDistantElements: false
        });
      });
    }
  };

  /**
   *
   */
  var headerLinkActive = function headerLinkActive() {
    $(".header__link").on("click", function (ev) {
      var elem = $(ev.currentTarget),
          mobileContainer = document.querySelector(".header__wrapper-mobile");

      $(".header__link").removeClass("is-active");
      elem.addClass("is-active");

      mobileContainer.classList.remove("is-open");
    });
    $(".nav__btn").on("click", function (ev) {
      var elem = $(ev.currentTarget),
          elemDataId = elem.data("id");

      console.log(elemDataId);

      $(".header__link").removeClass("is-active");
      $(".header__link[data-id='" + elemDataId + "']").addClass("is-active");
    });
  };

  /**
   * @description Init all method
   */
  var initJquery = function initJquery() {
    initWebFontLoader();
    initPreventBehavior();
    initObjectFitImages();
    // ...
    initSmoothScroll();
    initHamburger();
    // ...
    parallaxTitle();
    headerLinkActive();
  };
  initJquery();
});