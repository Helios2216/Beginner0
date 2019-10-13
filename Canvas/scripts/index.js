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
	ctx.fillStyle = 'rgba(255, 102, 0, 0.9)';
	ctx.fillRect(400, 100, 100, 100);

	// Line
	ctx.beginPath();

	/* ctx.moveTo(x,y) ,next ctx.lineTo(x,y) , needs stroke to show on page, strokeStyle to add color line: can be rgba, text, or hex, fillStyle rect */
	ctx.moveTo(50, 300);
	ctx.lineTo(300, 100);
	ctx.lineTo(300, 380);
	ctx.lineTo(50, 300);
	ctx.strokeStyle = '#10008c';
	ctx.stroke();

	// Arc / Circle

	/* 
	ar(x: Int, y: Int, r: Int(radius), startAngle: Float, endAngle: Float, drawCounterClockwise: Boolean( default: false)) 
	*/
	ctx.beginPath();
	ctx.arc(240, 240, 50, 0, Math.PI * 2, false);
	ctx.strokeStyle = 'lime';
	ctx.stroke();
};

test();
