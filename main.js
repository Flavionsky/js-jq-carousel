$(document).ready(function () {

    $('.slider-wrapper > .prev').click(prevSlide);
    $('.slider-wrapper > .next').click(nextSlide);
    var firstImgEl = $('.first');
    var firstCircleEl = $('.first');
    var lastImgEl = $('.last');
    var lastCircleEl = $('.last');

    $(document).keyup(function(event){

      switch(event.which){

        case 37:
        prevSlide();
        break;
        case 39:
        nextSlide();
        break;
      }

    })
    $('.nav > i').click(function(){

      var selectedItemIndex = $(this).index()

      $(this).addClass('active')
      $(this).siblings().removeClass('active')

      var selectedImagesIndex = $('.images > img').eq(selectedItemIndex)

      selectedImagesIndex.addClass('active');
      selectedImagesIndex.siblings().removeClass('active')
    })

    function nextSlide(){

      var activeImageEl = $('img.active');
      var circleEl = $('i.active');

      if(activeImageEl.hasClass('last') && circleEl.hasClass('last')){

        firstImgEl.addClass('active');
        firstCircleEl.addClass('active');
        activeImageEl.removeClass('active');
        circleEl.removeClass('active');

      } else {

        activeImageEl.removeClass('active');
        circleEl.removeClass('active');
        activeImageEl.next().addClass('active');
        circleEl.next().addClass('active');

      }
    }

    function prevSlide(){

      var activeImageEl = $('img.active');
      var circleEl = $('i.active');

      if(activeImageEl.hasClass('first') && circleEl.hasClass('first')){

        lastImgEl.addClass('active');
        lastCircleEl.addClass('active');
        activeImageEl.removeClass('active');
        circleEl.removeClass('active');

      } else{

        activeImageEl.removeClass('active');
        circleEl.removeClass('active');
        circleEl.prev().addClass('active');
        activeImageEl.prev().addClass('active');

      }
    }

})
