let mainNav = document.querySelector(".main-nav");
let buttonOpen = document.querySelector(".js-open-menu");
let buttonClose = document.querySelector(".js-close-menu");

buttonOpen.addEventListener("click", function () {
    mainNav.classList.add("show");
})

buttonClose.addEventListener("click", function () {
    mainNav.classList.remove("show");
})
