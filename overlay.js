let currentImageIndex = 0;
const overlay = document.getElementById('overlay');
const overlayImageTitle = document.getElementById('overlay-image-title');
const overlayImage = document.getElementById('overlay-image');
const overlayBtnClose = document.getElementById('overlay-btnClose');
const overlayBtnPrev = document.getElementById('overlay-btnPrev');
const overlayBtnNext = document.getElementById('overlay-btnNext');
const overlayCount = document.getElementById('overlay-count');

thumbSlider.addEventListener('click', (event) => {
    const thumbBtn = event.target.closest('.thumb-btn');
    if (!thumbBtn) return;

    event.stopPropagation();

    const index = thumbBtn.dataset.index;
    currentImageIndex = index;
    overlayOpen();
})

overlay.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        overlayClose();
    }
})

overlayBtnClose.addEventListener('click', overlayClose);

document.addEventListener('keydown', (event) => {
    const clickedKey = event.key;
    const overlayIsHidden = overlay.classList.contains('is-hidden');

    if (clickedKey === 'Escape' && !overlayIsHidden) {
        console.log('Overlay closed by klicking ' + clickedKey)
        overlayClose();
    }
})

function overlayClose() {
    overlay.classList.add('is-hidden');
}

function overlayOpen() {
    overlay.classList.remove('is-hidden');
    selectImage();

    overlayBtnClose.focus();
}

overlayBtnPrev.addEventListener('click', () => {
    currentImageIndex--;
    selectImage();
})

overlayBtnNext.addEventListener('click', () => {
    currentImageIndex++;
    selectImage();
})

function selectImage() {
    const maxImageIndex = imgGallery.length;
    if (currentImageIndex >= maxImageIndex) {
        currentImageIndex = 0;
    }
    else if (currentImageIndex < 0) {
        currentImageIndex = maxImageIndex - 1;
    }
    const currentImageNumber = Number(currentImageIndex) + 1;
    const selectedImage = imgGallery[currentImageIndex];
    selectImagedetail(selectedImage);
    overlayCount.innerHTML = (currentImageNumber + '/' + maxImageIndex);
}

function selectImagedetail(selectedImage) {
    overlayImageTitle.innerHTML = selectedImage.src;
    overlayImage.src = imgDir + selectedImage.src;
    overlayImage.alt = selectedImage.alt;
}