const galleryImages = document.querySelectorAll('#mainGallery img');
let gNextImgId = +galleryImages[galleryImages.length - 1].dataset.idx + 1;
let gImages;

function getImagesForDisplay(str) {
    const images = Array.from(document.querySelectorAll('#mainGallery img'));
    const matchingImages = images.reduce((acc, img) => {
        if (img.dataset.keywords.includes(str)) acc.push(img);
        return acc;
    }, [])
    return matchingImages;
}