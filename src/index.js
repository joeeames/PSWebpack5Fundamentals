const cart = [];

function log(message) {
  console.log(message);
}

function addToCart(item) {
  cart.push(item);
  log("added new item: " + item);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  log("removed: ", idx);
}

addToCart("Waterproof Boots");
