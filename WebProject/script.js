let cart = JSON.parse(localStorage.getItem('cart')) || [];

const addToCartButtons = document.querySelectorAll('.add-button');
const cartCount = document.querySelector('.cart-count');

function updateCartCount() {
    cartCount.textContent = cart.length;
}

addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.getAttribute('data-product');
        const price = parseFloat(event.target.getAttribute('data-price'));
        addItemToCart(product, price);
    });
});

function addItemToCart(product, price) {
    cart.push({ product, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

window.addEventListener('storage', (event) => {
    if (event.key === 'cart') {
        cart = JSON.parse(localStorage.getItem('cart')) || [];
        updateCartCount();
    }
});

updateCartCount();


function updateCartCount() {
    cartCount.textContent = cart.length; 
}



function goToCart() {
    window.open('cart.html', '_blank');
}
const categorySelect = document.getElementById('categorySelect');

categorySelect.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    if (selectedValue !== 'default') {
        window.location.href = selectedValue; 
    }
});


