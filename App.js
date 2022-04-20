import { Animation } from './Animation.js';
import { Ball } from './Ball.js';

const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

const redBall = new Ball(context);
redBall.positionX = 100;
redBall.positionY = 200;
redBall.speedX = 20;
redBall.speedY = -10;
redBall.color = 'red';
redBall.radius = 20;

const blueBall = new Ball(context);
blueBall.positionX = 200;
blueBall.positionY = 100;
blueBall.speedX = -10;
blueBall.speedY = 20;
blueBall.color = 'blue';
blueBall.radius = 30;

const greenBall = new Ball(context);
greenBall.positionX = 159;
greenBall.positionY = 135;
greenBall.speedX = -10;
greenBall.speedY = 20;
greenBall.color = 'green';
greenBall.radius = 15;

const animation = new Animation(context);
animation.setSprite(redBall);
animation.setSprite(blueBall);
animation.setSprite(greenBall);
animation.turnOn();