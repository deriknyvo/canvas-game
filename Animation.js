export class Animation {
    context = null;
    sprites = [];
    isRunning = false;

    constructor(context) {
        this.context = context;
    }

    turnOn() {
        this.isRunning = true;
        this.nextFrame();
    }

    turnOff() {
        this.isRunning = false;
    }

    setSprite(sprite) {
        this.sprites.push(sprite);
    }

    nextFrame() {
        if (! this.isRunning) {
            return;
        }

        this.clearScreen();
        this.sprites.forEach(sprite => {
            sprite.update();
            sprite.draw();
        });

        requestAnimationFrame(() => {
            this.nextFrame();
        });
    }

    clearScreen() {
        const positionX = 0;
        const positionY = 0;
        const width = this.context.canvas.width;
        const height = this.context.canvas.height;

        this.context.clearRect(positionX, positionY, width, height);
    }
}