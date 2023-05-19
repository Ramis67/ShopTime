let itemsInCart = JSON.parse(localStorage.getItem("caIt"))

console.log(itemsInCart)

itemsInCart.map(item => {
    item.count = 1
})



function containerThird(){
    if(itemsInCart.length > 0){
        return itemsInCart.map(item => {
            console.log(item.img)
            return(
                `
                <div class="product">
                    <img class="product__del" src="img/cart/cart.svg" alt="логотип корзины">
                    <div class="product__blockOne">
                        <img class="product__img" src=${item.img} alt=${item.title}>
                        <div class="product__info">
                            <p class="product__title">${item.title}</p>
                            <p class="product__price">${item.price} ₽</p>
                        </div>
                    </div>
                    <div class="product__blockTwo">
                        <div class="product__quantity">
                            <img class="product__minus" data-id=${item.id} src="img/cart/-.svg" alt="знак минус">
                            <p class="product__count" data-id=${item.id}>${item.count}</p>
                            <img class="product__plus" data-id=${item.id} src="img/cart/+.svg" alt="знак плюс">
                        </div>
                        <p class="product__priceSum">${item.price} ₽</p>
                    </div>
                </div>
                `
            )
        }).join("")
    }else{
        return null
    }
    
}

let blockThree = document.querySelector(".containerThird");
blockThree.innerHTML = containerThird();

const productCount = document.querySelector(".product__count")
const sum = document.querySelector(".buy__resultSum");

document.addEventListener("click", (event) => {
    console.log(event.target.dataset.id)
    console.log(event.target.classList.contains("product__plus"))

    productCount.innerHTML = `${countItem(event)}`
})

const countItem = (event) =>{
    if(event.target.classList.contains("product__plus")){
        itemsInCart.map(item => {
            if(item.id === event.target.dataset.id){
                console.log(item)
                return {...item, count: item.count++}
            }else{
                return item
            }
        })
        return item.count
    }
    
}