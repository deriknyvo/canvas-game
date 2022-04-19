const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

const image = new Image();
image.src = 'img/explosao.png';

image.onload = () => {
    context.drawImage(
        image,
        80, 10, 60, 65,
        20, 20, 60, 65
    );
};