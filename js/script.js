(function ($) {
  $.fn.mySlider = function (settings) {

    var options = $.extend({
      autoSlide: false,
      dots: "true",
      moveSlide: "horizontal",
      activeSlideNum: 1,
      buttons: true,
      dots: true,
      btnArray: ['>', '<'],
      duration: 4000
    }, settings);

    this.each(function () {

      var thisSlider = $(this);
      var items = thisSlider.find('.mySlider__item');


      if (!thisSlider.hasClass('mySlider')) {
        return;
      }

      var Slider = (function () {
        var flag = false;
        var timer = 0;

        return {
          init: function () {

            var _this = this;
            // создаем дополнительные элементы
            _this.createElement();

            var
              btn = thisSlider.find(".mySlider__btn"),
              dots = thisSlider.find(".mySlider__dots-item");
            // автопереключение
            if (options.autoSlide)
              _this.autoSwitch();
            // переключение по кнопкам
            btn.on('click', function (e) {
              e.preventDefault();

              var
                $this = $(this),
                slides = items,
                activeSlide = slides.filter('.active'),
                nextSlide = activeSlide.next(),
                prevSlide = activeSlide.prev(),
                firstSlide = slides.first(),
                lastSlide = slides.last();

              _this.clearTimer();

              if ($this.hasClass("mySlider__btn-next")) {
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
            // переключение по точкам
            dots.on('click', function (e) {
              e.preventDefault();

              var
                $this = $(this),
                activeDot = dots.filter('.active'),
                curDotNum = $this.index(),
                direction = (activeDot.index() < curDotNum) ? 'forward' : 'backward',
                reqSlide = items.eq(curDotNum);

              if (!$this.hasClass('active')) {
                _this.moveSlide(reqSlide, direction);
                _this.clearTimer();
              }

            });

          },
          createElement: function () {
            var _this = this;
            // оборачиваем items
            items.wrapAll("<div class='mySlider__list' />");
            // установка первого слайда
            if (options.activeSlideNum <= items.length && options.activeSlideNum >= 0) {

              items.eq(options.activeSlideNum - 1).addClass('active');
            } else {
              items.eq(0).addClass('active');
            }
            //создаем  кнопки для переключения
            if (options.buttons) {

              thisSlider.append('<div class="mySlider__nav" />');
              var navContainer = thisSlider.find('.mySlider__nav');

              navContainer.append('<div class="mySlider__btn mySlider__btn-next" /><div class="mySlider__btn mySlider__btn-prev" />')

              var
                btnNext = thisSlider.find('.mySlider__btn-next'),
                btnPrev = thisSlider.find('.mySlider__btn-prev');
              // добавляем кнопки из настроек 
              btnNext.html(options.btnArray[0]);
              btnPrev.html(options.btnArray[1]);

            }
            // создаем точки для переключения
            if (options.dots) {
              thisSlider.append('<ul class="mySlider__dots" />');

              var
                dotsContainer = thisSlider.find('.mySlider__dots'),
                dotsMarkup = '<li class="mySlider__dots-item" />';

              for (var i = 0; i < items.length; i++) {
                dotsContainer.append(dotsMarkup);
              }
              // устанавливаем активную точку
              _this.setActiveDot();
            }

          },
          setActiveDot: function () {
            var
              slides = items;

            thisSlider.find('.mySlider__dots-item')
              .eq(slides.filter('.active').index())
              .addClass('active')
              .siblings()
              .removeClass('active')
          },
          autoSwitch: function () {
            var
              _this = this;

            timer = setInterval(function () {
              var
                slides = items,
                activeSlide = slides.filter('.active'),
                nextSlide = activeSlide.next(),
                firstSlide = slides.first();

              if (nextSlide.length) {
                _this.moveSlide(nextSlide, 'forward');
              } else {
                _this.moveSlide(firstSlide, 'forward');
              }
            }, options.duration);

          },
          clearTimer: function (duration) {
            if (timer) {
              clearInterval(timer);
              this.autoSwitch();
            }
          },
          moveSlide: function (slide, direction) {
            var
              _this = this,
              slides = items,
              activeSlide = slides.filter('.active'),
              slideWidth = slides.width(),
              slideHeight = slide.height(),
              duration = 500,
              reqCssPosition = 0,
              reqSlideStrafe = 0;

            function directionAnimate(pos) {

              if (pos == "top") {
                if (direction == "forward") {
                  reqCssPosition = slideHeight;
                  reqSlideStrafe = -slideHeight;
                } else if (direction == "backward") {
                  reqCssPosition = -slideHeight;
                  reqSlideStrafe = slideHeight;
                }
              } else if (pos == "left") {
                if (direction == "forward") {
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
              objMovebleAnimate[pos] = 0;

              slide.css(pos, reqCssPosition).addClass('inslide');

              var movebleSlide = slides.filter('.inslide');

              activeSlide.animate(objActiveAnimate, duration);

              movebleSlide.animate(objMovebleAnimate, duration, function () {
                var $this = $(this);

                slides.css(pos, 0).removeClass('active');
                $this.toggleClass('inslide active');

                _this.setActiveDot();

                flag = false;

              });
            }
            // флаг для анимации
            if (flag) {
              return;
            }
            flag = true;

            if (options.moveSlide == "horizontal") {
              directionAnimate("left");
            } else if (options.moveSlide == "vertical") {
              directionAnimate("top")
            }
          }

        }

      })();

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
    moveSlide: "vertical",
    activeSlideNum: 2,
    btnArray: ["up", "dn"],
    //    dots: false,
    autoSlide: true
  })
})
