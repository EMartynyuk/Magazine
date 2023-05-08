$(function(){
    var mixer = mixitup('.shop__items');
    $('.slider__carousel').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.team__slider').slick({
        dots: true,
        fade: true,
        // autoplay: true,
        // autoplaySpeed: 3000
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/team-sliderarrowleft.svg"></img></button>',
        nextArrow:  '<button type="button" class="slick-next"><img src="../images/team-sliderarrowright.svg"></img></button>'
    });
    $('.star').rateYo({
        rating: 4,
        starWidth: "12px",
        normalFill: "#998e78",
        ratedFill: "#6e9c9f",
        readOnly: true
      });
})