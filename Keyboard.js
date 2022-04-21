export class Keyboard {
    keyPressed = {
        ArrowLeft: false,
        ArrowRight: false
    };

    constructor(document) {
        document.addEventListener('keydown', (event) => {
            this.keyPressed[event.key] = true;
        });

        document.addEventListener('keyup', (event) => {
            this.keyPressed[event.key] = false;
        });
    }

    pressed(key) {
        return this.keyPressed[key];
    }
}