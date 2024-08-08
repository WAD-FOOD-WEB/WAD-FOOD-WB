function toggleDropdown() {
    document.getElementById("mydpdmenu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dpdbtn')) {
        var dropdowns = document.getElementsByClassName("dpd-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



function addToCart(element) {
    const productElement = element.parentElement;
    const id = productElement.getAttribute('data-id');
    const name = productElement.getAttribute('data-name');
    const price = parseFloat(productElement.getAttribute('data-price'));

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if item already exists in the cart
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

function goToCart() {
    window.location.href = 'cart.html';
}
