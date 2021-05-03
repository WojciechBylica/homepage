{
    const welcome = () => {
        console.log("Hello!");
    };

    const showArtsDegree = (masterOfArts) => {
        const title = document.querySelector(".js-title");
        masterOfArts.classList.toggle("changeTitle");
        const masterOfArtsShowed = masterOfArts.classList.contains("changeTitle")
        masterOfArts.innerText = masterOfArtsShowed ? "ukryj tytuł naukowy" : "wyświetl tytuł naukowy";
        title.innerText = masterOfArtsShowed ? "mgr Wojciech Bylica" : "Wojciech Bylica";
    };


    const changeBackground = () => {
        const galleryButtonText = document.querySelector(".js-galleryButtonText");
        const gallery = document.querySelector(".js-gallery");
        gallery.classList.toggle("section__gallery--hidden");
        galleryButtonText.innerText = gallery.classList.contains("section__gallery--hidden") ? "wyświetlić" : "ukryć";
    };


    const changeVisibilityOfGallery = () => {
        const header = document.querySelector(".header");
        header.classList.toggle("header--change");
    }

    init = () => {
        welcome();

        const buttonBackgroundChange = document.querySelector(".js-buttonBackgroundChange");
        buttonBackgroundChange.addEventListener("click", changeVisibilityOfGallery);

        const button = document.querySelector(".js-button");
        button.addEventListener("click", changeBackground);

        const masterOfArts = document.querySelector(".js-showMasterOfArts");
        masterOfArts.addEventListener("click", () => {

            showArtsDegree(masterOfArts)
        });

    }

    init();

}