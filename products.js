async function ProductsAPI(displayData) {
	const api = {
		products: "https://aftabwebdev.github.io/api/products/products.json",
		users: "https://aftabwebdev.github.io/json-api/users.json",
	};

	try {
		const response = await fetch(api);
		const data = await response.json();
		displayData(data);
	} catch (err) {
		document.body.innerHTML = err.message;
		console.log(err.message);
	}
}

export default ProductsAPI;

/** 
 fetch("https://aftabwebdev.github.io/api/products/products.json")
	 .then((res) => res.json())
	 .then((data) => displayData(data))
	 .catch((err) => err.message);
 */
