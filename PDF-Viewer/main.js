//Dynamic -v
// let targetPdf = [];
// const target = document.querySelector('#pdf-input');
// target.addEventListener('change', () => {
// 	targetPdf = target.files.item(0);
// 	console.log(targetPdf);

// pdfjsLib.getDocument(targetPdf).promise.then(pdfFile => {
// 	pdfDoc = pdfFile;

// 	document.querySelector('#page-count').textContent = pdfDoc.numPages;

// });
// });

const url = './pdf.pdf';

let pdfDoc = null,
	targetPdfDoc = null,
	pageNum = 1,
	pageIsRendering = false,
	pageNumIsPending = null;

const scale = 1.5,
	canvas = document.querySelector('#pdf-render'),
	ctx = canvas.getContext('2d');

//Render Page
const renderPage = num => {
	pageIsRendering = true;

	// Get Page
	pdfDoc.getPage(num).then(page => {
		// Set Scale
		const viewport = page.getViewport({ scale });
		canvas.height = viewport.height; //set canvas height
		canvas.width = viewport.width; // set canvas width

		const renderCTX = {
			canvasContext: ctx,
			viewport
		};

		page.render(renderCTX).promise.then(() => {
			pageIsRendering = false;

			if (pageNumIsPending !== null) renderPage(pageNumIsPending);
			pageNumIsPending = null;
		});

		// Output Current Page
		document.querySelector('#page-num').textContent = num;
	});
};

// Check for pages rendering
const queueRenderPage = num => {
	if (pageIsRendering) pageNumIsPending = num;
	else renderPage(num);
};

// Show Prev Page
const showPrevPage = () => {
	if (pageNum <= 1) return;
	pageNum--;
	queueRenderPage(pageNum);
};
// Show Next Page
const showNextPage = () => {
	if (pageNum >= pdfDoc.numPages) return;
	pageNum++;
	queueRenderPage(pageNum);
};

//Get Document
pdfjsLib.getDocument(url).promise.then(pdfFile => {
	pdfDoc = pdfFile;

	document.querySelector('#page-count').textContent = pdfDoc.numPages;

	renderPage(pageNum);
});

// Button Events

document.querySelector('#prev-page').addEventListener('click', showPrevPage, false);
document.querySelector('#next-page').addEventListener('click', showNextPage, false);
