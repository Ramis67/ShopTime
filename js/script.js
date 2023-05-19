import { headphones } from "./data.js";

    function container() {
        return headphones.map(item => {
            if(item.id === "one"){
                return(
                    `
                    <div class="item">
                        <img class="item__img" src=${item.img} alt=${item.title}>
                        <div class="item__blockOne">
                            <p class="item__name">${item.title}</p>
                            <div class="item__blockPrice">
                                <p class="item__price">${item.price} ₽</p>
                                <p class="item__discount">3527 ₽</p>
                            </div>
                        </div>
                        <div class="item__blockTwo">
                            <div class="item__rateDescription">
                                <img class="item__star" src="img/star.svg" alt="рейтинг">
                                <p class="item__rate">${item.rate}</p>
                            </div>
                            <p class="item__buy" data-id="${item.id}">Купить</p>
                        </div>
                    </div>
                    `
                    )}else if(item.id === "two"){
                        return(
                        `<div class="item item-offsetDown">
                            <img class="item__img" src=${item.img} alt=${item.title}>
                            <div class="item__blockOne item__blockOne-offsetDown">
                                <p class="item__name">${item.title}</p>
                                <div class="item__blockPrice">
                                    <p class="item__price">${item.price} ₽</p>
                                </div>
                            </div>
                            <div class="item__blockTwo">
                                <div class="item__rateDescription">
                                    <img class="item__star" src="img/star.svg" alt="рейтинг">
                                    <p class="item__rate">${item.rate}</p>
                                </div>
                                <p class="item__buy" data-id=${item.id}>Купить</p>
                            </div>
                        </div>`
                    )}else if(item.id === "three"){
                        return(
                        `<div class="item item-offsetDown">
                        <img class="item__img item__img-offset" src=${item.img} alt=${item.title}>
                        <div class="item__blockOne item__blockOne-offsetDown">
                            <p class="item__name">${item.title}</p>
                            <div class="item__blockPrice">
                                <p class="item__price">${item.price} ₽</p>
                            </div>
                        </div>
                        <div class="item__blockTwo">
                            <div class="item__rateDescription">
                                <img class="item__star" src="img/star.svg" alt="рейтинг">
                                <p class="item__rate">${item.rate}</p>
                            </div>
                            <p class="item__buy" data-id=${item.id}>Купить</p>
                        </div>
                    </div>`
                    )}else if(item.id === "four"){
                        return(
                        `<div class="item item-offsetDown">
                            <img class="item__img" src=${item.img} alt=${item.title}>
                            <div class="item__blockOne item__blockOne-offsetDown">
                                <p class="item__name">${item.title}</p>
                                <div class="item__blockPrice">
                                    <p class="item__price">${item.price} ₽</p>
                                </div>
                            </div>
                            <div class="item__blockTwo">
                                <div class="item__rateDescription">
                                    <img class="item__star" src="img/star.svg" alt="рейтинг">
                                    <p class="item__rate">${item.rate}</p>
                                </div>
                                <p class="item__buy" data-id=${item.id}>Купить</p>
                            </div>
                        </div>`
                        )}else if(item.id === "five"){
                            return(
                            `<div class="item item-offsetDown">
                                <img class="item__img" src=${item.img} alt=${item.title}>
                                <div class="item__blockOne item__blockOne-offsetDown">
                                    <p class="item__name">${item.title}</p>
                                    <div class="item__blockPrice">
                                        <p class="item__price">${item.price} ₽</p>
                                    </div>
                                </div>
                                <div class="item__blockTwo">
                                    <div class="item__rateDescription">
                                        <img class="item__star" src="img/star.svg" alt="рейтинг">
                                        <p class="item__rate">${item.rate}</p>
                                    </div>
                                    <p class="item__buy" data-id=${item.id}>Купить</p>
                                </div>
                            </div>`
                        )}else if(item.id === "six"){
                            return(
                            `<div class="item item-offsetDown">
                            <img class="item__img item__img-offset" src=${item.img} alt=${item.title}>
                            <div class="item__blockOne item__blockOne-offsetDown">
                                <p class="item__name">${item.title}</p>
                                <div class="item__blockPrice">
                                    <p class="item__price">${item.price} ₽</p>
                                </div>
                            </div>
                            <div class="item__blockTwo">
                                <div class="item__rateDescription">
                                    <img class="item__star" src="img/star.svg" alt="рейтинг">
                                    <p class="item__rate">${item.rate}</p>
                                </div>
                                <p class="item__buy" data-id=${item.id}>Купить</p>
                            </div>
                        </div>`
                        )}
                        else{
                        return null
                }}).join("")
        }

    function containerSecond(){
        return headphones.map(item => {
            if(item.id === "seven"){
                return (
                    `<div class="item">
                        <img class="item__img" src=${item.img} alt=${item.title}>
                        <div class="item__blockOne item__blockOne-offsetDown">
                            <p class="item__name">${item.title}</p>
                            <div class="item__blockPrice">
                                <p class="item__price">${item.price} ₽</p>
                            </div>
                        </div>
                        <div class="item__blockTwo">
                            <div class="item__rateDescription">
                            <img class="item__star" src="img/star.svg" alt="рейтинг">
                                <p class="item__rate">${item.rate}</p>
                            </div>
                            <p class="item__buy" data-id=${item.id}>Купить</p>
                        </div>
                    </div>`
            )}else if(item.id === "eight"){
            return(
                `<div class="item">
                    <img class="item__img" src=${item.img} alt=${item.title}>
                    <div class="item__blockOne item__blockOne-offsetDown">
                        <p class="item__name">GERLAX GH-04</p>
                        <div class="item__blockPrice">
                            <p class="item__price">${item.price} ₽</p>
                        </div>
                    </div>
                    <div class="item__blockTwo">
                        <div class="item__rateDescription">
                            <img class="item__star" src="img/star.svg" alt="рейтинг">
                            <p class="item__rate">${item.rate}</p>
                        </div>
                        <p class="item__buy" data-id=${item.id}>Купить</p>
                    </div>
                </div>`
            )}
            else if(item.id === "nine"){
            return(
                `<div class="item">
                <img class="item__img item__img-size" src=${item.img} alt=${item.title}>
                <div class="item__blockOne item__blockOne-offsetUp">
                    <p class="item__name">${item.title}</p>
                    <div class="item__blockPrice">
                        <p class="item__price">${item.price} ₽</p>
                    </div>
                </div>
                <div class="item__blockTwo">
                    <div class="item__rateDescription">
                        <img class="item__star" src="img/star.svg" alt="рейтинг">
                        <p class="item__rate">${item.rate}</p>
                    </div>
                    <p class="item__buy" data-id=${item.id}>Купить</p>
                </div>
            </div>`
            )}else{
                return null
            }}).join("")
    }

let blockone = document.querySelector(".container");
blockone.innerHTML = container();

let blocktwo = document.querySelector(".containerSecond");
blocktwo.innerHTML = containerSecond();