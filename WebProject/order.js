
document.addEventListener("DOMContentLoaded", function () {
    // Handle form submission
    const form = document.getElementById("address-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const userAddress = {
        fullName: document.getElementById("full-name").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip: document.getElementById("zip").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
      };
  
     
      localStorage.setItem("userAddress", JSON.stringify(userAddress));
  
      
      window.location.href = "#";
    });
  });

function goBack() {
    window.location.href = 'cart.html'; 
}
function goToOrderSummery(){
    window.location.href = 'order-summary.html'; 
}