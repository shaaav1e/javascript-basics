//Spread Operator: Useful for copying/merging objects

//1)

const arr1=[2,3,4];
const arr2=[5,6,7];
const arr3=[...arr1,...arr2];
// console.log(arr3);

//2) What if i only want to add 2 elements from arr1 (2,3)

//Logic: Use Slice -> array.slice(start, end)
//Slice Basics: Start: Included, End : Not included

const arr4=[...arr1.slice(0,2),...arr2.slice(1,2)];
// console.log(arr4);


//3) Updating User Profile - Real time scenario

const user={
    name:"Swz",
    domain:"FrontEndDev"
};
const updateduser={
    ...user,
    age: 24
};
const latestinfo={...user,...updateduser};

// console.log(updateduser); //Same Output as latestinfo.
// console.log(latestinfo);

//____________________________________________________________


//REST OPERATOR: Allows a function to add multiple arguments

//1)

const addnumbers=(...num)=>
{
   let sum=0;
   for(let n of num)
   {
    sum+= n;
   }
   return sum;
};
console.log(addnumbers(2,6));

//num here passed all arguments to function and stored them in an array.

//2) 
const greet =(greetings,...name)=>
{
    for(let n of name)
    {
        console.log(`${greetings} ${n}`);
    }
};
greet("Wassup","Swz","MTK","KB");

//3) Real Scenario - Adding items to cart

const cart=(cart,...items)=>
{
    return [...cart,...items]; //Spread Operator
}
let cart1=["Dell-G15","MousePad-SteelSeries"];
cart1=cart(cart1,"Lenovo","Rival600");
let cart2=["Oil","Chocolates"];
cart2=cart(cart2,"Milk","Bread");
console.log(cart1);
console.log(cart2);
