const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const allProductsBtn = document.getElementById("allProductsBtn");
const electronicsBtn = document.getElementById("electronicsBtn");
const jeweleryBtn = document.getElementById("jeweleryBtn");
const sortPriceBtn = document.getElementById("sortPriceBtn");
const loading = document.getElementById("loading");
const productContainer = document.getElementById("productContainer");


let products = [];
async function getProducts (){
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    products = data;
    displayProducts(products);
}
getProducts();

function displayProducts(products) {
    productContainer.innerHTML = "";

products.forEach(product => {
    productContainer.innerHTML += `
        <div class="card">
            <h2>${product.title}</h2>
            <p>${product.price}</p>
            <img src="${product.image}" alt="">
        </div>
    `;
        console.log(product)
})}
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