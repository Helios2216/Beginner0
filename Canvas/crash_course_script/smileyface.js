const canvas = document.querySelector('#canvas');
const props = document.getElementById('prop');

const ctx = canvas.getContext('2d');

// could use recursion but... nope
const init = () => {
	canvas.width = window.innerWidth * 0.95;
	canvas.height = window.innerHeight * 0.45;

	props.innerText = `canvas width: ${canvas.width} canvas height: ${canvas.height}`;
};

init();

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth * 0.95;
	canvas.height = window.innerHeight * 0.45;

	props.innerText = `canvas width: ${canvas.width} canvas height: ${canvas.height}`;
});

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Arc (circles)
ctx.fillStyle = 'deepskyblue';
ctx.beginPath();
ctx.arc(centerX, centerY, centerY - 10, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();
ctx.stroke();

// move to mouth
ctx.beginPath();
ctx.moveTo(centerX + 100, centerY);
ctx.arc(centerX, centerY, 100, 0, Math.PI);

// left eye
ctx.moveTo(centerX - 60, centerY - 80);
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);
ctx.fillStyle = 'yellow';

// right eye
ctx.moveTo(centerX + 100, centerY - 80);
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();
ctx.stroke();
