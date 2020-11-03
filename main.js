$(document).ready(function () {

    var firstImgEl = $('.first');
    var firstCircleEl = $('.first');
    var lastImgEl = $('.last');
    var lastCircleEl = $('.last');

    $('.slider-wrapper > .next').click(function (){

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

    })

    $('.slider-wrapper > .prev').click(function (){

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

    })
})
