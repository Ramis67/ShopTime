import { headphones } from "./data.js";

let myCart = []
const cartCountContainer = document.querySelector(".header__cartCountContainer")
const cartCount = document.querySelector(".header__cartCount")

document.addEventListener("click", (event) => {
    
    console.log(event.target.classList.contains("item__buy"))
    if(event.target.classList.contains("item__buy")){
        cartCountContainer.style.display = 'flex'
        cartCount.innerHTML = `${addItem(event)}`
    }
})

const addItem = (event) => {
    let element = headphones.find(item => {
            return item.id === event.target.dataset.id
    })
    myCart.push(element)
    localStorage.setItem("caIt", JSON.stringify(myCart))
    console.log(myCart)
    return myCart.length
}

