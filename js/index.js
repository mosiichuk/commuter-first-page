document.addEventListener('DOMContentLoaded', function () {
    initSlider();
    initMenuBurger();
});

function initSlider() {
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: "auto",
        centeredSlides: true,
        grabCursor: true,
        spaceBetween: 150,
        observer: true,
        slideToClickedSlide: true,
    });

    swiper.on("slideNextTransitionStart", () => {
        if (swiper.activeIndex > 0) {
            document.querySelector(".main-header").classList.add("hide");
            document.querySelector(".sub-header").classList.add("hide");
        }
    });

    swiper.on("transitionEnd", () => {
        if (swiper.activeIndex == 0) {
            document.querySelector(".main-header").classList.remove("hide");
            document.querySelector(".sub-header").classList.remove("hide");
        }
    });
}

function initMenuBurger() {
    let menuDisplayToggle = document.querySelector("#menuToggle input"),
        menu = document.querySelector(".menu");

    menuDisplayToggle.addEventListener("change", () => {
        if (menuDisplayToggle.checked) {
            menu.classList.add("menu-active");
        } else {
            menu.classList.remove("menu-active");
        }
    })
}