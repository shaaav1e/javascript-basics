// Write a program that takes a string as input and counts the number of vowels and consonants in the string. 


const readline = require('readline'); //for getting user input

const text = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const output = () => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  text.question("Enter the text: ", (userInput) => {
    let vcount = 0;
    let consonants = 0;

    for (let i = 0; i < userInput.length; i++) {
      if (vowels.includes(userInput[i])) {
        vcount++;
      } else if (userInput[i].match(/[a-zA-Z]/)) { // Only count letters as consonants
        consonants++;
      }
    }

    console.log(`Vowels: ${vcount}`);
    console.log(`Consonants: ${consonants}`);

    text.close(); // Close the readline interface
  });
};

// output();


//------------------USING ForEach------------------------------------
const genai = () => {
const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
const msg = "JavaAscripte";
let vcount=0;
let ccount=0;
const outputs = msg.split('');
outputs.forEach(i => //forEach is a method of arrays. It is used to execute the provided function for each element of the array.
{
  if(vowel.includes(i))
  {
    vcount++;
  }
  else
  {
    ccount++;
  }

  });
  console.log(`Vowels: ${vcount}`);
console.log(`Consonants: ${ccount}`);
}

genai();