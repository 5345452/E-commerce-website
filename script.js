console.log("JavaScript Loaded");

/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {

        if (navbar.style.display === "flex") {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "flex";
            navbar.style.flexDirection = "column";
        }

    });
}

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

/* =========================
   SEARCH
========================= */

const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("#searchInput");

if (searchBtn && searchBox) {

    searchBtn.addEventListener("click", () => {

        searchBox.classList.toggle("active");

        if (searchInput) {
            searchInput.focus();
        }

    });

}

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        document.querySelectorAll(".product-card").forEach(product => {

            const name = product.querySelector("h3").textContent.toLowerCase();

            if (name.includes(value)) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });

    });

}

/* =========================
   CART
========================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

const cartSidebar = document.querySelector(".cart-sidebar");
const cartBtn = document.querySelector(".cart-btn");
const closeCart = document.querySelector(".close-cart");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector("#cart-total");
const cartCount = document.querySelector(".cart-count");

if (cartBtn) {

    cartBtn.addEventListener("click", () => {
        cartSidebar.classList.add("active");
    });

}

if (closeCart) {

    closeCart.addEventListener("click", () => {
        cartSidebar.classList.remove("active");
    });

}

document.querySelectorAll(".add-cart-btn").forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        cart.push({
    name,
    price
});

total += price;

saveCart();   

cartCount.textContent = cart.length;

renderCart();
        alert(name + " added to cart!");

    });

});
function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}
function renderCart() {

    cartItems.innerHTML = "";

    cart.forEach(item => {

        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${item.name}</p>
                <p>KES ${item.price}</p>
            </div>
        `;

    });

    total = cart.reduce((sum, item) => sum + item.price, 0);
cartTotal.textContent = total;
saveCart();

}

/* =========================
   WISHLIST
========================= */

let wishlist = [];

const wishlistBtn = document.querySelector(".wishlist-btn");
const wishlistSidebar = document.querySelector(".wishlist-sidebar");
const wishlistItems = document.querySelector(".wishlist-items");
const wishlistCount = document.querySelector(".wishlist-count");
const closeWishlist = document.querySelector(".close-wishlist");

if (wishlistBtn) {

    wishlistBtn.addEventListener("click", () => {
        wishlistSidebar.classList.add("active");
    });

}

if (closeWishlist) {

    closeWishlist.addEventListener("click", () => {
        wishlistSidebar.classList.remove("active");
    });

}

document.querySelectorAll(".product-heart").forEach(heart => {

    heart.addEventListener("click", () => {

        const productCard = heart.closest(".product-card");

        const productName =
            productCard.querySelector("h3").textContent;

        wishlist.push(productName);

        wishlistCount.textContent = wishlist.length;

        heart.innerHTML =
            '<i class="fas fa-heart"></i>';

        renderWishlist();

    });

});

function renderWishlist() {

    wishlistItems.innerHTML = "";

    wishlist.forEach(item => {

        wishlistItems.innerHTML += `
            <div class="wishlist-item">
                <i class="fas fa-heart"></i>
                ${item}
            </div>
        `;

    });

}

/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
    document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const email =
            newsletterForm.querySelector("input").value;

        if (email === "") {

            alert("Please enter your email.");
            return;

        }

        alert("Thank you for subscribing!");

        newsletterForm.reset();

    });

}

/* =========================
   CHECKOUT
========================= */

const checkoutBtn = document.querySelector(".checkout-btn");
const checkoutModal = document.querySelector(".checkout-modal");
const checkoutForm = document.querySelector("#checkout-form");

if(checkoutBtn){

    checkoutBtn.addEventListener("click", () => {

        if(cart.length === 0){
            alert("Your cart is empty.");
            return;
        }

        checkoutModal.classList.add("active");

    });

}

if(checkoutForm){

    checkoutForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Order received! We will contact you shortly.");

        checkoutForm.reset();

        checkoutModal.classList.remove("active");

        cart = [];
        total = 0;

        cartCount.textContent = "0";

        renderCart();

    });

}
window.addEventListener("load", () => {
    renderCart();
    cartCount.textContent = cart.length;
});