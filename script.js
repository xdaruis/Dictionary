const words = new Set();

function addWord() {
    words.add(document.getElementById('addBox').value);
}

function hasWord() {
    var boxValue = document.getElementById('searchBox').value;
    if (words.has(boxValue)) {
        alert("Word has been found!")
    } else {
        alert("Word not found!")
    }
}