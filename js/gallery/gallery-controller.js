
let gElGallery = document.querySelectorAll('#mainGallery img');
let gElImages = Array.from(gElGallery);

function renderGallery(images) {
    let strHTMLs = images.map(img => {
        return `<img data-idx="${img.dataset.idx}" src="${img.src}"></img>`
    })
    let gallery = document.querySelector('#mainGallery.filtered')
    if (!gallery) { gallery = document.querySelector('#mainGallery') }
    gallery.innerHTML = strHTMLs.join('');
}

function onSearchGallery(str) {
    const elSearch = document.querySelector('.search-gallery');
    if (!elSearch.value) toggleFilteredGalleryOff();
    else toggleFilteredGalleryOn();
    const images = getImagesForDisplay(gElImages, str);
    renderGallery(images)
    addFilteredGalleryListener();
}

function hideMainGallery() {
    const mainGallery = document.querySelector('#mainGallery');
    mainGallery.style.display = 'none';
}

function onShowGallery(elLink) {
    const elGallery = document.querySelector('.gallery-container')
    onChangeActiveScreen(elGallery);
    elLink.classList.add('active');
    const elEditor = document.querySelector('.meme-editor')
}

function addFilteredGalleryListener() {
    let gallery = document.querySelector('#mainGallery.filtered');
    if (!gallery) gallery = document.querySelector('#mainGallery');
    let images = gallery.querySelectorAll('img');
    console.log('images: ', images);;
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

function getImagesForDisplay(images, str) {
    const matchingImages = images.reduce((acc, img) => {
        const imgKeywords = img.dataset.keywords.split(' ');
        if (imgKeywords.includes(str) || imgKeywords.find((keyword) => { return (str === keyword.substring(0, str.length)) })) acc.push(img);
        return acc;
    }, [])
    if (str) return matchingImages;
    else return gElImages;
}

function toggleFilteredGalleryOn() {
    document.querySelector('#mainGallery').classList.add('filtered');
}

function toggleFilteredGalleryOff() {
    document.querySelector('#mainGallery.filtered').classList.remove('filtered');
}