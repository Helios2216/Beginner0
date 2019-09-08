const menuTarget = document.querySelector('.menu-target');
const menuTarget01 = document.querySelector('.menu-target-1');
const menu = document.querySelector('.menu');

menuTarget.addEventListener('click', () => {
	console.log('clicked');

	menu.style.transform = `translate(20em)`;
});
menuTarget01.addEventListener('click', () => {
	console.log('clicked');

	menu.style.transform = `translate(0)`;
});
