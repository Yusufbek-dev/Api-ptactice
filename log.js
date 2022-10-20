let form =document.querySelector("form");
let firstName =document.querySelector("#name");
let secondName =document.querySelector("#surname");
let phone =document.querySelector("#phone");
let checkUser = confirm("Do you have an account?")
console.log(checkUser);
if(checkUser) {
  if(JSON.parse(localStorage.getItem("userData"))) {
    if(JSON.parse(localStorage.getItem("userData")).id) {
      window.location.href="product.html";
    }
  }else {
    alert("Your account does not exist. Please register first")
  }
}

form.addEventListener("submit", (e)=> {
  e.preventDefault()
  let userId = Math.floor(Math.random()*10000) > 1000 ? Math.floor(Math.random()*10000):Math.floor(Math.random()*10000)*10;
  let data = {
    fName:  firstName.value,
    lName:  secondName.value,
    number: phone.value,
    id: userId
  }
  console.log(data);
  localStorage.setItem("userData", JSON.stringify(data));
  window.location.href="product.html";
})

// let a =JSON.parse(localStorage.getItem("userData"));
// console.log(a.id);

document.querySelector("button").addEventListener("click", ()=> {
  localStorage.clear()
})