const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

let x = 20;
let y = 100;
const radius = 5;
const startAngle = 0;
const endAngle = Math.PI * 2;
const speed = 5;

requestAnimationFrame(mexerBola);

function mexerBola() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle);
    context.fill();

    requestAnimationFrame(mexerBola);
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            y -= speed;
            break;
        
        case 'ArrowDown':
            y += speed;
            break;
    
        case 'ArrowLeft':
            x -= speed;
            break;

        case 'ArrowRight':
            x += speed;
            break;
        default:
            break;
    }
}, true);
