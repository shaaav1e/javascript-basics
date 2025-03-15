//Why use Filter?
//Use Case: When you need to create a new array with elements that meet a specific condition.
//It does not modify the original array.
//It returns a new array with elements that satisfy the given condition.
//Example Scenarios:
//Getting all even numbers from an array.
//Filtering active users from a list.
//Finding products that are in stock.

const products = [
    { products: 'Laptop', category: 'Electronics', items: 1200, rating: 4 },
    { products: 'Phone', category: 'Electronics', items: 800, rating: 4.5 },
    { products: 'Shoes', category: 'Fashion', items: 100, rating: 4 },
    { products: 'Shirt', category: 'Fashion', items: 40, rating: 3.5},
    { products: 'Watch', category: 'Accessories', items: 150, rating: 3.7 }
  ];

// 1) Find products that have items more than 100

const filtereditems= products.filter((product) =>
product.items > 100
);
// console.log(filtereditems);

// 2) Find products that are of category electronics

const elect= products.filter((e) =>
  e.category === 'Electronics'
)
// console.log(elect);

//Array.filter()

const numbers=[1,2,3,4,5,6]
const evennum= numbers.filter(num => num % 2 === 0);
// Filter Method in JS already expects a function that returns true or false
// console.log(evennum);

const words= ['async','await','promise','callback'];
const len= words.filter((word)=> word.length > 5);
// const len= words.filter((word)=>
// word.length > 5);

//Parantheses around single parameter are optional in arrow function
// If no paramter or multiple paramteres then Parantheses are required
console.log(len);


