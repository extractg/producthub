const productContainer = document.getElementById("productContainer");

export function displayProducts(products) {
    productContainer.innerHTML = "";

    products.forEach(product => {
        const { title, price, image } = product;

        productContainer.innerHTML += `
            <div class="card">
                <h2>${title}</h2>
                <p>${price}</p>
                <img src="${image}" alt="">
            </div>
        `;
    });
}