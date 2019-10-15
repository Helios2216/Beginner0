import { ctx } from './properties.mjs';

class Circle {
	constructor(
		array = 'lime',
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
		this.endAngle = Math.PI * endAngle;
		this.drawCounterClockwise = drawCounterClockwise;
		array !== null ? (this.color = array[Math.floor(Math.random() * array.length)]) : (this.color = array);
		fill ? (this.fill = array[Math.floor(Math.random() * array.length)]) : null;
	}

	draw(mouseX, mouseY, minRadius, maxRadius, distanceAway) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.drawCounterClockwise);
		this.fill && this.setFill();
		ctx.strokeStyle = this.color;
		ctx.stroke();

		this.update(mouseX, mouseY, minRadius, maxRadius, distanceAway);
	}
	update(mouseX, mouseY, minRadius = 20, maxRadius = 70, distanceAway = 50) {
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
	}
	setFill() {
		ctx.fillStyle = this.fill;
		ctx.fill();
	}
}

export default Circle;
