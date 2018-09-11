

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


  /**
   * =============================================
   * CALLBACK
   * =============================================
   */
  /**
   *
   */
  const parallaxTitle = () => {
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
  const headerLinkActive = () => {
    $(".header__link").on("click", (ev) => {
      const elem = $(ev.currentTarget);

      $(".header__link").removeClass("is-active");
      elem.addClass("is-active");
    });
  };



  /**
   * @description Init all method
   */
  const initJquery = () => {
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

