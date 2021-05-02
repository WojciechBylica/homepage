{
    const welcome = () => {
        console.log("Hello!");
    };

    const artsDegree = () => {
        const title = document.querySelector(".js-title");
        title.innerText = title.innerText === "Wojciech Bylica" ? "buttonMasterOfArts Wojciech Bylica" : "Wojciech Bylica";
    };


    const backGround = () => {
        const galleryButtonText = document.querySelector(".js-galleryButtonText");
        const gallery = document.querySelector(".js-gallery");
        gallery.classList.toggle("section__gallery--hidden");
        galleryButtonText.innerText = gallery.classList.contains("section__gallery--hidden") ? "wyświetlić" : "ukryć";
    };


    const gallery = () => {
        const header = document.querySelector(".header");
        header.classList.toggle("header--change");
    }

    init = () => {
        welcome();

        const buttonBackgroundChange = document.querySelector(".js-buttonBackgroundChange");
        buttonBackgroundChange.addEventListener("click", gallery);

        const button = document.querySelector(".js-button");
        button.addEventListener("click", backGround);

        const buttonMasterOfArts = document.querySelector(".js-buttonMasterOfArts");
        buttonMasterOfArts.addEventListener("click", artsDegree);
        buttonMasterOfArts.innerText = buttonMasterOfArts.innerText === "wyświetl tytuł naukowy" ? "ukryj tytuł naukowy" : "wyświetl tytuł naukowy";
    }

    init();

}