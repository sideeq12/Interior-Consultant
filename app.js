const Hamburger = document.querySelector(".Hamburger");
const Menu  = document.querySelector(".menu")

Hamburger.addEventListener("click", ()=>{
    Menu.classList.toggle("active")
    console.log("clicked")
})