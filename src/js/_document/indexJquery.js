

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
   * @description Init all method
   */
  const initJquery = () => {
    initWebFontLoader();
    initPreventBehavior();
    initObjectFitImages();
    // ...
    initSmoothScroll();
    // ...
    parallaxTitle();
  };
  initJquery();
});

