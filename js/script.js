{
    const welcome = () => {
        console.log("Hello!");
    };

    const artsDegree = () => {
        const mgr = document.querySelector(".js-mgr");
        mgr.addEventListener("click", () => {
            const title = document.querySelector(".js-title");
            title.innerText = title.innerText === "Wojciech Bylica" ? "mgr Wojciech Bylica" : "Wojciech Bylica";
            mgr.innerText = mgr.innerText === "wyświetl tytuł naukowy" ? "ukryj tytuł naukowy" : "wyświetl tytuł naukowy";
        });
    }

    const backGround = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", () => {
            const gallery = document.querySelector(".js-gallery");
            const galleryButtonText = document.querySelector(".js-galleryButtonText");
            gallery.classList.toggle("section__gallery--hidden");
            galleryButtonText.innerText = gallery.classList.contains("section__gallery--hidden") ? "wyświetlić" : "ukryć";
        });
    }

    const gallery = () => {
        const button3 = document.querySelector(".js-button3");
        button3.addEventListener("click", () => {
            const tlo1 = document.querySelector(".header");
            tlo1.classList.toggle("header--change")
        });
    }

    welcome();
    artsDegree();
    backGround();
    gallery();
}