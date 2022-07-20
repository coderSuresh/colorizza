const hex = document.getElementById('hex');
const hsl = document.getElementById('hsl');
const result = document.getElementById('color-code');
const preview = document.getElementById('preview');

let colorCode = "hsl(279, 100%, 29%)";

function generateColor() {
    if (hex.checked) {
        generateHex();
    }

    else if (hsl.checked) {
        generateHsl();
    }
    
    else {
        generateRgb();
    }
}

function generateHex() {
    const hexContent = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let i, randomColor = "#", random;

    for (i = 1; i <= 6; i++) {
        random = Math.floor(Math.random() * hexContent.length);
        randomColor += hexContent[random];
    }
    colorCode = randomColor;
    preview.style.background = randomColor;
    result.innerHTML = randomColor;
}

function generateHsl() {
    let randomColor = 'hsl(' + Math.floor(Math.random() * 360) + ', ' + Math.floor(Math.random() * 100) + '%, ' + Math.floor(Math.random() * 100) + '%)';
    
    colorCode = randomColor;
    preview.style.background = randomColor;
    result.innerHTML = randomColor;
}

function generateRgb() {
    let randomColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';

    colorCode = randomColor;
    result.innerHTML = randomColor;
    preview.style.background = randomColor;
}

function copyCode() {
    alert("Successfully copied to clipboard"); //alert success message 

    // create temp input field to copy
    let temp = document.createElement('input');
    temp.value = colorCode; //assign value of current color code to the temp input field
    document.body.appendChild(temp); //add temp element to body
    
    // copy to clipboard
    temp.select();
    navigator.clipboard.writeText(temp.value);
    document.execCommand('copy');
    
    document.body.removeChild(temp); // remove the temp input


}
