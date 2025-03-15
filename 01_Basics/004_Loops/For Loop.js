const array=[2,5,10,8,1];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
//     console.log(element);
}

//___________________________________________________________


const arr2=[3,6,11,9,1];
for(let i = 0; i < array.length; i++)
{
for(let j=0; j<arr2.length; j++)
{
    if(array[i] === arr2[j])
    {
        console.log(array[i],`is present in both arrays.`);
    }
}
}


//___________________________________________

for(let i = 1; i < 10; i++)
{
    
    console.log(`2 * ${i} = ${2*i}`);
}