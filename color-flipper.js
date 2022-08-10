function colorChanger() {
    document.body.style.backgroundColor =  getRandomColor()
    let color= document.body.style.backgroundColor
    document.getElementById('color-name').innerHTML = color
    
}

function getRandomColor () {
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}