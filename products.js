function productsAPI(displayData) {
	fetch("https://aftabwebdev.github.io/api/products/products.json")
		.then((res) => res.json())
		.then((data) => displayData(data))
		.catch((err) => err.message);
}
