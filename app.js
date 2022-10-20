let API = "https://fakestoreapi.com/products";
let ul = document.querySelector("ul");
let moreBtn =document.querySelector(".more-btn");
let lessBtn =document.querySelector(".less-btn");
moreBtn.addEventListener("click", ()=> {
  lessBtn.classList.add("active");
  moreBtn.classList.add("inactive");
  ul.classList.add("active");
})
lessBtn.addEventListener("click", ()=> {
  moreBtn.classList.remove("inactive");
  lessBtn.classList.remove("active");
  ul.classList.remove("active");
})
fetch(API)
 .then((data) => {
  return data.json();
 })
 .then((jsonDate)=> {
  jsonDate.forEach(e => {
    // console.log(e);
    ul.innerHTML +=`
    <li>
    <img src="${e.image}" alt="">
    <p class="category">${e.category}</p>
    <p class="title">&${e.title}</p>
    
    <p class="dsc">${e.description}</p>
    <div><p class="price">${e.price}$</p><p class="sale"> -${(e.price * 0.1).toFixed(2) }$</p></div>
    </li>
` 
  });
 })



 /////------ error-------- ${((e.price * 0.1).toFixed(2))[0]==0  ? (e.price * 0.1).toFixed(0):(e.price * 0.1).toFixed(2) }