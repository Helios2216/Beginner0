// Before Episode 3 content

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

// Original circle
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2, false);
ctx.strokeStyle = 'lime';
ctx.stroke();

if (y > innerHeight * 0.45 - radius || y < radius) dy = -dy;

if (x > innerWidth - radius || x < radius) dx = -dx;

y += dy;
x += dx;

// Inside for loop
// flash effect
// element.draw(
// 	`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(
// 		Math.random() * 255
// 	)})`
// );
