async function ProductsAPI(displayData) {
	const response = await fetch(
		"https://aftabwebdev.github.io/api/products/products.json"
	);
	const data = await response.json();
	displayData(data);

	// fetch("https://aftabwebdev.github.io/api/products/products.json")
	// 	.then((res) => res.json())
	// 	.then((data) => displayData(data))
	// 	.catch((err) => err.message);
}

export default ProductsAPI;
