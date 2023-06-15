function addToCart(itemName, itemImage, itemPrice) {
    var cartItem = document.createElement('div');
    cartItem.className = 'cart-items';

    var closeButton = document.createElement('span');
    closeButton.className = 'fas fa-times';
    closeButton.addEventListener('click', function() {
      cartItem.remove();
    });
    cartItem.appendChild(closeButton);

    var image = document.createElement('img');
    image.src = itemImage;
    cartItem.appendChild(image);

    var content = document.createElement('div');
    content.className = 'content';

    var itemNameElement = document.createElement('h3');
    itemNameElement.textContent = itemName;
    content.appendChild(itemNameElement);

    var itemPriceElement = document.createElement('div');
    itemPriceElement.className = 'price';
    itemPriceElement.textContent = itemPrice;
    content.appendChild(itemPriceElement);

    cartItem.appendChild(content);

    
    var cartContainer = document.querySelector('.cart-items-container');
    cartContainer.appendChild(cartItem);
  }

  document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.querySelector('.checkout_btn');
    const addtocartBtn = document.querySelector('.addtocartbtn');
        
    // change ang Add to Cart to Added to Cart
    addtocartBtn.addEventListener('click', function() {
        addtocartBtn.textContent = 'Added to Cart!';
        setTimeout(function() {
        addtocartBtn.textContent = 'Add to Cart';
        }, 2000);
    })

    checkoutBtn.addEventListener('click', function() {
      // change ang button pag ma click "Checked Out"
      checkoutBtn.textContent = 'Checked Out';
      setTimeout(function() {
        checkoutBtn.textContent = 'Check Out';
      }, 1000);
  
      // get the cart container
      const cartContainer = document.querySelector('.cart-items-container');
  
      // get all the cart items
      const cartItems = cartContainer.querySelectorAll('.cart-items');
  
      
      const animationDuration = 500; // milliseconds
      const delayBetweenItems = 100; // milliseconds
  
      // animation function
      function removeCartItem(item, index) {
        setTimeout(function() {
          item.style.transition = `opacity ${animationDuration}ms ease`;
          item.style.opacity = 0; // fade effect
          item.addEventListener('transitionend', function() {
            item.remove(); // mawala ang mga items
          });
        }, index * delayBetweenItems);
      }
  
      // animation
      cartItems.forEach(function(item, index) {
        removeCartItem(item, index);
      });
    });
  });
  
  
  