const API_URL = "https://fakestoreapi.com/products";

export async function getProducts() {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Could not fetch products");
    }

    return await response.json();

}

export async function getProduct(id) {

    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Could not fetch product");
    }

    return await response.json();

}