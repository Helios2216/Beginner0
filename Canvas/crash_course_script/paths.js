const canvas = document.querySelector('#canvas');

const init = () => {
	canvas.width = window.innerWidth * 0.95;
	canvas.height = window.innerHeight * 0.45;
};

init();

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth * 0.95;
	canvas.height = window.innerHeight * 0.45;
});

const ctx = canvas.getContext('2d');

ctx.beginPath();

ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(200 / 2, 100);
// new: ctx.closePath() will draw line to beginning
ctx.lineTo(50, 50);
ctx.fillStyle = 'deepskyblue';
ctx.stroke();
ctx.fill();
// ctx.fill() has to be a complete shape

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(300, 50);
ctx.lineTo(500 / 2, 100);
ctx.closePath();
ctx.fillStyle = 'skyblue';
ctx.stroke();
ctx.fill();

// Arc (circles)
ctx.beginPath();
ctx.arc(50, 150, 40, 0, Math.PI * 2);
ctx.fillStyle = 'deepskyblue';
ctx.stroke();
ctx.fill();
