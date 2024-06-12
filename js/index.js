document.addEventListener("DOMContentLoaded", function () {
    var filterButton = document.getElementById("filter");
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


