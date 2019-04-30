/* I wanted to see if the direction I would take to create a swipe screen was correct. At some point I'll create my own refactored version unless I can find a better version online */

const pageOne = document.querySelector('#page-one');
const pageTwo = document.querySelector('#page-two');

let startingX;

const handleSwipeStart = event => {
	startingX = event.touches[0].clientX;
};

const handleSwipeMove = event => {
	let touch = event.touches[0];
	let change = startingX - touch.clientX;
	if (change < 0) return;
	//pageOne.style.left = `-${change}px`; // Alt code
	pageOne.style.left = '-' + change + 'px';
	pageTwo.style.display = 'block';
	//pageTwo.style.left = `${screen.width - change}px`; //Alt code
	pageTwo.style.left = screen.width - change + 'px';
	event.preventDefault();
};

const handleSwipeEnd = event => {
	let change = startingX - event.changedTouches[0].clientX;
	let third = screen.width / 3;
	if (change < third) {
		pageOne.style.left = 0;
		pageTwo.style.left = '100%';
		pageTwo.style.display = 'none';
	} else {
		pageOne.style.transition = 'all .3s';
		pageTwo.style.transition = 'all .3s';
		pageOne.style.left = '-100%';

		pageTwo.style.left = '0';
		pageTwo.style.display = 'block';
	}
};

const p2handleSwipeStart = event => {
	startingX = event.touches[0].clientX;
	pageOne.style.transition = '';
	pageTwo.style.transition = '';
	pageOne.style.display = 'none';
};

const p2handleSwipeMove = event => {
	let touch = event.touches[0];
	let change = touch.clientX - startingX;
	if (change < 0) return;

	pageOne.style.display = 'block';
	pageOne.style.left = `${change - screen.width}px`;

	pageTwo.style.left = change + 'px';
	event.preventDefault();
};

const p2handleSwipeEnd = event => {
	let change = event.changedTouches[0].clientX - startingX;
	let fourth = screen.width / 4;
	if (change < fourth) {
		pageOne.style.left = '-100%';
		pageOne.style.display = 'none';

		pageTwo.style.left = 0;
	} else {
		pageOne.style.transition = 'all .3s';
		pageTwo.style.transition = 'all .3s';
		pageOne.style.left = '0';

		pageTwo.style.left = '100%';
	}
};
