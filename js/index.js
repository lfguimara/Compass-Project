
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
    const imageContainer = document.getElementById('image-container');

    // Função para mostrar as imagens com base na seleção do select
    function showImages() {
        // Limpar o conteúdo atual do container de imagens
        imageContainer.innerHTML = '';

        // Obter o valor selecionado
        const quantity = parseInt(productToggle.value, 10);

        // Criar e adicionar as imagens ao container
        for (let i = 1; i <= quantity; i++) {
            const image = document.createElement('div');
            image.classList.add('image');
            image.textContent = i; // Exemplo: Usando texto para identificar cada imagem
            imageContainer.appendChild(image);
        }
    }

    // Adicionar um listener de evento para mudanças no select
    productToggle.addEventListener('change', showImages);

    // Chamada inicial para exibir as imagens com base no valor inicial do select
    showImages();
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










