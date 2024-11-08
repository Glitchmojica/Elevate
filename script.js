document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Thank you for your message!');
            form.reset();
        }
    });
});

// Quote rotation logic
document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        { text: "“Creativity is intelligence having fun.”", author: "- Albert Einstein" },
        { text: "“You can’t use up creativity. The more you use, the more you have.”", author: "- Maya Angelou" },
        { text: "“The creative adult is the child who survived.”", author: "- Ursula K. Le Guin" },
        { text: "“Creativity takes courage.”", author: "- Henri Matisse" },
        { text: "“Imagination is everything. It is the preview of life’s coming attractions.”", author: "- Albert Einstein" },
        { text: "“An essential aspect of creativity is not being afraid to fail.”", author: "- Edwin Land" }
    ];

    let currentQuoteIndex = 0;
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");

    function rotateQuotes() {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quoteText.textContent = quotes[currentQuoteIndex].text;
        quoteAuthor.textContent = quotes[currentQuoteIndex].author;
    }

    setInterval(rotateQuotes, 5000); // Change quote every 5 seconds
});

// Video preview on hover logic
document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll("iframe");

    videos.forEach((video) => {
        video.addEventListener("mouseenter", function() {
            // Preview by automatically playing for 5 seconds when hovered
            const videoSrc = video.src.split('&autoplay=1')[0]; // Avoid adding autoplay multiple times
            video.src = videoSrc + "&autoplay=1";
            
            setTimeout(() => {
                video.src = videoSrc; // Stop the preview after 5 seconds
            }, 5000);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const checkoutPage = document.getElementById("checkout-page");
    const referrer = document.referrer;

    if (referrer.includes("music.html")) {
        checkoutPage.style.backgroundImage = "url('../images/background/music.jpg')";
    } else if (referrer.includes("art.html")) {
        checkoutPage.style.backgroundImage = "url('../images/background/art.jpg')";
    } else if (referrer.includes("clothing.html")) {
        checkoutPage.style.backgroundImage = "url('../images/background/clothing.jpg')";
    }
});

const cart = [];

// Add items to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));
        
        cart.push({ name, price });
        alert(`${name} added to cart.`);
    });
});

// Display cart summary on checkout page
if (window.location.pathname.includes("checkout.html")) {
    const cartSummary = document.getElementById("cart-summary");

    if (cart.length === 0) {
        cartSummary.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        let total = 0;
        cartSummary.innerHTML = cart.map(item => {
            total += item.price;
            return `<p>${item.name}: $${item.price.toFixed(2)}</p>`;
        }).join('');
        cartSummary.innerHTML += `<hr><p>Total: $${total.toFixed(2)}</p>`;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const checkoutPage = document.getElementById("checkout-page");
    const referrer = document.referrer;

    // Set dynamic background based on referring page
    if (referrer.includes("music.html")) {
        checkoutPage.style.backgroundImage = "url('../images/background/music.jpg')";
    } else if (referrer.includes("art.html")) {
        checkoutPage.style.backgroundImage = "url('../images/background/art.jpg')";
    } else if (referrer.includes("clothing.html")) {
        checkoutPage.style.backgroundImage = "url('../images/background/clothing.jpg')";
    }

    // Initialize cart as an empty array
    const cart = [];

    // Add items to cart (simulate adding from product pages)
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const name = product.getAttribute('data-name');
            const price = parseFloat(product.getAttribute('data-price'));
            
            cart.push({ name, price });
            alert(`${name} added to cart.`);
        });
    });

    // Display cart summary on checkout page
    const cartSummary = document.getElementById("cart-summary");

    if (cart.length === 0) {
        cartSummary.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        let total = 0;
        cartSummary.innerHTML = cart.map(item => {
            total += item.price;
            return `<p>${item.name}: $${item.price.toFixed(2)}</p>`;
        }).join('');
        cartSummary.innerHTML += `<hr><p>Total: $${total.toFixed(2)}</p>`;
    }

    // Form validation for checkout
    const form = document.querySelector('.payment-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('card-name').value;
        const number = document.getElementById('card-number').value;
        const expiry = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        if (!name || !number || !expiry || !cvv) {
            alert('Please fill in all fields.');
        } else {
            alert('Thank you for your purchase!');
            form.reset();
        }
    });
});
