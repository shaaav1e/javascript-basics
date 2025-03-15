// MODERN & RECOMMENDED WAY TO ADD EVENT LISTENER ↓
const btn=document.getElementById('btn');
// btn.addEventListener('click',()=> alert("Event occured!"));

//using function for event listener
function onclick()
{
    alert("Event occured!");
    console.log("Check browser console to see this output!");
}
btn.addEventListener('click',onclick); // <- dont write onclick() otherwise function will execute automatically

//Timeout -> Removing Event listener
// setTimeout(()=> btn.removeEventListener('click',onclick),5000); // <- event wont occur again after 3 seconds


//Event occuring after 5 sec from JS without user clicking
setTimeout(() => btn.click(),5000);