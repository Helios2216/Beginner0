const canvas = document.querySelector('#canvas');
const props = document.getElementById('prop');

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

const ctx = canvas.getContext('2d');

class Circle {
	constructor(
		x = 200,
		y = 200,
		size = 30,
		dx = 5,
		dy = 4,
		startAngle = 0,
		endAngle = Math.PI * 2,
		drawCounterClockwise = false
	) {
		this.size = size;
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.startAngle = startAngle;
		this.endAngle = Math.PI * endAngle;
		this.drawCounterClockwise = drawCounterClockwise;
		this.fill = 'deepskyblue';
	}
	draw = () => {
		ctx.fillStyle = this.fill;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, this.startAngle, this.endAngle, this.drawCounterClockwise);
		ctx.closePath();
		ctx.fill();

		this.update();
	};
	update = () => {
		// element appear on the other side
		// if (this.x >= canvas.width) this.x += -this.x;

		this.x += this.dx;
		this.y += this.dy;
		if (this.x + this.size > canvas.width || this.x - this.size < 0) {
			this.dx *= -1;
			console.log(this.dx);
		}
		if (this.y + this.size > canvas.height || this.y - this.size < 0) {
			this.dy *= -1;
			console.log(this.dx);
		}

		ctx.fillText(`${canvas.width}`, 400, 50);
		ctx.fillText(`${this.size + this.x}`, 200, 50);
		ctx.fillText(`${this.size + this.y}`, 100, 50);
	};
}
let count = 0;

const animate = () => {
	count++;
	if (count > 410) return;

	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	circle.draw();
};

const circle = new Circle();

animate();
