// MENU BUTTON

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
        navbar.style.flexDirection = "column";
    }
});


// ADD TO CART

let cartCount = 0;

const cartCounter = document.querySelector(".cart-count");
const addCartButtons = document.querySelectorAll(".add-cart-btn");

addCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCounter.textContent = cartCount;

        alert("Product added to cart!");
    });
});


// NEWSLETTER EMAIL

const newsletterForm = document.querySelector(".newsletter form");

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = newsletterForm.querySelector("input").value;

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    alert("Thank you for subscribing!");

    newsletterForm.reset();
});


// CATEGORIES BUTTON

const categoryBtn = document.querySelector(".secondary-btn");

categoryBtn.addEventListener("click", (e) => {
    e.preventDefault();

    alert("Categories page coming soon!");
});