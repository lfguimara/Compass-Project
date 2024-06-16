
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


//Validação do email

function validarEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function subscribe(event) {
    event.preventDefault(); // Evita que o link SUBSCRIBE recarregue a página

    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();

    if (!validarEmail(email)) {
        // Aplica a classe de CSS para borda vermelha
        emailInput.classList.add('invalid-email');
        return; // Stop further execution
    }

    // Remove a classe de CSS para borda vermelha se o email for válido
    emailInput.classList.remove('invalid-email');

    // Code to subscribe the user goes here
    // For example, you might send the email to your server or perform some other action
    alert('Subscribed successfully!');
    
    // Optionally, reset the email input after successful subscription
    emailInput.value = '';
}