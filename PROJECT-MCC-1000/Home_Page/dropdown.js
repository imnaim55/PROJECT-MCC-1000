document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");
    const cartIcon = document.getElementById("cart-icon");
    const headerCart = document.getElementById("lg-bag");

    menuIcon.addEventListener("click", function (event) {
        event.preventDefault();
        sideMenu.classList.add("active");

        if (headerCart) {
            headerCart.style.display = "none";
            if (!cartIcon.innerHTML.trim()) {
                cartIcon.innerHTML = headerCart.innerHTML;
            }
        }
    });

    closeMenu.addEventListener("click", function (event) {
        event.preventDefault();
        sideMenu.classList.remove("active");

        if (headerCart) {
            headerCart.style.display = "block";
            cartIcon.innerHTML = "";
        }
    });

    window.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            sideMenu.classList.remove("active");

            if (headerCart) {
                headerCart.style.display = "block";
                cartIcon.innerHTML = "";
            }
        }
    });
});
