// const util = require("./util");
import util from "./util";
import "./css/main.scss";

const cart = [];

function addToCart(item) {
  cart.push(item);
  util.log("added items: " + item);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  util.log("removed: " + idx);
}

addToCart("Waterproof Boots");
