function sayHello(name) {
  return `Hello, ${name}!`;
}

console.log(sayHello(`John`));

function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(calculateTotal(10, 5));

const add = (a, b) => {
  return a + b;
};

const multiply = (a, b) => a * b;

console.log(add(5, 3));
console.log(multiply(4, 2));

const getDataFromAPI = async (url) => {
  const result = await fetch();
  return result;
};
