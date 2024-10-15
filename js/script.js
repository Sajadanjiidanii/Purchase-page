const $ = document;
const main = $.querySelector("main");
let CartBox = [];

function showItem(){
    let item = JSON.parse(localStorage.getItem("productInfo"));
    main.insertAdjacentHTML("beforeend" , "<div id=\"main-Container\"><div id=\"img-Container\"><img src="+ item.img +"></div><div id=\"information-Container\"><h3>گروه محصول : <span class=\"green\">" + item.category + "</span></h3><h3>نام محصول : <span class=\"green\">" + item.name + "</span></h3><h3>قیمت محصول : <span class=\"green\">" + item.pricy + "</span></h3><button onclick=\" addToCart() \" id=\"buyBox\">اضافه کردن به سبد خرید</button></div></div>");
}

function addToCart(){
    CartBox.push(JSON.parse(localStorage.getItem("CartBox")));
    let test = JSON.parse(localStorage.getItem("productInfo"));
    CartBox.push(test);
    localStorage.setItem("CartBox" , JSON.stringify(CartBox));
    location.href = "https://sajadanjiidanii.github.io/ColorShop/";
}

window.addEventListener("load",showItem);
