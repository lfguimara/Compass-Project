
//Filter-left

document.addEventListener("DOMContentLoaded", function () {
    var filterSelect = document.getElementById("filter-select");
    filterSelect.addEventListener("change", function () {
        var selectedValue = filterSelect.value;
        if (selectedValue === "a-z") {
            sortProductsByName();
        } else if (selectedValue === "price") {
            sortProductsByPrice();
        }
    });
});

function sortProductsByName() {
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
}

function priceToNumber(price) {
    return Number(price.replace(/[^0-9,-]+/g, "").replace(",", "."));
}

function sortProductsByPrice() {
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

document.addEventListener('DOMContentLoaded', function() {
    const productToggle = document.getElementById('product-toggle');
    const products = document.querySelectorAll('.product');

    productToggle.addEventListener('change', function () {
        const selectedValue = productToggle.value;

        products.forEach(function (product) {
            const quantity = product.getAttribute('data-quantity');
            if (quantity === selectedValue) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    });

    // Initialize visibility based on the default selected value
    const selectedValue = productToggle.value;
    products.forEach(function (product) {
        const quantity = product.getAttribute('data-quantity');
        if (quantity !== selectedValue) {
            product.classList.add('hidden');
        }
    });
});


//button

document.querySelectorAll('.btn-golden').forEach(function (button) {
    button.addEventListener('click', function () {
        // Remove a classe 'active' de todos os botões
        document.querySelectorAll('.btn-golden').forEach(function (btn) {
            btn.classList.remove('active');
        });

        // Adiciona a classe 'active' ao botão clicado
        this.classList.add('active');
    });
});










