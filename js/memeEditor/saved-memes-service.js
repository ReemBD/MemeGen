const MEMES_STORAGE_KEY = 'memesDB';
var gNextSavedMemeId = 1;
var gSavedMemes = _createSavedMemes();


function saveMemesToStorage() {
    saveToStorage(MEMES_STORAGE_KEY, gSavedMemes)
}

function _createSavedMemes() {
    var savedMemes = loadMemesFromStorage();
    if (!savedMemes || !savedMemes.length) savedMemes = [];
    return savedMemes
}

function loadMemesFromStorage() {
    return loadFromStorage(MEMES_STORAGE_KEY);
}

function getSavedMemeHTML(idx) {
    return `<img src=${gSavedMemes[idx].url} onclick="onSaveMemeClicked(${gSavedMemes[idx].id})>`
}

function getMemesForDisplay() {
    return gSavedMemes;
}

function addMeme(meme) {
    gSavedMemes.push({ id: gNextSavedMemeId, url: meme.toDataURL() });
    saveMemesToStorage();
}

