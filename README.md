# Simple jquery slider plugin

__plugin features__
  * horizontal or vertical scrolling animation
  * option for setting equal heights for blocks
  
[DEMO version](https://denisseroshtan.github.io/myslider.github.io/)

## Getting started:
include CSS
  ```html
    <link rel="stylesheet" href="mySlider/mySlider.min.css">
  ```
include JS
  ```html
    <script src="js/jquery.min.js"></script>
    <script src="mySlider/mySlider.jquery.min.js"></script>
  ```
  
Set HTML  
  ``` html
    <div class="slider mySlider">
        <div class="mySlider__item"> some content </div>
        <div class="mySlider__item"> some content </div>
        <div class="mySlider__item"> some content </div>
    </div>
  ```
  __html class 'mySlider' and 'mySlider__item' is required__
  
Set JS  
  ```js
    $('.mySlider').mySlider();
  ```  
  
  
### vertical animation
  ```js
    $('.mySlider').mySlider({
      moveSlide: "vertical"
    })
  ```
  
### set equal height for `class = 'mySlider__item'`
  ```js
    $('.mySlider').mySlider({
      equalHeights: true
    })
  ```  
  
### API    
  * activeSlideNum
    * type: number
    * default: 1
  The number of items you want to see on the screen.  
  
  * moveSlide
    * type: string
    * default: "horizontal"
  move animation of slides "horizontal" or "vertical"
  
  * buttons
    * type: boolean
    * default: true
  Show next/prev buttons.
  
  * btnArray
    * type: array
    * default: ['>', '<']
  HTML allowed
  
  * dots
    * type: boolean
    * default: true
  Show dots navigation.
  
  * autoSlide
    * type: boolean
    * default: false
  autoplay animation
  
  * duration
    * type: number
    * default: 4000
  autoplay speed
  
  * equalHeights
    * type: boolean
    * default: false
  set equal height for block `mySlider__item`
  
    
  