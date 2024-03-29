var container = $("#circle-carousel"),
  centerX = container.width() / 2,
  centerY = container.height() / 2,
  angle = 0,
  radius = 70;

var carouselItems = $(".circle-carousel__item"),
  totalItems = carouselItems.length - 3;

carouselItems.each(function (i, e) {
  var w2 = $(e).outerWidth(true) / 2,
    h2 = $(e).outerHeight(true) / 2,
    angle = (360 / totalItems) * i,
    x = Math.round(centerX + radius * Math.sin((angle * Math.PI) / 180)),
    y = Math.round(centerY + radius * -Math.cos((angle * Math.PI) / 180));
  $(e).css({ right: x - w2, top: y - h2 });
});

var rotate = 360 / totalItems;
var rotated = -rotate / 2;

// Setting initial state
$("#circle-carousel").css("transform", "rotate(" + -rotate / 2 + "deg)");
$(".circle-carousel__item div").css(
  "transform",
  "rotate(" + rotate / 2 + "deg)"
);
$(".active").prev().addClass("next-to-active");
$(".active").next().addClass("next-to-active");
$("#blade").css(
  "background-image",
  'url("' + $(".active").data("background") + '")'
);
$(".mentor." + $(".active").data("mentorid")).addClass("mentor--show");

$(".circle-carousel__item").click(function () {
  console.log("current rotated: ", rotated);
  thisNum = $(this).data("num");
  currentNum = $(".active").data("num");

  numOfRotations = thisNum - currentNum;
  if (numOfRotations < -totalItems / 2) {
    numOfRotations += totalItems;
  }
  if (numOfRotations > totalItems / 2) {
    numOfRotations -= totalItems;
  }

  rotated += rotate * numOfRotations;

  console.log("after rotated: ", rotated);
  $("#circle-carousel").css("transform", "rotate(" + rotated + "deg)");
  $(".circle-carousel__item div").css(
    "transform",
    "rotate(" + -rotated + "deg)"
  );
  $(".circle-carousel__item")
    .removeClass("active")
    .removeClass("next-to-active");
  $(".mentor").removeClass("mentor--show");

  $(this).addClass("active");
  $(".active").prev().addClass("next-to-active");
  $(".active").next().addClass("next-to-active");

  var thisCarouselItem = $(this);
  $("#blade").css(
    "background-image",
    'url("' + thisCarouselItem.data("background") + '")'
  );
  setTimeout(function () {
    $(".mentor." + thisCarouselItem.data("mentorid")).addClass("mentor--show");
  }, 200);
});
