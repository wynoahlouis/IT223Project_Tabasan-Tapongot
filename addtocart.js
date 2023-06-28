function addToCart(itemName, itemImage, itemPrice) {
  var cartContainer = document.querySelector('.cart-items-container');
  var cartItems = cartContainer.querySelectorAll('.cart-items');

  // Check if the item is already in the cart
  for (var i = 0; i < cartItems.length; i++) {
    var existingItemNameElement = cartItems[i].querySelector('.item-name');
    if (existingItemNameElement.textContent === itemName) {
      // Item already exists in the cart, update its quantity
      var quantityElement = cartItems[i].querySelector('.item-quantity');
      var quantity = parseInt(quantityElement.textContent.split(':')[1].trim());
      quantityElement.textContent = 'Quantity: ' + (quantity + 1);

      updateCartTotal();
      return; // Exit the function since the item is already in the cart
    }
  }

  // Item is not in the cart, create a new cart item
  var cartItem = document.createElement('div');
  cartItem.className = 'cart-items';

  var closeButton = document.createElement('span');
  closeButton.className = 'fas fa-times';
  closeButton.addEventListener('click', function() {
    cartItem.remove();
    updateCartTotal();
  });
  cartItem.appendChild(closeButton);

  var image = document.createElement('img');
  image.src = itemImage;
  cartItem.appendChild(image);

  var content = document.createElement('div');
  content.className = 'content';

  var itemNameElement = document.createElement('h3');
  itemNameElement.className = 'item-name';
  itemNameElement.textContent = itemName;
  content.appendChild(itemNameElement);

  var itemPriceElement = document.createElement('div');
  itemPriceElement.className = 'price';
  itemPriceElement.textContent = itemPrice;
  content.appendChild(itemPriceElement);

  var itemQuantityElement = document.createElement('div');
  itemQuantityElement.className = 'item-quantity';
  itemQuantityElement.textContent = 'Quantity: 1';
  content.appendChild(itemQuantityElement);

  cartItem.appendChild(content);

  cartContainer.appendChild(cartItem);

  updateCartTotal();
}

function updateCartTotal() {
  var cartItems = document.querySelectorAll('.cart-items');
  var total = 0;

  cartItems.forEach(function(item) {
    var itemPriceElement = item.querySelector('.price');
    var itemQuantityElement = item.querySelector('.item-quantity');
    var itemPrice = parseFloat(itemPriceElement.textContent.replace('₱', ''));
    var quantity = parseInt(itemQuantityElement.textContent.split(':')[1].trim());

    total += itemPrice * quantity;
  });

  var cartTotalElement = document.querySelector('.cart-total');
  if (!isNaN(total)) {
    cartTotalElement.textContent = 'Total: ₱' + total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    cartTotalElement.textContent = 'Total: ₱0.00';
  }
}

// --------Grouped Items Counter
document.addEventListener('DOMContentLoaded', function() {
  const checkoutBtn = document.querySelector('.checkout_btn');
  const cartCounter = document.querySelector('.cart-counter');
  let cartItemsCount = 0;

  function updateCartCounter(count) {
    cartCounter.textContent = count;
  }

  checkoutBtn.addEventListener('click', function() {
    // Change the button text to "Checked Out"
    checkoutBtn.textContent = 'Checked Out';
    setTimeout(function() {
      checkoutBtn.textContent = 'Check Out';
    }, 1000);

    // Get the cart container
    const cartContainer = document.querySelector('.cart-items-container');

    // Get all the cart items
    const cartItems = cartContainer.querySelectorAll('.cart-items');

    const animationDuration = 500; // milliseconds
    const delayBetweenItems = 100; // milliseconds

    // Animation function
    function removeCartItem(item, index) {
      setTimeout(function() {
        item.style.transition = `opacity ${animationDuration}ms ease`;
        item.style.opacity = 0; // fade effect
        item.addEventListener('transitionend', function() {
          item.remove(); // Remove the item from the DOM after animation
        });
      }, index * delayBetweenItems);
    }

    // Animation
    cartItems.forEach(function(item, index) {
      removeCartItem(item, index);
    });

    // Show the confirmation message
    var confirmation = confirm("We're delighted that you've chosen Serenitea! Your order is now being processed. We hope you enjoy your experience with us, and we look forward to serving you again in the future. Thank you! ❤");
    if (confirmation) {
      // User clicked "OK" in the confirmation dialog
      // Reset the cart total to 0
      var cartTotalElement = document.querySelector('.cart-total');
      cartTotalElement.textContent = 'Total: ₱0.00';

      // Reset the cart items count and update the counter
      cartItemsCount = 0;
      updateCartCounter(cartItemsCount);
    } else {
      // User clicked "Cancel" in the confirmation dialog
      // Do nothing or perform any desired action
    }
  });

  // Add event listener for adding items to the cart
  const addToCartBtns = document.querySelectorAll('.addtocartbtn');
  addToCartBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Increment the cartItemsCount variable
      cartItemsCount++;
      updateCartCounter(cartItemsCount);
    });
  });
});



//Functionality of Add to Cart Button on Menu Page (Change from 'Add to Cart' to 'Added to Cart' when clicked)
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.addtocartbtn');
  
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const buttonText = button.textContent;
      
      // Change the button text to "Added to Cart"
      button.textContent = 'Added to Cart';
      
      // Reset the button text after 2 seconds
      setTimeout(function() {
        button.textContent = buttonText;
      }, 2000);
    });
  });
});