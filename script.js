import { displayProducts } from "./ui.js";
import { getProducts } from "./api.js";
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const allProductsBtn = document.getElementById("allProductsBtn");
const electronicsBtn = document.getElementById("electronicsBtn");
const jeweleryBtn = document.getElementById("jeweleryBtn");
const sortPriceBtn = document.getElementById("sortPriceBtn");
const loading = document.getElementById("loading");
const sortNameBtn = document.getElementById("sortNameBtn");
const cheapProductsBtn = document.getElementById("cheapProductsBtn");


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
sortNameBtn.addEventListener("click", function () {
    products.sort((a, b) => a.title.localeCompare(b.title));
    displayProducts(products);
})
cheapProductsBtn.addEventListener("click", function () {
    const filterCheapProducts = products.filter(product => product.price < 50);
    displayProducts(filterCheapProducts);
})
const productsInfo = products.map(product => ({title: product.title, price: product.price}));
const sum = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
}, 0);