import Circle from './ClassCircle.mjs';
import { FNCircle as FNC } from './CourseFnCircle.mjs';
import init, { shape, canvas, ctx, play } from './properties.mjs';

init(); /* I created this function before course, only to find out that the course instructor and I thought of the same name XD. However, he puts his init in the event listener and it's more complex */

const test = () => {
	shape.innerText = `width: ${canvas.width} height: ${canvas.height}`;

	// const radius = 10;
	// let x = Math.random() * innerWidth - radius;
	// let y = Math.random() * (innerHeight * 0.45) - radius;
	let count = 0;
	// let dx = (Math.random() - 0.5) * 10;
	// let dy = (Math.random() - 0.5) * 12;

	// const miniCircle = new Circle(x, 150, 30, dx, dy);
	// const miniFNC = new FNC(100, 200, 50, dx, dy);
	// const originalCircle = new FNC(x, y, radius, dx, dy);

	const mouse = {
		x: undefined,
		y: undefined
	};

	const colorArray = [ '#067652', '#50768b', '#b52eeb', '#21c7d6', '#745fda', '#6bdb7a', '#b22616' ];

	const circleArray = [];

	for (let i = 0; i < 25; i++) {
		const radius = Math.random() * 40 + 50;
		const diameter = radius * 2;
		const dw = innerWidth - diameter;
		const dh = innerHeight * 0.45 - diameter;
		let x = Math.random() * dw + radius;
		let y = Math.random() * dh + radius;
		let dx = (Math.random() - 0.5) * 10;
		let dy = (Math.random() - 0.5) * 12;

		circleArray.push(new FNC(colorArray, null, x, y, radius, dx, dy));

		circleArray.push(new Circle(colorArray, false, x, y, radius, dx, dy));
	}

	/* Mixed version, a bit from course and my version */
	const animate = () => {
		if (count > 1200) {
			console.log('Stopped');
			return 'end';
		}
		requestAnimationFrame(animate);
		ctx.clearRect(0, 0, innerWidth, innerHeight);

		// originalCircle.draw('lime');
		// miniCircle.update();
		// miniFNC.draw();

		circleArray.forEach((element) => {
			element.draw(mouse.x, mouse.y);
		});

		count++;
	};

	window.addEventListener('mousemove', (event) => {
		mouse.x = event.x;
		mouse.y = event.y;
	});
	return animate();
};

test();
window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight * 0.45;
});

play.addEventListener('click', () => {
	test();
});
