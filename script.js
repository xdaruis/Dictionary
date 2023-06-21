const words = new Set();

function addWord() {
    words.add(document.getElementById('addBox').value);
}

function hasWord() {
    if (words.has(document.getElementById('searchBox').value)) {
        alert("Word has been found!")
    } else {
        alert("Word not found!")
    }
}