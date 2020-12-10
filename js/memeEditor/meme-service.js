let gCanvas;
let gCtx;
let gLineWidth = 450 * 0.8;
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I never eat Falafel'.toUpperCase(),
            size: 20,
            align: 'left',
            color: 'red',
        },
        {
            txt: 'But when I do, I fart.'.toUpperCase(),
            size: 20,
            align: 'left',
            color: 'red',
        }
    ]
}

let gCanvasProperties = {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'impact',
    fontStyle: 'none',
    fillColor: 'white'
}
setLines();


function getImgPath(id) {
    return `memes/${id}.jpg`;
}

function updateMemeTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function drawText(text, x, y) {
    gCtx.lineWidth = '1.5'
    gCtx.font = `${gCanvasProperties.fontSize}px ${gCanvasProperties.fontFamily}`
    gCtx.textAlign = gCanvasProperties.textAlign;
    gCtx.fillStyle = gCanvasProperties.fillColor;
    const textWidth = measureText(text);
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function measureText(txt) {
    return gCtx.measureText(txt).width;
}

function drawImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function changeFont(diff) {
    gCanvasProperties.fontSize += diff;
}

function setLines() {
    const lines = gMeme.lines;
    lines.forEach((line, idx) => {
        // const startLocation = 45 + ((gCanvasProperties.fontSize * line.txt.length) / 2)
        line.x = 220;
        line.y = (!idx) ? 80 : 370;
        // gCtx.strokeRect(line.x, line.y, 20 + gCanvasProperties.fontSize * line.txt.length, line.size * 3)
    })
}

// function drawTxtBorders() {

// }

function getCurrLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}

function getCanvasProperties() {
    return gCanvasProperties;
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

