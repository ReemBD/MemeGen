let gKeywords = [
    _createImageKeywords("trump presidnt funny"),
    _createImageKeywords("puppies puppy cute sweet"),
    _createImageKeywords("baby cute sweet"),
    _createImageKeywords("animal animals cat cute sweet sleepy"),
    _createImageKeywords("success baby achievement achieved"),
    _createImageKeywords("aliens history channel funny"),
    _createImageKeywords("baby cute sweet funny"),
    _createImageKeywords("charlie chocolate tell-me-more"),
    _createImageKeywords("funny sneaky suspicious baby cute sweet"),
    _createImageKeywords("obama president funny laugh"),
    _createImageKeywords("kiss"),
    _createImageKeywords("funny"),
    _createImageKeywords("actor celebrate glass wine"),
    _createImageKeywords("what-if matrix"),
    _createImageKeywords("one-does-not-simply"),
    _createImageKeywords("laughing laugh"),
    _createImageKeywords("putin president badass"),
    _createImageKeywords("toy-story one-day-this-will-be-yours")
]

function _createImageKeywords(str = 'other') {
    var strToArr = str.split(' ')
    for (var i = 0; i < str.length; i++) {
        str[i].replaceAll('-', ' ');
    }

    return strToArr;
}
