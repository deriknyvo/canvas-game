const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

let x = 20;
const y = 100;
const radius = 5;
const startAngle = 0;
const endAngle = Math.PI * 2;

requestAnimationFrame(mexerBola);

function mexerBola() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle);
    context.fill();

    const speed = 20;
    x += speed;

    requestAnimationFrame(mexerBola);
}
