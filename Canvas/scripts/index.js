const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight * 0.45;
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.45;

ctx.fillRect(100, 100, 200, 200);

console.log(canvas);
