
const input = document.querySelector('#input');
const btn = document.querySelector('#button');

const getCoutries = async function () {
	try {
		const resp = await fetch(`https://restcountries.com/v2/name/${input.value}`);
		const countriesJson = await resp.json();
		console.log(countriesJson);
	} catch (error) {
		console.log(error);
	}

}

btn.addEventListener('click', () => {
	getCoutries();
})