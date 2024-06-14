
//Filter-left

document.addEventListener("DOMContentLoaded", function () {
    var filterButton = document.getElementById("filter-a-z");
    filterButton.addEventListener("click", function () {
        var productsContainer = document.getElementById("products");
        var products = Array.from(productsContainer.getElementsByClassName("product"));

        products.sort(function (a, b) {
            var nameA = a.querySelector(".product-name").innerText.toUpperCase();
            var nameB = b.querySelector(".product-name").innerText.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        products.forEach(function (product) {
            productsContainer.appendChild(product);
        });
    });
});



function priceToNumber(price) {
    return Number(price.replace(/[^0-9,-]+/g, "").replace(",", "."));
}


function sortProducts() {
    let products = Array.from(document.querySelectorAll('.product'));
    products.sort((a, b) => {
        let priceA = priceToNumber(a.querySelector('.price').textContent);
        let priceB = priceToNumber(b.querySelector('.price').textContent);
        return priceA - priceB;
    });

    let productsContainer = document.getElementById('products');
    products.forEach(product => {
        productsContainer.appendChild(product);
    });
}

document.getElementById('filter-money').addEventListener('click', sortProducts);

//Filter-right




