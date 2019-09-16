// For manual testing before React

const menuTarget = document.querySelector('.menu-target');
const menuTarget01 = document.querySelector('.menu-target-1');
const menu = document.querySelector('.menu');

menuTarget.addEventListener('click', () => {
	console.log('clicked');

	menu.style.transform = `translate(20em)`;
});
menuTarget01.addEventListener('click', () => {
	menu.style.transform = `translate(0)`;
});

const splitClassList = (selector) => {
	return selector.classList.value.split(' ');
};

const openDropdown = () => {
	/* 
	working but needs to be dynamic

	could wrap vars inside function: store = split(doc.q(etc))
	but I like following the logic
	*/

	const store = document.querySelector('.store');

	const selector = document.querySelector('.chevron-right');
	let check = splitClassList(selector);

	if (check.includes('chevron-right-down')) {
		selector.classList.remove('chevron-right-down');
		store.classList.add('menu-grid-dropdown-hidden');
	} else {
		selector.classList.add('chevron-right-down');
		store.classList.remove('menu-grid-dropdown-hidden');
	}
};
