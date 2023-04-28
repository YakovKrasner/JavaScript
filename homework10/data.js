const url = 'https://catfact.ninja/fact';
const factText = document.querySelector('.catFact');
async function catFact () {
try {
	const response = await fetch(url);
    console.log(response);
	const result = await response.json();
	factText.textContent = result.fact;
} catch (error) {
	console.error(error);
}
}

catFact();
//document.querySelector (".catFact").textContent = fact;