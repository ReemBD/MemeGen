let gNextImgId = 1;
let gNumOfImgs = 18;
const gImages = [];
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
    for (let i = 0; i < num; i++) {
        gImages.push(_createImage());
    }
}

function _addImagesKeywords() {
    gImages.forEach((img, idx) => { img.keywords = gKeywords[idx] })
}



function renderGallery() {
    const strHTMLs = gImages.map((img) => {
        return getImgHTML(img)
    })
    let gallery = document.querySelector('#mainGallery.filtered')
    if (!gallery) { gallery = document.querySelector('#mainGallery') }
    gallery.innerHTML = strHTMLs.join('');
}

function getImgById(id) {
    return gImages.find((img) => img.id === id);
}

function getImagesForDisplay(str, images = gImages) {
    if (!str) return images;
    str = str.toLowerCase();
    const matchingImages = images.filter((img) => {
        const imgKeywords = img.keywords;
        return (imgKeywords.includes(str) || imgKeywords.find(keyword => { return (keyword.substring(0, str.length)) === str }));

    })
    return matchingImages;
}