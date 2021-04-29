{
    const welcome = () => {
        console.log("Hello!");
    };

    welcome();

    const toggleMastersOfArtsTitle = () => {
        const title = document.querySelector(".js-title");
        title.innerText = title.innerText === "Wojciech Bylica" ? "mgr Wojciech Bylica" : "Wojciech Bylica";
        mgr.innerText = mgr.innerText === "wyświetl tytuł naukowy" ? "ukryj tytuł naukowy" : "wyświetl tytuł naukowy";
    };

    const ArtsDegree = () => {
        const mgr = document.querySelector(".js-mgr");
        mgr.addEventListener("click", toggleMastersOfArtsTitle);
    }

    ArtsDegree();

    const toggleBackground = () => {
        const gallery = document.querySelector(".js-gallery");
        const galleryButtonText = document.querySelector(".js-galleryButtonText");
        gallery.classList.toggle("section__gallery--hidden");
        galleryButtonText.innerText = gallery.classList.contains("section__gallery--hidden") ? "wyświetlić" : "ukryć";
    }

    const backGround = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);
    }

    backGround();

    const toggleGalleryApperance = () => {
        const tlo1 = document.querySelector(".header");
        tlo1.classList.toggle("header--change")
    }

    const gallery = () => {
        const button3 = document.querySelector(".js-button3");
        button3.addEventListener("click", toggleGalleryApperance);
    }

    gallery();
}