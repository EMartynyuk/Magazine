$(function () {
  $(".header__navigation-btn, .header__link").on("click", function () {
    $(".header__navigation--hidden").toggleClass("header__navigation--active");
  });

  $(".slider__carousel").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $(".team__slider").slick({
    dots: true,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 3000
    prevArrow:
      '<button type="button" class="slick-prev"><svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29 8L0.999999 8M0.999999 8L8.18919 0.999999M0.999999 8L8.18919 15" stroke="#858585"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.34742e-08 8L28 8M28 8L20.8108 15M28 8L20.8108 1" stroke="#858585"/></svg></button>',
    responsive: [
      {
        breakpoint: 1084,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1260,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".star").rateYo({
    rating: 4,
    starWidth: "12px",
    normalFill: "#998e78",
    ratedFill: "#6e9c9f",
    readOnly: true,
  });

  Fancybox.bind("[data-fancybox]", {});

  $(".popup-final__btn").on("click", function () {
    $(".fancybox__container, .fancybox-focus-guard").css({ display: "none" });
    $("html").removeAttr("style");
    $("html").removeClass();
  });

  var mixer = mixitup(".shop__items");
});


function init() {
  var map = new ymaps.Map("map", {
    center: [59.9330274988658, 30.32267787352242],
    zoom: 16,
  });

  var placemark = new ymaps.Placemark(
    [59.9330274988658, 30.32267787352242],
    {
      balloonContentHeader: "Womazing",
      balloonContentBody: "Мы здесь!"
    },
    {
      iconLayout: "default#image",
      iconImageHref: "../images/map-marker.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -20],
    }
  );

  map.geoObjects.add(placemark);

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
}

ymaps.ready(init);
