// Course version use functional objects
import { ctx } from './properties.mjs';

export function FNCircle(x, y, radius, dx, dy, startAngle = 0, endAngle = Math.PI * 2, drawCounterClockwise = false) {
	this.radius = radius;
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.startAngle = startAngle;
	this.endAngle = endAngle;
	this.drawCounterClockwise = drawCounterClockwise;

	this.draw = function(color = 'orange') {
		this.color = color;

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.drawCounterClockwise);
		ctx.strokeStyle = this.color;
		ctx.stroke();

		this.update();
	};
	this.update = function() {
		if (this.y > innerHeight * 0.45 - this.radius || this.y < this.radius) this.dy = -this.dy;

		if (this.x > innerWidth - this.radius || this.x < this.radius) this.dx = -this.dx;

		this.y += this.dy;
		this.x += this.dx;
	};
}
