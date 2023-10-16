const API = {
	products: "https://aftabwebdev.github.io/api/products/products.json",
	products2: "https://aftabwebdev.github.io/json-api/products.json",
	users: "https://aftabwebdev.github.io/json-api/users.json",
};

async function getAPI(api, displayData) {
	try {
		const response = await fetch(api);
		const data = await response.json();
		displayData(data);
	} catch (err) {
		document.body.innerHTML = err.message;
		console.log(err.message);
	}
}

export { api, getAPI };

/** 
 fetch("https://aftabwebdev.github.io/api/products/products.json")
	 .then((res) => res.json())
	 .then((data) => displayData(data))
	 .catch((err) => err.message);
 */
