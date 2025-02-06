document.addEventListener("DOMContentLoaded", function () {
  const products = {
    1: {
      image: "../../Cake Images/pro1.jpg",
      name: "Butterfly Theme Cake",
      price: 499,
      description:
        "Delicate and enchanting, our butterfly-themed cake is a true work of art...",
    },
    2: {
      image: "../../Cake Images/pro2.jpg",
      name: "Flower Theme Cake",
      price: 450,
      description:
        "Our flower theme cake is a beautiful and delicious creation...",
    },
    3: {
      image: "../../Cake Images/pro3.jpg",
      name: "Anniversary Cake",
      price: 550,
      description:
        "Celebrate love and commitment with our exquisite anniversary cake...",
    },
    4: {
      image: "../../Cake Images/pro4.jpg",
      name: "Celebration Cake",
      price: 395,
      description: "Our celebration cake is perfect for any joyful occasion...",
    },
    5: {
      image: "../../Cake Images/pro5.jpg",
      name: "Fresh Chocolatem & Berrys",
      price: 599,
      description: "Our celebration cake is perfect for any joyful occasion...",
    },
    6: {
      image: "../../Cake Images/Cakepro6.jpg",
      name: "Birthday Cake",
      price: 425,
      description: "Our celebration cake is perfect for any joyful occasion...",
    },
    7: {
      image: "../../Cake Images/pro7.jpg",
      name: "Celebration Cake",
      price: 600,
      description: "Our celebration cake is perfect for any joyful occasion...",
    },
    8: {
      image: "../../Cake Images/pro8.jpg",
      name: "Birthday Cake",
      price: 525,
      description: "Our celebration cake is perfect for any joyful occasion...",
    },
    9: {
      image: "../../Cake Images/pro9.jpg",
      name: "Rainbow Theme Cake",
      price: 550,
      description: "Our celebration cake is perfect for any joyful occasion...",
    },
    10: {
      image: "../../Cake Images/pro1.jpg",
      name: "Butterfly Theme Cake",
      price: 499,
      description:
        "Delicate and enchanting, our butterfly-themed cake is a true work of art...",
    },
    11: {
      image: "../../Cake Images/pro2.jpg",
      name: "Flower Theme Cake",
      price: 450,
      description:
        "Our flower theme cake is a beautiful and delicious creation...",
    },
    12: {
      image: "../../Cake Images/pro3.jpg",
      name: "Anniversary Cake",
      price: 550,
      description:
        "Celebrate love and commitment with our exquisite anniversary cake...",
    },
    13: {
      image: "../../Cake Images/pro4.jpg",
      name: "Celebration Cake",
      price: 395,
      description: "Our celebration cake is perfect for any joyful occasion...",
    },
    14: {
      image: "../../Cake Images/pro5.jpg",
      name: "Fresh Chocolatem & Berrys",
      price: 599,
      description: "Our celebration cake is perfect for any joyful occasion...",
    },
    15: {
      image: "../../Cake Images/Cakepro6.jpg",
      name: "Birthday Cake",
      price: 425,
      description: "Our celebration cake is perfect for any joyful occasion...",
    },
    16: {
      image: "../../Cake Images/pro7.jpg",
      name: "Celebration Cake",
      price: 600,
      description: "Our celebration cake is perfect for any joyful occasion...",
    },
    17: {
      image: "../../Cake Images/pro8.jpg",
      name: "Birthday Cake",
      price: 525,
      description: "Our celebration cake is perfect for any joyful occasion...",
    },
    18: {
      image: "../../Cake Images/pro9.jpg",
      name: "Rainbow Theme Cake",
      price: 550,
      description: "Our celebration cake is perfect for any joyful occasion...",
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("product");

  if (productId && products[productId]) {
    const product = products[productId];
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `₹${product.price}`;
    document.getElementById("product-description").textContent =
      product.description;

    document
      .getElementById("add-to-cart-btn")
      .addEventListener("click", function () {
        addToCart(product.name, product.price, product.image);
      });
  } else {
    document.getElementById("prodetails").innerHTML =
      "<p>Product not found.</p>";
  }
});

function addToCart(name, price, image) {
  const flavour = document.getElementById("flavour").value;
  const size = document.getElementById("size").value;
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Ensure price is a number
  const newItem = {
    name,
    price,
    image,
    flavour,
    size,
    quantity: 1,
  };

  cartItems.push(newItem);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert("Item added to cart!");
}
