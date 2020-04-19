const fs = require('fs');

fs.readFile('./form.txt', (err, data) => {
	const newData = data.toString().replace(/class/gi, 'className');

	fs.writeFile('./newForm.html', newData, (params) => {});
	if (err) {
		console.log(err.code);
	}
});
