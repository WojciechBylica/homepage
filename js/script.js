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
        galleryButtonText.innerText = gallery.classList.contains("section__gallery--hidden") ? "wyświet" : "ukryj";
    };


    const changeVisibilityOfGallery = () => {
        const header = document.querySelector(".container");
        header.classList.toggle("container--change");
    }

    const changeSizeOfGallery = () => {
        const photos = document.querySelectorAll(".section__gallery");
        photos.forEach((photo) => {
            photo.classList.toggle("section__gallery--small");
            const gallerySizeButtonText = document.querySelector(".js-gallerySizeButtonText");
            gallerySizeButtonText.innerText = photo.classList.contains("section__gallery--small") ? "powiększ" : "pomniejsz";
        });
    }

    const array = [
        {
            content: "images/galleryPhoto1.jpeg",
            description: "Wojciech Bylica with cajon",
        },
        {
            content: "images/galleryPhoto2.jpeg",
            description: "Wojciech Bylica in jazz club",
        },
        {
            content: "images/galleryPhoto3.jpeg",
            description: "Wojciech Bylica face zoom",
        }
    ]

    let index = 0;
    const togglePhotos = () => {
        const photosCount = array.length;
        if (index === photosCount) {
            index = 0;
        }
        let htmlString = "";
        htmlString += `
        <img class="section__gallery" src="${array[(index)].content}" alt="${array[(index)].description}">
        `

        document.querySelector(".js-gallery").innerHTML = htmlString;
        index++;
        changeSizeOfGallery()
    };

    init = () => {
        welcome();
        toggleBackgroundColor();
        togglePhotos()

        const togglePhotoButton = document.querySelector(".js-togglePhotoButton");
        togglePhotoButton.addEventListener("click", togglePhotos);

        const sizeButton = document.querySelector(".js-sizeButton");
        sizeButton.addEventListener("click", changeSizeOfGallery);

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