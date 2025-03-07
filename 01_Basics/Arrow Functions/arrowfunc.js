// 1) Add two numbers
const add= (a,b) => a+b;  //no need to use return or {} if only one line of code.
console.log(add(2,2));

// 2) Multiply two numbers
const multiply=(a,b) =>
{  //since more than one line of code so return used with {}
    let result=a*b;
    return result;
}
console.log(multiply(2,1));

// 3) Greetings Function
const greet= name => `Hi ${name}`; //String Interpolation
//if only one parameter then dont need to use ()
console.log(greet('swz'));