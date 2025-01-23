
let cart = JSON.parse(localStorage.getItem('cart')) || [];


const cartItems = document.querySelector('.cart-items');
const totalPriceElement = document.getElementById('total-price');


function displayCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceElement.textContent = '0';
        return;
    }

    cartItems.innerHTML = ''; 
    let totalPrice = 0; 

    
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.product} </span>
            <span">₹${item.price} </span>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItems.appendChild(itemElement);

        
        totalPrice += item.price;
    });

    
    totalPriceElement.textContent = totalPrice.toFixed(2);
}


cartItems.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item')) {
        const index = event.target.getAttribute('data-index');
        removeItemFromCart(index);
    }
});

// Function to remove item from cart
function removeItemFromCart(index) {
    // Remove item from cart array
    cart.splice(index, 1);

    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Re-render cart items
    displayCartItems();
}


displayCartItems();


function goBack() {
    window.location.href = 'raaj.html'; 
}
function ordernow() {
    window.location.href = 'order.html'; 
}
