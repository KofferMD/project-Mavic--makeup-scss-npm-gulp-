$((function () {
    $(".products__slider").slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" /></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" /></svg></button>',
        infinite: !1
    }), $(".questions__item-title").on("click", (function () {
        $(".questions__item").removeClass("questions__item--active"), $(this).parent().addClass("questions__item--active")
    }))

}));

// const anchors = document.querySelectorAll('a[href*="#about"]');

// for (let anchor of anchors) {
//     anchor.addEventListener("click", function (event) {
//         event.preventDefault();
//         const blockID = anchor.getAttribute('href');
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         });
//     });
// }