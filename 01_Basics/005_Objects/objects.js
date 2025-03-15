//Q1 : Create an object person with properties name as "John", age as 30, and city as "New York". 
// Add a method greet that logs "Hello, my name is John".

// Solution:
const person = {
    name:'shawaiz',
    age:24,
    profession:'Front-end Developer',
    greet(name,age,profession) {
    // console.log(`Hi ${name}, is your age ${age}. We would like to hire you as ${this.profession}`);
    }
};
// person.greet('swz','24','WebDev');


//Q2 : Create a function mergeObjects that takes two objects and returns a new object that combines their properties. 
// If both objects have the same property, the value from the second object should be used.

// Solution:

 const obj1={name:'swz',age:24};
 const obj3={profession:'WebDev',experience:'Freshie'};
 const mergeObjects=(obj1,obj3)=> ({...obj1,...obj3});
//  console.log(mergeObjects(obj1,obj3));


//Q3: Array inside on object

const obj5={
    name:"swz",
    age:24,
    Domains:["FrontEnd","React","Angular"]
}
console.log(obj5.Domains);