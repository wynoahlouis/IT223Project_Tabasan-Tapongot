//DI MUGANA
function addToCart(item) {
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var title = document.createElement('div');
    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    cartItems.append(selectedItem);

}