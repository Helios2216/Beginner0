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

// New: strokeRect()
ctx.lineWidth = 2;
ctx.StrokeStyle = 'rgba(255, 102, 0, 0.9)';
ctx.strokeRect(100, 200, 150, 100);

// new: ClearRect()
ctx.fillStyle = 'indigo';
ctx.fillRect(20, 20, 150, 100);
// Creates a clear rect inheriting bg
ctx.clearRect(25, 25, 140, 90);

// fillText() font must be before fn call no case sens
ctx.fillStyle = 'red';
ctx.font = '1.5em arial';
ctx.fillText('Hello World', 400, 50);

// strokeText()
ctx.strokeText('...World', 400, 100);
