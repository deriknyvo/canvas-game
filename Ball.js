export class Ball {
    context = null;
    x = 0;
    y = 0;
    speedX = 0;
    speedY = 0;
    color = 'black';
    radius = 10;
    
    constructor(context) {
        this.context = context;
    }

    update() {
        const xLessThanRadius = this.x < this.radius;
        const xMoreThanCanvasWidth = this.x > this.context.canvas.width - this.radius;
        const yLessThanRadius = this.y < this.radius;
        const yMoreThanCanvasWidth = this.y > this.context.canvas.height - this.radius;

        if (xLessThanRadius || xMoreThanCanvasWidth) {
            this.speedX *= -1;
        }

        if (yLessThanRadius || yMoreThanCanvasWidth) {
            this.speedY *= -1;
        }
        
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        this.context.save();
        this.context.fillStyle = this.color;
        this.context.beginPath();

        const startAngle = 0;
        const finishAngle = 2 * Math.PI; 

        this.context.arc(this.x, this.y, this.radius, finishAngle, startAngle);
        this.context.fill();
        this.context.restore();
    }
}