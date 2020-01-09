const canvas = document.querySelector('#canvas');
const props = document.getElementById('prop');
const image = document.getElementById('source');

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

class Player {
	constructor(width = 50, height = 70, x = 20, y = 200, speed = 1, dx = 0, dy = 0) {
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.dx = dx;
		this.dy = dy;
		/* note: 
        FUTURE REF: 
        document.addEventlistener can just be call in the class, didn't know this until now 
        */
		document.addEventListener('keydown', (e) => {
			this.keydown(e);
			this.listen(e);
		});
		document.addEventListener('keydown', (e) => {
			this.keyUp(e);
		});
	}
	playerPosition = () => {
		/* 
        it's a bit buggy it jumps by 2 instead of speed which is one, I'll have to keep playing with the class syntax 
        Edit: I think it is retaining the value from the previous key down since keyup wasn't implemented.
        Implementing key up now. Semi-fixed.
        */

		// Detect wall
		if (this.x < 0) {
			this.x = 0;
		}
		if (this.x + this.width > canvas.width) {
			this.x = canvas.width - this.width;
		}
		if (this.y < 0) {
			this.y = 0;
		}
		if (this.y + this.height > canvas.height) {
			this.y = canvas.height - this.height;
		}

		// player position
		this.x += this.dx;
		this.y += this.dy;
	};

	drawPlayer = () => {
		// new: drawImage(image, loc.x, loc.y, width, height)
		ctx.drawImage(image, this.x, this.y, this.width, this.height);
		this.playerPosition();
		console.log(this.x);
	};
	update = (e) => {
		if (e !== undefined) {
			console.log(e.key, this.y, this.x);
			switch (e.key) {
				case 'ArrowUp' || 'Up':
					this.moveUp();
					break;
				case 'ArrowRight' || 'Right':
					this.moveRight();
					break;
				case 'ArrowDown' || 'Down':
					this.moveDown();
					break;
				case 'ArrowLeft' || 'Left':
					this.moveLeft();
					break;
			}
		}

		// if (e.key === 'ArrowRight' || e.key === 'Right') {
		// 	this.moveRight();
		// } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
		// 	this.moveLeft();
		// } else if (e.key === 'ArrowUp' || e.key === 'Up') {
		// 	this.moveUp();
		// } else if (e.key === 'ArrowDown' || e.key === 'Down') {
		// 	this.moveDown();
		// }
	};
	listen = (e) => {
		if (e) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			this.drawPlayer();

			return true;
		}
	};
	moveRight() {
		this.dx += this.speed;
	}
	moveLeft() {
		this.dx += -this.speed;
	}
	moveUp() {
		this.dy = -this.speed;
	}
	moveDown() {
		this.dy = this.speed;
	}
	keydown = (e) => {
		this.update(e);
	};
	keyUp = () => {
		this.dx = 0;
		this.dy = 0;
	};
}

const player = new Player(undefined, undefined, undefined, undefined, 10);

const clear = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
};

let count = 0;
const animate = () => {
	count++;
	if (count > 410) return;
	player.drawPlayer();

	if (player.listen()) {
		requestAnimationFrame(animate);
	}
};

// function keydown(e) {
// 	player.listen(e);
// }
// function keyup(e) {

// }

// document.addEventListener('keydown', keydown);

//document.addEventListener('keyup',keyup)
animate();

// Working animation is a bit buggy, but very fun learning especially trying to convert functions into classes which doesn't work as straight foward
