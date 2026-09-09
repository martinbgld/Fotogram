const imgDir = './assets/img/';
const thumbDir = './assets/thumb/thumb_'
const thumbSlider = document.getElementById('thumb-slider');
const imgGallery = [
    {
        src: 'IceLake.jpg',
        alt: 'Picture: IceLake.jpg',
        ariaLabel: 'Bild anzeigen: winterlicher See mit Eissschollen'
    },
    {
        src: 'BlueCityNight.jpg',
        alt: 'Picture: BlueCityNight.jpg',
        ariaLabel: 'Bild anzeigen: Stadt im blauen Abendlicht'
    },
    {
        src: 'DarkClouds.jpg',
        alt: 'Picture: DarkClouds.jpg',
        ariaLabel: 'Bild anzeigen: Dunkle Wolken am Himmel'
    },
    {
        src: 'BirdOnATree.jpg',
        alt: 'Picture: BirdOnATree.jpg',
        ariaLabel: 'Bild anzeigen: Vogel sitzt auf einem Baum'
    },
    {
        src: 'Hurricane.jpg',
        alt: 'Picture: Hurricane.jpg',
        ariaLabel: 'Bild anzeigen: Hurricane von oben'
    },
    {
        src: 'WinterLake.jpg',
        alt: 'Picture: WinterLake.jpg',
        ariaLabel: 'Bild anzeigen: Wintersee mit Spiegelbild eines Berges'
    },
    {
        src: 'BirdOnTheWater.jpg',
        alt: 'Picture: BirdOnTheWater.jpg',
        ariaLabel: 'Bild anzeigen: Ein Vogel startet aus einem See'
    },
    {
        src: 'FishermanAtNight.jpg',
        alt: 'Picture: FishermanAtNight.jpg',
        ariaLabel: 'Bild anzeigen: Ein Fischer in der Nacht'
    },
    {
        src: 'SmallBirdOnARock.jpg',
        alt: 'Picture: SmallBirdOnARock.jpg',
        ariaLabel: 'Bild anzeigen: Ein Vogel sitzt am Felsen'
    },
    {
        src: 'Leopardbabys.jpg',
        alt: 'Picture: Leopardbabys.jpg',
        ariaLabel: 'Bild anzeigen: Baby-Leoparden auf dem Felsen'
    },
    {
        src: 'MountainWinterSkyline.jpg',
        alt: 'Picture: MountainWinterSkyline.jpg',
        ariaLabel: 'Bild anzeigen: Winter Skyline am Berg'
    },
    {
        src: 'TreeFullyIced.jpg',
        alt: 'Picture: TreeFullyIced.jpg',
        ariaLabel: 'Bild anzeigen: Ein total vereister Baum an einem Wintertag'
    },
]

function init() {
    thumbSliderDisplay();
}

function thumbSliderDisplay() {

    thumbSlider.replaceChildren();

    imgGallery.forEach((actualImage, i) => {
        thumbSlider.append(createThumbButton(actualImage, i));
    });
}

function createThumbButton(actualImage, i) {
    const thumbButton = document.createElement('button');
    const thumbImage = createThumbImage(actualImage);

    thumbButton.type = 'button';
    thumbButton.classList.add('thumb-btn');
    thumbButton.ariaLabel = actualImage.ariaLabel;
    thumbButton.dataset.index = i;

    thumbButton.append(thumbImage);
    return thumbButton;
}

function createThumbImage(actualImage) {
    const thumbImage = document.createElement('img');

    thumbImage.src = thumbDir + actualImage.src;
    thumbImage.alt = actualImage.alt;
    thumbImage.classList.add("thumb-img");

    return thumbImage;
}
