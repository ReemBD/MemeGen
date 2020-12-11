

function renderCanvas() {
    clearCanvas();
    onDrawImg();
}

function onDrawImg() {
    const elImg = document.querySelector('.canvas-container .canvas-meme')
    elImg.src = getImgPath(gMeme.selectedImgId);
    drawImg(elImg);
}

function onDrawText(text) {
    renderCanvas();
    updateCurrLineTxt(text);
    const firstLine = gMeme.lines[0]
    drawText(firstLine.txt, firstLine.x, firstLine.y)
    if (gMeme.lines.length > 1) {
        const secondLine = getSelectedLine(1);
        drawText(secondLine.txt, secondLine.x, secondLine.y);
    }
    getCurrLineFocus()
}

function onClearCanvas() {
    renderCanvas();
    clearTxtData();
    gMeme.selectedLineIdx = 0;
    document.querySelector('.canvas-text').value = '';

}

function onSwitchLine() {
    updateselectedLineIdx();
    document.querySelector('.canvas-text').value = getCurrLineTxt();
    getCurrLineFocus();
}


function resizeCanvas() {
    const elMeme = document.querySelector('.canvas-container .canvas-meme');
    const elContainer = document.querySelector('.canvas-container');
    elContainer.offsetWidth = elMeme.width;
    elContainer.offsetHeight = elMeme.height;
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}

function onCanvasClicked(ev) {
    canvasClicked(ev);
}

function addGalleryImgClickListener() {
    const elImages = document.querySelectorAll('.gallery img')
    elImages.forEach((img) => {
        img.addEventListener('click', () => {
            gMeme.selectedImgId = +img.dataset.idx;
            onDrawImg();
            const elEditor = document.querySelector('.meme-editor');
            onChangeActiveScreen(elEditor);
            document.querySelector('.gallery-link').classList.remove('active');
        })
    })
}

function onDownloadMeme(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-img.jpg';
}

function onChangeCanvasProp(prop, value, diff = null) {
    const firstLine = gMeme.lines[0];
    renderCanvas();
    if (diff) changeFontSize(diff)
    else {
        getCanvasProperties()[prop] = value;
    }
    drawText(firstLine.txt, firstLine.x, firstLine.y)
    if (gMeme.lines.length > 1) {
        const secondLine = getSelectedLine(1);
        drawText(secondLine.txt, secondLine.x, secondLine.y);
    }
}











