import { log } from './util';

const cart = [];

function addToCart(item) {
    cart.push(item);
    log("added: " + item);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    log("removed item from index: " + index);
}

addToCart("Air Filter");
removeFromCart(0);