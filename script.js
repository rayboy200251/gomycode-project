document.addEventListener("DOMContentLoaded", function () {
    const decreaseButtons = document.querySelectorAll(".decrease");
    const increaseButtons = document.querySelectorAll(".increase");
    const clearCartButton = document.querySelector(".clear-cart");
    const buyButton = document.querySelector(".buy-btn");
  
    // Define the price and initialize quantity
    const price = 20;
    let quantity = 0;
  
    // Function to update the total price
    function updateTotalPrice() {
      const totalPrice = quantity * price;
      return totalPrice;
    }
  
    // Function to update the display of the total quantity
    function updateQuantityDisplay() {
      const quantityElement = document.querySelector(".total-quantity");
      quantityElement.textContent = quantity;
    }
  
    // Function to update the display of the total price
    function updateTotalPriceDisplay() {
      const totalPriceElement = document.querySelector(".total-price");
      const totalPrice = updateTotalPrice();
      totalPriceElement.textContent = totalPrice;
    }
  
    // Event listeners for decrease buttons
    decreaseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const quantityElement = button.nextElementSibling;
        let currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 0) {
          currentQuantity--;
          quantity = currentQuantity; // Update the quantity variable
          quantityElement.textContent = currentQuantity;
          updateQuantityDisplay();
          updateTotalPriceDisplay();
        }
      });
    });
  
    // Event listeners for increase buttons
    increaseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const quantityElement = button.previousElementSibling;
        let currentQuantity = parseInt(quantityElement.textContent);
        currentQuantity++;
        quantity = currentQuantity; // Update the quantity variable
        quantityElement.textContent = currentQuantity;
        updateQuantityDisplay();
        updateTotalPriceDisplay();
      });
    });
  
    // Event listener for clear cart button
    clearCartButton.addEventListener("click", () => {
      const quantityElements = document.querySelectorAll(".quantity-value");
      quantityElements.forEach((element) => {
        element.textContent = "0";
      });
      quantity = 0;
      updateQuantityDisplay();
      updateTotalPriceDisplay();
    });
  
    // Event listener for buy button
    buyButton.addEventListener("click", () => {
      const pin = prompt("Please enter your PIN:");
      if (pin === "1234") {
        alert(
          "You have purchased " +
            quantity +
            " quantity for a total of $" +
            updateTotalPrice() +
            ". Thank you for your purchase!"
        );
      } else {
        alert("Incorrect PIN. Transaction aborted.");
      }
    });
  });