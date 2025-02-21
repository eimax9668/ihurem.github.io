fetch('txts/intro.txt')
    .then(response => response.text())
    .then(text => {
    document.getElementById('introtxt').innerHTML = text;
    });
    fetch('txts/structure.txt')
    .then(response => response.text())
    .then(text => {
    document.getElementById('structuretxt').innerHTML = text;
    });