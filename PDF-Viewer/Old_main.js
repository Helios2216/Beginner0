// Old code I was experimenting with.
const tester = document.getElementById('test');

let targetPdf = [];
const target = document.querySelector('#pdf-input');
//console.log(target);

const scale = 1.5,
	canvas = document.querySelector('#pdf-render'),
	ctx = canvas.getContext('2d');

//Render Page
const renderPage = num => {};

//Get Document
target.addEventListener('change', () => {
	const iframe = document.getElementById('viewer');
	targetPdf = target.files.item(0);
	console.log(targetPdf);
	const reader = new FileReader();

	reader.onload = () => {
		//can out put message here but maybe redundant, or do something in html, maybe with node save somewhere
		//console.log(reader.result);
	};
	reader.readAsDataURL(targetPdf); // read file as type: dataurl for pdf conversion

	//console.log(reader.result);
	let obj_url = '';
	if (targetPdf) {
		obj_url = window.URL.createObjectURL(targetPdf);
	}

	iframe.setAttribute('src', obj_url);
	window.URL.revokeObjectURL(obj_url);
});
