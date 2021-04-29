let mainNav = document.querySelector(".main-nav");
let buttonOpen = document.querySelector(".header__open-menu");
let buttonClose = document.querySelector(".header__close-menu");

buttonOpen.addEventListener("click", function (evt) {
    mainNav.classList.add("show");
})

buttonClose.addEventListener("click", function (evt) {
    mainNav.classList.remove("show");
})
