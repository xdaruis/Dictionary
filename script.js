const words = new Set();

function addWord() {
    boxValue = document.getElementById('addBox').value;
    words.add(boxValue);
}

function hasWord() {
    var boxValue = document.getElementById('searchBox').value;
    if (words.has(boxValue)) {
        alert("Word has been found!")
    } else {
        alert("Word not found!")
    }
}