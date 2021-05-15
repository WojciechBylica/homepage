{
    const welcome = () => {
        console.log("Hello!");
    };

    const toggleBackgroundColor = () => {
        const date = new Date();
        const hour = date.getHours()
        console.log(hour);
        let body = document.body;


        if (hour < 6 || hour > 19) { 
           return body.classList.toggle("body--night");
        };


    };

    const showArtsDegree = (masterOfArts) => {
        const title = document.querySelector(".js-title");
        masterOfArts.classList.toggle("changeTitle");
        const masterOfArtsShowed = masterOfArts.classList.contains("changeTitle");
        masterOfArts.innerText = masterOfArtsShowed ? "ukryj tytuł naukowy" : "tytuł naukowy";
        title.innerText = masterOfArtsShowed ? "mgr Wojciech Bylica" : "Wojciech Bylica";
    };


    const changeBackground = () => {
        const galleryButtonText = document.querySelector(".js-galleryButtonText");
        const gallery = document.querySelector(".js-gallery");
        gallery.classList.toggle("section__gallery--hidden");
        galleryButtonText.innerText = gallery.classList.contains("section__gallery--hidden") ? "wyświetlić" : "ukryć";
    };


    const changeVisibilityOfGallery = () => {
        const header = document.querySelector(".container");
        header.classList.toggle("container--change");
    }

    init = () => {
        welcome();
        toggleBackgroundColor();

        const buttonBackgroundChange = document.querySelector(".js-buttonBackgroundChange");
        buttonBackgroundChange.addEventListener("click", changeVisibilityOfGallery);

        const button = document.querySelector(".js-button");
        button.addEventListener("click", changeBackground);

        const masterOfArts = document.querySelector(".js-showMasterOfArts");
        masterOfArts.addEventListener("click", () => {

            showArtsDegree(masterOfArts);
        });

    }

    init();

}