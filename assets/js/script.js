$(document).ready(function () {
  const $quantityContainer = $(".quantity");
  const $minusBtn = $quantityContainer.find(".minus");
  const $plusBtn = $quantityContainer.find(".plus");
  const $inputBox = $quantityContainer.find(".input-box");

  updateButtonStates();

  $quantityContainer.on("click", handleButtonClick);
  $inputBox.on("input", handleQuantityChange);

  function updateButtonStates() {
    const value = parseInt($inputBox.val());
    $minusBtn.prop("disabled", value <= 1);
    $plusBtn.prop("disabled", value >= parseInt($inputBox.attr("max")));
  }

  function handleButtonClick(event) {
    if ($(event.target).hasClass("minus")) {
      decreaseValue();
    } else if ($(event.target).hasClass("plus")) {
      increaseValue();
    }
  }

  function decreaseValue() {
    let value = parseInt($inputBox.val());
    value = isNaN(value) ? 1 : Math.max(value - 1, 1);
    $inputBox.val(value);
    updateButtonStates();
    handleQuantityChange();
  }

  function increaseValue() {
    let value = parseInt($inputBox.val());
    value = isNaN(value) ? 1 : Math.min(value + 1, parseInt($inputBox.attr("max")));
    $inputBox.val(value);
    updateButtonStates();
    handleQuantityChange();
  }

  function handleQuantityChange() {
    let value = parseInt($inputBox.val());
    value = isNaN(value) ? 1 : value;

    console.log("Quantity changed:", value);
  }
});

$(document).ready(function () {
  let itemHeaders = $(".item-of-header");
  let navLinks = $(".nav-link");

  for (let i = 0; i < itemHeaders.length; i++) {
    $(itemHeaders[i]).clone().appendTo(navLinks[i]);
  }
});


$(document).ready(function () {
  let myMenu = $(".myMenu");
  let swiperSlide = $(".swiper-slide");
  for (let x = 0; x < myMenu.length; x++) {
    $(myMenu[x]).clone().appendTo(swiperSlide[x]);
  };
});


$(document).ready(function () {
  let cardContainer = $(".card-container");
  let swiperSlide2 = $(".swiper-slide2");
  for (let j = 0; j < cardContainer.length; j++) {
    $(cardContainer[j]).clone().appendTo(swiperSlide2[j]);
  };
});