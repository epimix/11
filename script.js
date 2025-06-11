//1
const stock = {
  apple: 10,
  banana: 0,
  orange: 5,
};

function checkStock(product) {
  return new Promise((resolve, reject) => {
    if (stock[product] > 0) {
      resolve(`${product} is in stock.`);
    } else {
      reject(`${product} is out of stock.`);
    }
  });
}

checkStock("apple")
  .then(msg => console.log(msg))
checkStock("banana")
  .then(msg => console.log(msg))
checkStock("orange")
  .then(msg => console.log(msg))
//2
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: 'max' });
      } else {
        reject("user not found");
      }
    }, 2000); 
  });
}

fetchUser(1)
  .then(user => console.log("user found:", user))
  .catch(error => console.log("error:", error));

fetchUser(2)
  .then(user => console.log("user found:", user))
  .catch(error => console.log("error:", error));

