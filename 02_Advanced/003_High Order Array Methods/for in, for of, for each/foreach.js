// FOREACH - WORKS ONLY ON ARRAYS
// Iterates over elements (not keys) and cannot be used on objects.
// Cannot be stopped using break or return.

const numbers=[1,2,3,4,5];
numbers.forEach((val) =>{
    if(val % 2 ==0)
    {
        // console.log(`Even numbers in array are: ${val} `);
    }
})


const languages=[
    {
        langname: 'Javascript'
    },
    {
        langname: 'Python'
    }
];
languages.forEach((i) => 
{
    console.log(i.langname);
})