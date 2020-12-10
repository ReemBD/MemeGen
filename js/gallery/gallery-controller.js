


function renderGallery() {
    let strHTMLs = gImages.map(img => {
        return `<img data-idx="${img.dataset.idx}" src="${img.src}"></img>`
    })
    let gallery = document.querySelector('#filteredGallery')
    gallery.innerHTML = strHTMLs.join('');

}

function onSearchGallery(str) {
    gImages = getImagesForDisplay(str);
    hideMainGallery()
    renderGallery()
    addFilteredGalleryListener();
}

function hideMainGallery() {
    const mainGallery= document.querySelector('#mainGallery');
    mainGallery.style.display = 'none';
}

function onShowGallery(elLink){
    const elGallery = document.querySelector('.gallery-container')
    onChangeActiveScreen(elGallery);
    elLink.classList.add('active');
    const elEditor = document.querySelector('.meme-editor')
}

function addFilteredGalleryListener() {
    const images = document.querySelectorAll('#filteredGallery img');
    images.forEach((img) => {
        img.addEventListener('click', () => {
            gMeme.selectedImgId = +img.dataset.idx;
            onDrawImg();
            const elEditor = document.querySelector('.meme-editor');
            onChangeActiveScreen(elEditor);
            document.querySelector('.gallery-link').classList.remove('active');
        })
    })
}