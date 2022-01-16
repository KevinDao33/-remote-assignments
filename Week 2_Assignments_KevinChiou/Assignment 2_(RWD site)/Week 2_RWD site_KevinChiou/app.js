//when clicking "Welcome Message", change text to "Have a Good Time!"
let greeting = document.querySelector("h1.main-message");

greeting.addEventListener("click", () => {
    // greeting.innerText = `Have a Good Time!`;
    if(greeting.innerText == "Welcome Message"){
        greeting.innerText = `Have a Good Time!`;
    } else if(greeting.innerText == "Have a Good Time!"){
        greeting.innerText = `Welcome Message`;
    }
})


//show hidden menu when clicking burger
let burger = document.querySelector("img#burgerPic");

let burgerMenu = document.querySelector("ul.burger");
let burgerMenuLi = document.querySelectorAll("li.burger");
let burgerMenuLiA = document.querySelectorAll("a.burgerA");
let closeIcon = document.querySelector("div.burger img#closeIcon");

burger.addEventListener("click", () => {
    //set coese icon
    closeIcon.style.display = "block";
    closeIcon.style.zIndex = "2";
    closeIcon.style.width = "5vw";
    closeIcon.style.height = "5vw";
    closeIcon.style.top = "0px";
    closeIcon.style.left = "-80px";
    //set ul
    burgerMenu.style.display = "flex";
    burgerMenu.style.flexDirection = "column";
    burgerMenu.style.top = "10px";
    burgerMenu.style.left = "-30px";
    burgerMenu.style.position = "absolute";
    burgerMenu.style.backgroundColor = "#fff";
    burgerMenu.style.listStyle = "none";
    burgerMenu.style.paddingLeft = "0";
    burgerMenu.style.height = "100vh";
    burgerMenu.style.width = "40vw";
    burgerMenu.style.overflow = "hidden";
    burgerMenu.style.transition = "0.2s";
    burgerMenu.style.justifyContent = "flex-start";
    burgerMenu.style.alignContent = "flex-start";
    // //set li
    // burgerMenuLi.style.textAlign = "center";
    // burgerMenuLi.style.borderBottom = "1px solid #efefef";
    // burgerMenuLi.style.justifyContent = "flex-start";
    // //set a
    // burgerMenuLiA.style.padding = "0.5rem";
    // burgerMenuLiA.style.textDecoration = "none";
    // // burgerMenuLiA.style.display = "block";
    // burgerMenuLiA.style.lineHeight = "50px";
    // burgerMenuLiA.style.fontSize = "1.5rem";
    // burgerMenuLiA.style.color = "#5d5d5d";
    // burgerMenuLiA.style.justifyContent = "flex-start";
    // // burgerMenuLiA.style.AlignItem = "left";
    // burgerMenuLiA.style.alignContent = "flex-start";
})

//add close button function
closeIcon.addEventListener("click", () => {
    burgerMenu.style.display = "none";
    closeIcon.style.display = "none";
})


//show hidden context box agter clicking CTA-btb
let contextBox2 = document.querySelector("section#content-box-wrapper-hidden");

let CTAbtn = document.querySelector("button#CTA-button");

CTAbtn.addEventListener("click", () => {
    contextBox2.style.display = "flex";
})
