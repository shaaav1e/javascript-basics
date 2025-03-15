// Useful when you want to modify each element in an array & return new array
// It doesnot modifies original array



// 1) Converting PKR TO USD - Values stored in array

const pkr=[100,500,100,500];
const pkrtousd= pkr.map(value=> value / 278.99);
// console.log(pkrtousd);



// 2) Doubling existing array and printing new double array

const arr=[2,4,6];
const double= arr.map((d)=> d*2); //Parantheses on one argument is optional
// console.log(double);

//^ Above code with FOREACH
const doublearr=[];
arr.forEach((d) => 
{
    let x=d*2;
    doublearr.push(x);
})
// console.log(doublearr);



// 3) Adding a new property to object

const student=[
    {name:'swz',marks:90},
    {name:'xyz',marks:49},
    {name:'mtk',marks:91}
];
const updatedinfo= student.map((s)=> ({
...s,
status: s.marks>50 ? 'A':'F'
}));
//extra parantheses tell JS that we are returning on object
// console.log(updatedinfo);


// 4)
const products = [
    { products: 'Laptop', category: 'Electronics', items: 1200, rating: 4 },
    { products: 'Phone', category: 'Electronics', items: 800, rating: 4.5 },
    { products: 'Shoes', category: 'Fashion', items: 100, rating: 4 },
    { products: 'Shirt', category: 'Fashion', items: 40, rating: 3.5},
    { products: 'Watch', category: 'Accessories', items: 150, rating: 3.7 }
  ];


//Create an array of products names
const names= products.map((p) => p.products);
// console.log(names);


//Return an array of objects with products name and their ratings

//Solution: 1
const namewithrating = products.map((p) => {
    return { name: p.products, rating: p.rating };  
});

//have to use return and its statement on same line else it will give issue
// console.log(namewithrating);

//Solution: 2

//using Parantheses so dont need to use return - used for returning objects

const namewithrating2 = products.map((p) => ({ name: p.products, rating: p.rating }));
// console.log(namewithrating2);



//Returning Array of Strings

const productDetails = products.map(p => `${p.products} has a rating of ${p.rating}`);
// console.log(productDetails);



//create an array of objects with the products and items of each company
const proditem=products.map((p) => (
{
     name:p.products, items:p.items>100 ? 'Available in large Quantity' : 'Order Fast, less stock' //used () to return instead of using return explicitly
}));
// console.log(proditem);


//Return an array of products which have more than 200 items
const itemss= products.map((p) => {
        if (p.items > 200)
        {
        // console.log(`Available items more than 200 are: ${p.products}`);
        }
});
// console.log(itemss);




//Using filter to filter out items and then using map to print new array
const availableItems = products.filter(p => p.items > 200) // Keep only products with more than 200 items
    .map(p => `Available items more than 200 are: ${p.products}`);

console.log(availableItems);
