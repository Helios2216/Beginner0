// Course version use functional objects
import { ctx } from './properties.mjs';

export function FNCircle(
	array = 'orange',
	fill,
	x,
	y,
	radius,
	dx,
	dy,
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
	this.endAngle = endAngle;
	this.drawCounterClockwise = drawCounterClockwise;

	array !== null ? (this.color = array[Math.floor(Math.random() * array.length)]) : (this.color = array);

	if (fill !== null) {
		this.fill = array[Math.floor(Math.random() * array.length)];
	}

	this.draw = function(mouseX, mouseY, minRadius, maxRadius, distanceAway) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.drawCounterClockwise);
		ctx.strokeStyle = this.color;
		this.fill && this.setFill();
		ctx.stroke();

		this.update(mouseX, mouseY, minRadius, maxRadius, distanceAway);
	};
	this.update = function(mouseX, mouseY, minRadius = 5, maxRadius = 40, distanceAway = 50) {
		if (this.y > innerHeight * 0.45 - this.radius || this.y < this.radius) this.dy = -this.dy;

		if (this.x > innerWidth - this.radius || this.x < this.radius) this.dx = -this.dx;

		this.y += this.dy;
		this.x += this.dx;

		// Interactivity
		if (
			mouseX - this.x < distanceAway &&
			mouseX - this.x > -distanceAway &&
			mouseY - this.y < distanceAway &&
			mouseY - this.y > -distanceAway
		) {
			if (this.radius < maxRadius) {
				this.radius += 1;
			}
		} else if (this.radius > minRadius) {
			this.radius--;
		}
	};
	this.setFill = function() {
		ctx.fillStyle = this.fill;
		ctx.fill();
	};
}
