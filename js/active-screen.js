let gCurrActiveScreen = document.querySelector('.gallery-container');
onChangeActiveScreen(gCurrActiveScreen);

function updateActiveScreen(el) {
    gCurrActiveScreen = el;
}

function onChangeActiveScreen(el) {
    gCurrActiveScreen.classList.remove('active');
    updateActiveScreen(el)
    gCurrActiveScreen.classList.add('active');
}