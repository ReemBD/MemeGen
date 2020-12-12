function onSaveMeme() {
    addMeme(gCanvas);
    saveMemesToStorage(MEMES_STORAGE_KEY, gSavedMemes);
    let saveBtn = document.querySelector('.media .save');
    // saveBtn.classList.add('on-save');

}

function renderSavedMemes() {
    var memes = getMemesForDisplay();
    var strHTMLs = memes.map((meme, idx) => {
        return getSavedMemeHTML(idx)
    })
    var elGallery = document.querySelector('.saved-memes-gallery')
    elGallery.innerHTML = strHTMLs.join('');
}

function onShowSavedMemes(elLink) {
    var elSavedMemesGallery = document.querySelector('.saved-memes-gallery');
    onChangeActiveScreen(elSavedMemesGallery, elLink);
    renderSavedMemes();
}
