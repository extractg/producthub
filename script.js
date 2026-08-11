import { displayProducts } from "./ui.js";
import { getProducts } from "./api.js";
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const allProductsBtn = document.getElementById("allProductsBtn");
const electronicsBtn = document.getElementById("electronicsBtn");
const jeweleryBtn = document.getElementById("jeweleryBtn");
const sortPriceBtn = document.getElementById("sortPriceBtn");
const loading = document.getElementById("loading");


let products = [];
async function init() {
    try {
        loading.style.display = "flex";

        products = await getProducts();

        displayProducts(products);
    }
    catch (err) {
        loading.textContent = "Failed to load products.";
    }
    finally {
        loading.style.display = "none";
    }
}

init();

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchTerm);
    });
    displayProducts(filteredProducts);
});
sortPriceBtn.addEventListener("click", function () {
    products.sort((a, b) => a.price - b.price);
    displayProducts(products);
});
