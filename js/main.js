$(function () {
  $('.slider').mySlider();

  $('.slider__two').mySlider({
    moveSlide: "vertical",
    activeSlideNum: 2,
    btnArray: ["up", "dn"],
    dots: false,
    autoSlide: true,
    duration: 3000,
    equalHeights: true
  })
 
})