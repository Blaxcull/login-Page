let signIn = document.createElement('button')
signIn.innerText = 'sign In'
document.body.appendChild(signIn)

signIn.onclick = ()=>{

window.location.href = 'signIn.html';
}

const getProtectedData = async () => {
const response = await fetch("http://localhost:3000/dashboard", {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  }
});
const data = await response.json();
console.log(data);

}
getProtectedData()



const logOut = document.createElement('button')

logOut.innerText = 'logOut'
document.body.appendChild(logOut)

logOut.onclick=()=>{
 localStorage.removeItem("token");
    window.location.href = "main.html";

}


