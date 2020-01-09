// Canvas crash course Brad Traversy
const canvas = document.querySelector('#canvas');

const init = () => {
	canvas.width = window.innerWidth * 0.95;
	canvas.height = window.innerHeight * 0.45;
};

init();

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth * 0.95;
	canvas.height = window.innerHeight * 0.45;
});

const ctx = canvas.getContext('2d');
