let gCanvas = document.querySelector('.meme-canvas');
let gCtx = gCanvas.getContext('2d')
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            fontSize: 40,
            fontFamily: 'impact',
            textAlign: 'left',
            fillColor: 'white',
            strokeStyle: 'black'
        },
        {
            txt: '',
            fontSize: 40,
            fontFamily: 'impact',
            textAlign: 'left',
            fillColor: 'white',
            strokeStyle: 'black'
        }
    ]
}
setLines();


function getImgPath(id) {
    return `memes/${id}.jpg`;
}

function updateCurrLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function updateselectedLineIdx() {
    gMeme.selectedLineIdx = (!gMeme.selectedLineIdx) ? gMeme.selectedLineIdx = 1 : gMeme.selectedLineIdx = 0;
}

function drawText(text, x, y) {
    gCtx.lineWidth = '1.5'
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].fontSize}px ${gMeme.lines[gMeme.selectedLineIdx].fontFamily}`
    gCtx.textAlign = gMeme.lines[gMeme.selectedLineIdx].textAlign;
    gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].fillColor;
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].strokeStyle;
    // const textWidth = measureText(text);
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function measureText(txt) {
    return gCtx.measureText(txt);
}

function getCurrLineFocus() {
    let currLine = gMeme.lines[gMeme.selectedLineIdx];
    let width = measureText(getCurrLineTxt()).width;
    console.log('width ', width);
    // let height = measureText(getCurrLineTxt()).height;
    // console.log('height ', height);
    drawRect(currLine.x - 20, currLine.y - currLine.fontSize, width + 40, 50);
    // gCtx.stroke();
}

function clearLineFocus(idx) {
    let line = gMeme.lines[idx];
    let width = measureText(line.txt).width;
    clearRect(line.x - 20, line.y - line.fontSize, width + 40, 50)
}

function drawRect(x, y, width, height) {
    gCtx.beginPath()
    gCtx.strokeStyle = 'black'
    gCtx.rect(x, y, width, height) // x,y,widht,height
    gCtx.stroke()
}

function clearRect(x, y, width, height) {
    gCtx.clearRect(x, y, width, height)
}

function drawImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function clearTxtData() {
    gMeme.lines.forEach((line) => line.txt = '');
}

function getCurrLineTxt() {
    return gMeme.lines[gMeme.selectedLineIdx].txt;
}

function changeFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].fontSize += diff;
}

function setLines() {
    const lines = gMeme.lines;
    lines.forEach((line, idx) => {
        line.x = 220;
        line.y = (!idx) ? 80 : gCanvas.height - 80;
    })
}

function getSelectedLine(selectedLineIdx) {
    return gMeme.lines[selectedLineIdx];
}

function getCanvasProperties() {
    return gMeme.lines[gMeme.selectedLineIdx];
}
function canvasClicked(ev) {

    const { offsetX, offsetY } = ev;
    const lines = gMeme.lines;

    console.log(offsetX, offsetY);
    let clickedLine = lines.find(line => {
        console.log('lineX lineY ', line.x, line.y);
        return offsetX >= line.x && offsetX <= line.x + gLineWidth
            && offsetY >= line.y && offsetY < line.y + line.size;
    })
    if (clickedLine) console.log('text!');
    else console.log('not text');
}

