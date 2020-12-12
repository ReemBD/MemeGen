let gNextImgId = 1;
let gNumOfImgs = 18;
let gImages = [];
_createImages(gNumOfImgs);
_addImagesKeywords();

function _createImage() {
    return {
        id: gNextImgId++,
        src: `memes/${gNextImgId - 1}.jpg`,
        keywords: null,
    }
}

function _createImages(num) {
    for (var i = 0; i < num; i++) {
        gImages.push(_createImage());
    }
}

function _addImagesKeywords() {
    gImages.forEach((img, idx) => { img.keywords = gKeywords[idx] })
}

function getImgHTML(img) {
    return `<img src="memes/${img.id}.jpg" alt="${img.keywords}" onclick="onClickImg(${img.id})">`;
}

function renderGallery() {
    var strHTMLs = gImages.map((img) => {
        return getImgHTML(img)
    })
    let gallery = document.querySelector('#mainGallery.filtered')
    if (!gallery) { gallery = document.querySelector('#mainGallery') }
    gallery.innerHTML = strHTMLs.join('');
}

function getImgById(id) {
    return gImages.find((img) => img.id === id);
}