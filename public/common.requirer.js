function css(file) {
    document.write(`<link rel="stylesheet" href="${file + '?' + Math.random()}"/>`)
}
function js(file) {
    document.write(`<script src="${file + '?' + Math.random()}"></script>`)
}

js('/public/common.js')