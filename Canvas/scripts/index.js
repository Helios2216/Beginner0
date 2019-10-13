const shape = document.getElementById('size');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight * 0.45;
	test();
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.45;

const test = () => {
	shape.innerText = `width: ${canvas.width} height: ${canvas.height}`;

	//Rectangle

	/* ctx.fillRect(x,y,width,height), fillStyle must be before rect */
	// ctx.fillStyle = 'rgba(255, 102, 0, 0.9)';
	// ctx.fillRect(400, 100, 100, 100);

	// Line
	// ctx.beginPath();

	/* ctx.moveTo(x,y) ,next ctx.lineTo(x,y) , needs stroke to show on page, strokeStyle to add color line: can be rgba, text, or hex, fillStyle rect */
	// ctx.moveTo(50, 300);
	// ctx.lineTo(300, 100);
	// ctx.lineTo(300, 380);
	// ctx.lineTo(50, 300);
	// ctx.strokeStyle = '#10008c';
	// ctx.stroke();

	// Arc / Circle

	/* 
	ar(x: Int, y: Int, r: Int(radius), startAngle: Float, endAngle: Float, drawCounterClockwise: Boolean( default: false)) 
	*/
	// ctx.beginPath();
	// ctx.arc(240, 240, 50, 0, Math.PI * 2, false);
	// ctx.strokeStyle = 'lime';
	// ctx.stroke();

	let x = 40;
	let y = 20;
	let count = 0;
	let dx = 1;
	let dy = 1;
	const radius = 10;
	/* My version, course has less code. Same outcome. I will use course refactored version after; count used to break out of recursion for now */
	const animate = () => {
		if (count > 1200) return console.log('Stopped');
		requestAnimationFrame(animate);
		ctx.clearRect(0, 0, innerWidth, innerHeight);

		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2, false);
		ctx.strokeStyle = 'lime';
		ctx.stroke();

		if (y > innerHeight * 0.45 - radius) dy = -dy;
		else if (y < radius) {
			dy = dy * -1;
		}
		if (x > innerWidth - radius) dx = -dx;
		else if (x < radius) {
			dx = dx * -1;
		}

		y += dy;
		x += dx;

		count++;
	};
	animate();
};

test();
