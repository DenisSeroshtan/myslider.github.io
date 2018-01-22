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
  __html class `mySlider` and `mySlider__item` is required__
  
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
  
### set equal height for `mySlider__item`
  ```js
    $('.mySlider').mySlider({
      equalHeights: true
    })
  ```  
  
### API    
  * activeSlideNum
    * type: number
    * default: 1
    * description: the number of items you want to see on the screen
 

  * moveSlide
    * type: string
    * default: "horizontal"
    * description: move animation of slides "horizontal" or "vertical"


  * buttons
    * type: boolean
    * default: true
    * description: show next/prev buttons


  * btnArray
    * type: array
    * default: ['>', '<']
    * description: HTML allowed


  * dots
    * type: boolean
    * default: true
    * description: Show dots navigation.


  * autoSlide
    * type: boolean
    * default: false
    * description: autoplay animation


  * duration
    * type: number
    * default: 4000
    * description: autoplay speed


  * equalHeights
    * type: boolean
    * default: false
    * description: set equal height for block `mySlider__item`
    
  * loop
    * type: boolean
    * default: true
    * description: Infinity loop. Duplicate last and first items to get loop illusion.  
  
    
  