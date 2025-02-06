document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let total = 0;

  cartItems.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const row = document.createElement("tr");
    row.innerHTML = `  
            <td><a href="#" class="remove-item" data-index="${index}"><i class="far fa-times-circle"></i></a></td>  
            <td><img src="${item.image}" alt=""></td>  
            <td>${item.name}</td>  
            <td>₹${item.price}</td>  
            <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>  
            <td>₹${itemTotal}</td>  
        `;
    cartItemsContainer.appendChild(row);
  });

  document.getElementById("cartTotal").textContent = `₹${total}`;
  document.getElementById("cartTotalFinal").textContent = `₹${total}`;

  // Add event listener for remove buttons
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const index = this.getAttribute("data-index");
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      location.reload();
    });
  });

  window.updateQuantity = function (index, quantity) {
    cartItems[index].quantity = parseInt(quantity);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    location.reload();
  };
});
