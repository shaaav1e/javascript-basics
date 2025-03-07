//target : element that triggered the event

const icon = document.querySelector('.icon');
function target(e){
    console.log(e.target); //mostly target will be used
    console.log(e.currentTarget); //gives same output in this case
    e.target.style.backgroundColor='red';
   
}
icon.addEventListener('click', target);