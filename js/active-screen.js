var gCurrActiveScreen = document.querySelector('.gallery-container');
var gCurrActiveLink = document.querySelector('.gallery-link');
onChangeActiveScreen(gCurrActiveScreen, gCurrActiveLink);

function updateActiveScreen(el) {
    gCurrActiveScreen = el;
}

function onChangeActiveScreen(el, elLink = null) {
    gCurrActiveScreen.classList.remove('active');
    updateActiveScreen(el)
    gCurrActiveScreen.classList.add('active');
    changeActiveLink(elLink);
}

function changeActiveLink(elLink) {
    gCurrActiveLink.classList.remove('active');
    if (elLink) {
        gCurrActiveLink = elLink;
        gCurrActiveLink.classList.add('active');
    }
}
