const productList = document.getElementById('product-list');
const cart = document.getElementById('cart');

const products = [
    { id: 1, name: 'Screen 1', price: 199.99 },
    // ... more products
];

// Function to display products
function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add to cart (using local storage)
function addToCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(productId); // Just store product IDs for now
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems.length === 0) {
        cart.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }
    // In a real app, you'd fetch product details based on IDs
    cart.innerHTML = "<p>Items in cart: " + cartItems.length + "</p>"; // Simplified
}

displayProducts(); // Initial display of products
updateCartDisplay(); // Initial display of cart