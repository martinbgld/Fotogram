const imgDir = '/assets/img/';
const thumbDir = '/assets/thumb/thumb_'

const thumbSlider = document.getElementById('thumb-slider');


function init() {
    thumbSliderDisplay();
}

let imgGallery = [
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

function thumbSliderDisplay() {

    for (let i = 0; i < imgGallery.length; i++) {
        const thumbButton = document.createElement('button');
        const thumbImage = document.createElement('img');
        const actualImage = imgGallery[i];

        thumbImage.src = thumbDir + actualImage.src;
        thumbImage.alt = actualImage.alt;
        thumbImage.classList.add("thumb-img");

        thumbButton.type = 'button';
        thumbButton.classList.add('thumb-btn');
        thumbButton.ariaLabel = actualImage.ariaLabel;
        thumbButton.dataset.index = i;

        thumbButton.append(thumbImage);
        thumbSlider.append(thumbButton);
    }
}
