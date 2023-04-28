const storeItems = [
    { id: 1, name: "Item 1", price: 10.00 },
    { id: 2, name: "Item 2", price: 20.00 }
  ];
  
  let cartItems = [];
  
  // Get DOM elements
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const storeItemsElement = document.getElementById("store-items");
  
  // Update cart display and total
  function updateCart() {
    // Clear current cart items
    cartItemsElement.innerHTML = "";
  
    // Update cart item display
    cartItems.forEach(item => {
      const li = document.createElement("li");
      const nameSpan = document.createElement("span");
      const quantitySpan = document.createElement("span");
      const addButton = document.createElement("button");
      const subtractButton = document.createElement("button");
      const deleteButton = document.createElement("button");
  
      nameSpan.innerText = item.name;
      quantitySpan.innerText = `x${item.quantity}`;
      addButton.innerText = "+";
      subtractButton.innerText = "-";
      deleteButton.innerText = "Delete";
  
      addButton.addEventListener("click", () => {
        item.quantity++;
        updateCart();
      });
  
      subtractButton.addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity--;
          updateCart();
        }
      });
  
      deleteButton.addEventListener("click", () => {
        const index = cartItems.indexOf(item);
        cartItems.splice(index, 1);
        updateCart();
      });
  
      li.appendChild(nameSpan);
      li.appendChild(quantitySpan);
      li.appendChild(addButton);
      li.appendChild(subtractButton);
      li.appendChild(deleteButton);
      cartItemsElement.appendChild(li);
    });
  
    // Update cart total
    const cartTotal = cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
    cartTotalElement.innerText = cartTotal.toFixed(2);
  }
  
  // Add item to cart
  function addItemToCart(itemId) {
    const existingItem = cartItems.find(item => item.id === itemId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      const storeItem = storeItems.find(item => item.id === itemId);
      cartItems.push({
        id: storeItem.id,
        name: storeItem.name,
        price: storeItem.price,
        quantity: 1
      });
    }
    updateCart();
  }
  
  // Like item
  function likeItem(itemId)
   
  