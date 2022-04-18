const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

const img = new Image();
img.src = 'img/ovni.png';

img.onload = (event) => {
    let position = 20;

    for (let index = 0; index < 5; index++) {
        context.beginPath();
        context.drawImage(img, position, 20, 64, 32);
        position += 70;
    }
};