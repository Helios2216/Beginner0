const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//Search states.json and filter
const searchStates = async searchText => {
	const res = await fetch('./data/states.json');
	const states = await res.json();

	//Get matches to current text input
	let matches = states.filter(state => {
		const regex = new RegExp(`^${searchText}`, 'gi');

		return state.name.match(regex) || state.abbr.match(regex);
	});

	if (searchText.length === 0) {
		matches = [];
		matchList.innerHTML = '';
	}

	outputHtml(matches);
};

// Show result in html
const outputHtml = matches => {
	if (matches.length > 0) {
		const html = matches
			.map(
				match => `
        <small class="card card-body mb-1">
        <h4> <span class="text-success">${match.name}</span> (${match.abbr}) <span class="text-primary">${match.capital}</span> </h4>
        <small" >Lat: <span class="text-primary">${match.lat}</span>  / Long: <span class="text-primary">${match.long}</span></small>
        </div>`
			)
			.join('');

		matchList.innerHTML = html;
	}
};

search.addEventListener('input', () => searchStates(search.value));
