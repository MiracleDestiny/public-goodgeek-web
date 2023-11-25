const components = [
	'navbar',
	'cover',
	'vision',
	'activities',
	'footer',
];
const path = './resources/components';
for (const name of components) {
	fetch(`${path}/${name}.html`)
		.then(response => response.text())
		.then(data => {
			const doc = document.querySelector(name);
			if (doc) {
				doc.innerHTML = data;
			}
		}); 
}

