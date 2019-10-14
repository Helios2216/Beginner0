import { ctx } from './properties.mjs';

class Circle {
	constructor(
		x,
		y,
		radius,
		dx,
		dy,
		color = 'lightblue',
		startAngle = 0,
		endAngle = Math.PI * 2,
		drawCounterClockwise = false
	) {
		this.radius = radius;
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.startAngle = startAngle;
		this.endAngle = Math.PI * endAngle;
		this.drawCounterClockwise = drawCounterClockwise;
		this.color = color;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.drawCounterClockwise);
		ctx.strokeStyle = this.color;
		ctx.stroke();
	}
	update() {
		if (this.y > innerHeight * 0.45 - this.radius || this.y < this.radius) this.dy = -this.dy;

		if (this.x > innerWidth - this.radius || this.x < this.radius) this.dx = -this.dx;

		this.y += this.dy;
		this.x += this.dx;

		this.draw();
	}
}

export default Circle;
