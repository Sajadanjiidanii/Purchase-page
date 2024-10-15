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

/// sign in chacke ///

const loginSignup = $.querySelector("#login-signup");
const logIn = $.querySelector("#login");
const signUp = $.querySelector("#signup");

function exitAccount(){
    userAccount.style.display = "none";
    exitAccountBtn.style.display = "none";
    logIn.style.display = "inline";
    signUp.style.display = "inline";
    localStorage.setItem("ShowName","No");
}

function signChack(){
    let isName = localStorage.getItem("Name");
    let userName = JSON.parse(localStorage.getItem("Name"));
    let showName = localStorage.getItem("ShowName");

    if( isName ){
        if( showName == "Yes"){
            logIn.style.display = "none";
            signUp.style.display = "none";
            loginSignup.insertAdjacentHTML("afterbegin","<span id=\"userAccount\">" + userName + "</span><span id=\"exitAccountBtn\"> / خروج </span>");
            const userAccount = $.querySelector("userAccount");
            const exitAccountBtn = $.querySelector("#exitAccountBtn");
            exitAccountBtn.addEventListener("click",exitAccount);
        }
    }
};

window.addEventListener("load", showItem);
window.addEventListener("load", signChack);
