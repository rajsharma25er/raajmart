document.addEventListener("DOMContentLoaded", function () {
    // Retrieve address data from localStorage
    const userAddress = JSON.parse(localStorage.getItem("userAddress"));
    const cart = JSON.parse(localStorage.getItem("cart")) || [];  // Fetch cart data

    if (userAddress) {
        document.getElementById("confirm-name").textContent = userAddress.fullName;
        document.getElementById("confirm-address").textContent = userAddress.address;
        document.getElementById("confirm-city").textContent = userAddress.city;
        document.getElementById("confirm-state").textContent = userAddress.state;
        document.getElementById("confirm-zip").textContent = userAddress.zip;
        document.getElementById("confirm-phone").textContent = userAddress.phone;
        document.getElementById("confirm-email").textContent = userAddress.email;
    } else {
        window.location.href = "address.html";
    }

    // Display cart items
    const orderContainer = document.getElementById("order-items");
    let totalPrice = 0;

    if (cart.length === 0) {
        orderContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        orderContainer.innerHTML = "";  // Clear previous items
        cart.forEach(item => {
            const itemElement = document.createElement("p");
            itemElement.textContent = `${item.product} - ₹${item.price.toFixed(2)}`;
            orderContainer.appendChild(itemElement);
            totalPrice += item.price;
        });
    }

    // Update total price
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
});

function goBack() {
    window.location.href = "order.html";
}

function placeOrder() {
    alert("Order placed successfully! Thank you for shopping with us.");
    localStorage.removeItem("userAddress"); 
    localStorage.removeItem("cart");  
    window.location.href = "confirmation.html";
}
