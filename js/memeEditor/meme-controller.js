// let gIsMovingText = false;

function onInit() {
    gCanvas = document.querySelector('#memesCanvas');
    gCtx = gCanvas.getContext('2d');
    onDrawImg();
    onDrawText(gMeme.lines[0].txt);
    addGalleryImgClickListener();
}

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
    updateMemeTxt(text);
    const firstLine = gMeme.lines[0]
    drawText(firstLine.txt, firstLine.x, firstLine.y)
    if (gMeme.lines.length > 1) {
        const currLine = getCurrLine();
        drawText(currLine.txt, currLine.x, currLine.y);
    }
    setLines()
}

function onSwitchLine() {
    gMeme.selectedLineIdx = (!gMeme.selectedLineIdx) ? gMeme.selectedLineIdx = 1 : gMeme.selectedLineIdx = 0;
    setLines();
    document.querySelector('.canvas-text').value = '';
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
    if (diff) changeFont(diff)
    else {
        getCanvasProperties()[prop] = value;
    }
    drawText(firstLine.txt, firstLine.x, firstLine.y)
    if (gMeme.lines.length > 1) {
        const currLine = getCurrLine();
        drawText(currLine.txt, currLine.x, currLine.y);
    }
}











