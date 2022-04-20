export class Ball {
    context = null;
    positionX = 0;
    positionY = 0;
    speedX = 0;
    speedY = 0;
    color = 'black';
    radius = 10;
    
    constructor(context) {
        this.context = context;
    }

    update() {
        const xLessThanRadius = this.positionX < this.radius;
        const xMoreThanCanvasWidth = this.positionX > this.context.canvas.width - this.radius;
        const yLessThanRadius = this.positionY < this.radius;
        const yMoreThanCanvasWidth = this.positionY > this.context.canvas.height - this.radius;

        if (xLessThanRadius || xMoreThanCanvasWidth) {
            this.speedX *= -1;
        }

        if (yLessThanRadius || yMoreThanCanvasWidth) {
            this.speedY *= -1;
        }
        
        this.positionX += this.speedX;
        this.positionY += this.speedY;
    }

    draw() {
        this.context.save();
        this.context.fillStyle = this.color;
        this.context.beginPath();

        const startAngle = 0;
        const finishAngle = 2 * Math.PI; 

        this.context.arc(this.positionX, this.positionY, this.radius, finishAngle, startAngle);
        this.context.fill();
        this.context.restore();
    }
}