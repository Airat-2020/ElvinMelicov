let mainNav = document.querySelector(".main-nav");
let buttonOpen = document.querySelector(".js-open-menu");
let buttonClose = document.querySelector(".js-close-menu");

buttonOpen.addEventListener("click", function () {
    mainNav.classList.add("animation-enter");

    setTimeout(() => {
        mainNav.classList.add("animation-active");
    }, 0)
})

buttonClose.addEventListener("click", function () {
    mainNav.classList.remove("animation-active");

    setTimeout(() => {
        mainNav.classList.remove("animation-enter");
    }, 300);
});

