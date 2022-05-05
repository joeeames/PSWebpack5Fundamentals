// const util = require("./util");
import util from "./util";
import "./css/main.css";

const cart = [];

function addToCart(item) {
  cart.push(item);
  util.log("added item: " + item);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  util.log("removed: " + idx);
}

addToCart("Waterproof Boots");
