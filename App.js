import { Animation } from './Animation.js';
import { Ball } from './Ball.js';

const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

const redBall = new Ball(context);
redBall.x = 100;
redBall.y = 200;
redBall.speedX = 20;
redBall.speedY = -10;
redBall.color = 'red';
redBall.radius = 2;

const blueBall = new Ball(context);
blueBall.x = 200;
blueBall.y = 100;
blueBall.speedX = -10;
blueBall.speedY = 20;
blueBall.color = 'blue';
blueBall.radius = 3;

const greenBall = new Ball(context);
greenBall.x = 159;
greenBall.y = 135;
greenBall.speedX = -10;
greenBall.speedY = 20;
greenBall.color = 'green';
greenBall.radius = 5;

const animation = new Animation(context);
animation.setSprite(redBall);
animation.setSprite(blueBall);
animation.setSprite(greenBall);
animation.turnOn();