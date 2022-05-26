import util from "./util";
import "./css/main.scss";

const cart = [];

function addToCart(item) {
  cart.push(item);
  util.log("added item: " + item);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  util.log("removed: " + idx);
}

function getUsers() {
  fetch("/api/users")
    .then((res) => res.json())
    .then((users) => console.log("Our second user is " + users[1].name));
}

getUsers();

addToCart("Waterproof Boots");
