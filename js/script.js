(function ($) {
  $.fn.mySlider = function (settings) {

    var that = this;

    var options = $.extend({
      auto: false,
      duration: 2000,
      next: ".next",
      prev: ".prev",
      dots: "true"
    }, settings);

    this.each(function () {
      var thisSlider = $(this);

      if (!thisSlider.hasClass('my-slider')) {
        return;
      }

      var Slider = (function () {
        var flag = false;

        return {
          init: function () {
            var _this = this;
            var btn = thisSlider.find(".slider__arr");

            btn.on('click', function (e) {
              e.preventDefault();

              var
                $this = $(this),
                slides = $this.closest(thisSlider).find('.slider__item'),
                activeSlide = slides.filter('.active'),
                nextSlide = activeSlide.next(),
                prevSlide = activeSlide.prev(),
                firstSlide = slides.first(),
                lastSlide = slides.last();

              //  _this.clearTimer(settings.duration);

              if ($this.hasClass("slider__arr-next")) {
                if (nextSlide.length) {
                  _this.moveSlide(nextSlide, 'forward');
                } else {
                  _this.moveSlide(firstSlide, 'forward');
                }
              } else {
                if (prevSlide.length) {
                  _this.moveSlide(prevSlide, 'backward');
                } else {
                  _this.moveSlide(lastSlide, 'backward');
                }

              }
            });
          },
          moveSlide: function (slide, direction) {
            var
              _this = this,
              container = slide.closest(thisSlider),
              slides = container.find('.slider__item'),
              activeSlide = slides.filter('.active'),
              slideWidth = slides.width(),
              duration = 500,
              reqCssPosition = 0,
              reqSlideStrafe = 0;


            if (flag) {
              return;
            }
            flag = true

            if (direction === "forward") {
              reqCssPosition = slideWidth;
              reqSlideStrafe = -slideWidth;
            } else if (direction === "backward") {
              reqCssPosition = -slideWidth;
              reqSlideStrafe = slideWidth;
            }
            slide.css('left', reqCssPosition).addClass('inslide');

            var movebleSlide = slides.filter('.inslide');

            activeSlide.animate({
              left: reqSlideStrafe
            }, duration);
            movebleSlide.animate({
              left: 0
            }, duration, function () {
              var $this = $(this);
              slides.css("left", 0).removeClass('active');
              $this.toggleClass('inslide active')

              // _this.setActiveDot(container.find(".slider__dots"));

              flag = false;

            });
            
          },
        }


      })()
      
    // инициализация слайдера
      Slider.init();
      
    })

    return this;
  }
})(jQuery)

$(function () {
  $('.slider').mySlider()
})