export const shape = document.getElementById('size');
export let canvas = document.querySelector('canvas');
export let ctx = canvas.getContext('2d');

const init = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight * 0.45;
};

export const play = document.querySelector('.btn-play');

export default init;
