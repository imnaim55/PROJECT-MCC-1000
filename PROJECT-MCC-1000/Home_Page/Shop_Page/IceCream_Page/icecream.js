document.addEventListener("DOMContentLoaded", function () {
  const cartButtons = document.querySelectorAll(".cart");

  cartButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      // Get product details
      const productElement = this.closest(".pro");
      const productName = productElement.querySelector(".des h5").textContent;
      const productPrice = productElement
        .querySelector(".des h4")
        .textContent.replace("₹", "");
      const productImage = productElement.querySelector("img").src;
      const productQuantity = 1; // Default quantity

      // Create an object to store in localStorage
      const product = {
        name: productName,
        price: parseFloat(productPrice),
        image: productImage,
        quantity: productQuantity,
      };

      // Retrieve existing cart items from localStorage
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Check if the product already exists in the cart
      const existingProductIndex = cartItems.findIndex(
        (item) => item.name === productName
      );

      if (existingProductIndex !== -1) {
        // If product exists, increase the quantity
        cartItems[existingProductIndex].quantity += 1;
      } else {
        // If product does not exist, add it to the cart
        cartItems.push(product);
      }

      // Store the updated cart in localStorage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      alert(`${productName} has been added to your cart.`);
    });
  });
});
