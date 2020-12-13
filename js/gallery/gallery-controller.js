
function renderGallery() {
    var elSearch = document.querySelector('.search-gallery')
    var images = getImagesForDisplay(elSearch.value);
    var strHTMLs = images.map((img) => {
        return getImgHTML(img)
    })
    let gallery = document.querySelector('#mainGallery.filtered')
    if (!gallery) { gallery = document.querySelector('#mainGallery') }
    gallery.innerHTML = strHTMLs.join('');
}

function getImgHTML(img) {
    return `<img src="memes/${img.id}.jpg" alt="${img.keywords}" onclick="onClickImg(${img.id})">`;
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



function toggleFilteredGalleryOn() {
    document.querySelector('#mainGallery').classList.add('filtered');
}

function toggleFilteredGalleryOff() {
    document.querySelector('#mainGallery.filtered').classList.remove('filtered');
}

function onSearchKeyword(el, keyword) {
    const keywordsMap = getKeywordsMap();
    updateKeywordsMap(keyword);
    const keywordCount = keywordsMap[keyword]
    el.style.fontSize = (16 + keywordCount) + 'px';
    el.style.color = `rgb(${255-(10*keywordCount)}, 246, ${255-(10*keywordCount)})`
}