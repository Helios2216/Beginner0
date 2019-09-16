// For manual testing before React

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

const openDropdown = (selector) => {
	/* 
	Note: train of thought:
	 Add chervon right down to child node 
	 don't select childnode using html
	 just queryselect

	 add indicator on parent
	 remove both indicator and child class 

	 not best solution - this is template for react app

	 -- stopping point -- 9/15/2019
	
	*/
	console.log(selector.classList, typeof selector.classList.value, selector.childNodes);
	let check = selector.classList.value.split(' ');

	console.log(check.includes('chevron-right-down'));

	if (check.includes('chevron-right-down')) {
		selector.classList.remove('chevron-right-down');
	} else {
		selector.classList.add('chevron-right-down');
	}
};
