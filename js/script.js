console.log("Hello!");

let mgr = document.querySelector(".js-mgr");
let title = document.querySelector(".js-title");

mgr.addEventListener("click", () => {
    title.innerText = title.innerText === "Wojciech Bylica" ? "mgr Wojciech Bylica" : "Wojciech Bylica";

    mgr.innerText = mgr.innerText === "wyświetl tytuł naukowy" ? "ukryj tytuł naukowy" : "wyświetl tytuł naukowy";
})

let button = document.querySelector(".js-button");
let gallery = document.querySelector(".js-gallery");
let galleryButtonText = document.querySelector(".js-galleryButtonText");

button.addEventListener("click", () => {
    gallery.classList.toggle("section__gallery--hidden");

    galleryButtonText.innerText = gallery.classList.contains("section__gallery--hidden") ? "wyświetlić" : "ukryć";
})

let button3 = document.querySelector(".js-button3");
let tlo1 = document.querySelector(".header");

button3.addEventListener("click", () => {
    tlo1.classList.toggle("header--change")
})