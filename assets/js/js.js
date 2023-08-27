$(document).ready(function () {
  $(".carousel-indicators .btn-carouselWeb:first-child").addClass(
    "btn-carouselWebActive"
  );

  $("#carouselWeb").on("slide.bs.carousel", function (event) {
    $(".carousel-indicators .btn-carouselWeb").removeClass(
      "btn-carouselWebActive"
    );
    $(
      '.carousel-indicators .btn-carouselWeb[data-bs-slide-to="' +
        event.to +
        '"]'
    ).addClass("btn-carouselWebActive");
  });

  $(".carousel-indicators .btn-carouselMob:first-child").addClass(
    "btn-carouselMobActive"
  );

  $("#carouselMobile").on("slide.bs.carousel", function (event) {
    $(".carousel-indicators .btn-carouselMob").removeClass(
      "btn-carouselMobActive"
    );
    $(
      '.carousel-indicators .btn-carouselMob[data-bs-slide-to="' +
        event.to +
        '"]'
    ).addClass("btn-carouselMobActive");
  });
});

