export async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
        throw new Error("Failed to load products");
    }

    return await response.json();
}