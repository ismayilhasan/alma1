let inputUsername = document.getElementById("inputUsername")
let labelUsername = document.getElementById("usernameLabel")
let passwordInput = document.getElementById("passwordInput")

let box = document.querySelector('.box')
console.log(box);


let inputUsername2 = document.querySelector("#passwordInput")

let inputs = document.querySelectorAll(".input")
console.log(typeof(1));

console.log(5 === "5");

function HoverLabel()
{
   labelUsername.style.top = '47px';
   labelUsername.style.left = '175px'

}

function ResetLabel()
{
   labelUsername.style.top = '72px';
   labelUsername.style.left = '187px'
}

function ShowPassword()
{
   passwordInput.type = "text"
}

function HidePassword()
{
   passwordInput.type = 'password'
}



function addClass()
{
   box.classList.remove("hide-box")

   
}

function removeClass()
{
   
   box.classList.add("hide-box")
}



// const addClass = () => {
   
// }



const list = document.getElementById('list');

 const array = []

 fetch('https://jsonplaceholder.typicode.com/comments/')
 .then(response => response.json())
 .then(json => {list.innerHTML = json.email})
  







