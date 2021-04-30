{
    const welcome = () => {
        console.log("Hello!");
    };

    const artsDegree = () => {
        const title = document.querySelector(".js-title");
        title.innerText = title.innerText === "Wojciech Bylica" ? "mgr Wojciech Bylica" : "Wojciech Bylica";
        mgr.innerText = mgr.innerText === "wyświetl tytuł naukowy" ? "ukryj tytuł naukowy" : "wyświetl tytuł naukowy";
    };


    const backGround = () => {
        const galleryButtonText = document.querySelector(".js-galleryButtonText");
        const gallery = document.querySelector(".js-gallery");
        gallery.classList.toggle("section__gallery--hidden");
        galleryButtonText.innerText = gallery.classList.contains("section__gallery--hidden") ? "wyświetlić" : "ukryć";
    };


    const gallery = () => {
        const tlo1 = document.querySelector(".header");
        tlo1.classList.toggle("header--change");
    }

    init = () => {
        welcome();

        const button3 = document.querySelector(".js-button3");
        button3.addEventListener("click", gallery);

        const button = document.querySelector(".js-button");
        button.addEventListener("click", backGround);

        const mgr = document.querySelector(".js-mgr");
        mgr.addEventListener("click", artsDegree);
    }

    init();

}