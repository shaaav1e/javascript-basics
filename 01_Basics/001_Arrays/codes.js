// Q1: Create an array fruits containing "apple", "banana", and "cherry". 
// Add "orange" to the end of the array and log the updated array.
// Solution:
const fruits= ['apple','banana','cherry','orange'];
console.log(fruits);
fruits.push('Kiwi');
// console.log(fruits);

// ___________________________________________________________________________________________________________________________________________


//Objects Inside an Array
const arr5=[
    {
        name:"Swz",
        age:24
    },
    {
        name:"mtk",
        age:22
    }
]
console.log(arr5[0].name);

const obj4={
    name:"KB",
    age:21
};
arr5.push(obj4);
// console.log(arr5);


// ___________________________________________________________________________________________________________________________________________
//Arrays in Functions
function fullname(firstname,lastname)
{
    return [firstname,lastname];
}
const namee=fullname("Gloria","Jeans");
console.log(namee);



// ___________________________________________________________________________________________________________________________________________
//Functions Inside Array
const funcinarray= [
    function greet()
    {
        console.log("Functions inside Array");
    },
    addition=(a,b)=>
    {
     return a+b;
    }
];
//LOGIC FOR NOT USING CONST IN ARROW FUNCTION INSIDE ARRAY:

//functions inside arrays are treated as expressions 
//assigned directly to array elements, 
//not as variables needing declaration.