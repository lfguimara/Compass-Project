
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




document.querySelectorAll('.btn-golden').forEach(function (button) {
    button.addEventListener('click', function () {
        if (!this.classList.contains('next')) {
            // Remove a classe 'active' de todos os botões
            document.querySelectorAll('.btn-golden').forEach(function (btn) {
                btn.classList.remove('active');
            });

            // Adiciona a classe 'active' ao botão clicado
            this.classList.add('active');
        }
    });
});

document.querySelector('.next').addEventListener('click', function () {

    let activeButton = document.querySelector('.btn-golden.active');

    let buttons = document.querySelectorAll('.btn-golden:not(.next)');


    let currentIndex = Array.from(buttons).indexOf(activeButton);

    let nextIndex = (currentIndex + 1) % buttons.length;


    activeButton.classList.remove('active');

    buttons[nextIndex].classList.add('active');
});








