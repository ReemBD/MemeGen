let gIsDraggingLine = false;

function renderCanvas() {
    clearCanvas();
    onDrawImg();
    gMeme.lines.forEach((line, idx) => {
        drawText(line.txt, line.x, line.y, idx)
    })
    getCurrLineFocus();
}

function onDrawImg() {
    const elImg = document.querySelector('.canvas-container .canvas-meme')
    elImg.src = getImgPath(gMeme.selectedImgId);
    drawImg(elImg);
}

function onDrawText(text) {
    updateCurrLineTxt(text);
    renderCanvas();
    getCurrLineFocus()
}

function onClearCanvas() {
    clearTxtData();
    renderCanvas();
    gMeme.selectedLineIdx = 0;
    document.querySelector('.canvas-text').value = '';

}

function onSwitchLine(idx = (!gMeme.selectedLineIdx) ? gMeme.selectedLineIdx = 1 : gMeme.selectedLineIdx = 0) {
    // debugger;
    updateselectedLineIdx(idx);
    document.querySelector('.canvas-text').value = getCurrLineTxt();
    clearPrevLineFocus();
    renderCanvas();
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

function onDownloadMeme(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-img.jpg';
}

function onChangeCanvasProp(prop, value, diff = null) {
    if (diff) changeFontSize(diff)
    else getCanvasProperties()[prop] = value;
    renderCanvas();
}

function toggleDragStatus() {
    gIsDraggingLine = !gIsDraggingLine;
}

function onMouseMove(ev) {
    const clickedLine = canvasClicked(ev)
    const { offsetX, offsetY } = ev;
    if (clickedLine && gIsDraggingLine) {
        clickedLine.x = offsetX - (measureText(clickedLine.txt).width / 2);
        clickedLine.y = offsetY + 25;
        let clickedLineIdx = gMeme.lines.findIndex((line) => { return line === clickedLine })
        onSwitchLine(clickedLineIdx)
        // renderCanvas()
    }
}





