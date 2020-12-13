function onSaveMeme() {
    // debugger;
    addMeme(gCanvas);
    saveMemesToStorage();
    renderSavedMemes();
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
    const  elSavedMemesGallery = document.querySelector('.saved-memes-gallery');
    onChangeActiveScreen(elSavedMemesGallery, elLink);
}
