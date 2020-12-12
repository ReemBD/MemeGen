
function renderGallery() {
    var elSearch = document.querySelector('.search-gallery')
    var images = getImagesForDisplay(gImages, elSearch.value);
    var strHTMLs = images.map((img) => {
        return getImgHTML(img)
    })
    let gallery = document.querySelector('#mainGallery.filtered')
    if (!gallery) { gallery = document.querySelector('#mainGallery') }
    gallery.innerHTML = strHTMLs.join('');
}


function onSearchGallery(str) {
    if (!str) toggleFilteredGalleryOff();
    else toggleFilteredGalleryOn();
    renderGallery()
}

function hideMainGallery() {
    const mainGallery = document.querySelector('#mainGallery');
    mainGallery.style.display = 'none';
}

function onShowGallery(elLink) {
    const elGallery = document.querySelector('.gallery-container')
    onChangeActiveScreen(elGallery, elLink);
    elLink.classList.add('active');
}

function onClickImg(id) {
    gMeme.selectedImgId = id;
    onDrawImg();
    const elEditor = document.querySelector('.meme-editor');
    onChangeActiveScreen(elEditor);
    document.querySelector('.gallery-link').classList.remove('active');
}

function getImagesForDisplay(images, str) {
    const matchingImages = images.filter((img) => {
        let imgKeywords = img.keywords;
        return (imgKeywords.includes(str) || imgKeywords.find(keyword => { return (keyword.substring(0, str.length)) === str }));

    })
    if (str) return matchingImages;
    else return images;
}

function toggleFilteredGalleryOn() {
    document.querySelector('#mainGallery').classList.add('filtered');
}

function toggleFilteredGalleryOff() {
    document.querySelector('#mainGallery.filtered').classList.remove('filtered');
}