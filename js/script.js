(function ($) {
  $.fn.mySlider = function (settings) {

    var that = this;

    var options = $.extend({
      auto: false,
      duration: 2000,
      next: ".next",
      prev: ".prev",
      dots: "true",
      moveSlide: "horizontal"
    }, settings);

    this.each(function () {

      var thisSlider = $(this);

      if (!thisSlider.hasClass('mySlider')) {
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
              slideHeight = slide.height(),
              duration = 500,
              reqCssPosition = 0,
              reqSlideStrafe = 0;
            
            function directionAnimate(pos){
             
            if (pos == "top"){
              if (direction == "forward"){
                reqCssPosition = slideHeight;
                reqSlideStrafe = -slideHeight;
              } else if (direction == "backward") {
                reqCssPosition = -slideHeight;
                reqSlideStrafe = slideHeight;
              }
            } else if (pos == "left") {
              if (direction == "forward"){
                reqCssPosition = slideWidth;
                reqSlideStrafe = -slideWidth
              } else if (direction == "backward") {
                reqCssPosition = -slideWidth;
                reqSlideStrafe = slideWidth;
              }
            
            } 
            
              objActiveAnimate = {};
              objMovebleAnimate = {};
              
              objActiveAnimate[pos] = reqSlideStrafe;
              objMovebleAnimate[pos] = 0
              
              slide.css(pos,reqCssPosition).addClass('inslide');
              var movebleSlide = slides.filter('.inslide');

              activeSlide.animate(objActiveAnimate, duration);
              
              movebleSlide.animate(objMovebleAnimate, duration, function () {
                var $this = $(this);
                slides.css(pos, 0).removeClass('active');
                $this.toggleClass('inslide active');

                // _this.setActiveDot(container.find(".slider__dots"));
                flag = false;

              });
            }  

            if (flag) {
              return;
            }
            flag = true;
            
            if (options.moveSlide == "horizontal") {           
              directionAnimate("left");
            } else if(options.moveSlide == "vertical") {             
              directionAnimate("top")
            }

          }
        }


      })()

      // инициализация слайдера
      Slider.init();

    })

    return this;
  }
})(jQuery)

$(function () {
  $('.slider').mySlider({

  })
  
  $('.slider__two').mySlider({
    moveSlide : "vertical"
  })
})
