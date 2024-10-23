    //  about nav-bar 

let button = document.querySelector("#menu-btn");

let menuList = document.querySelector(".list");

let cross = document.querySelector(".cross")

function my_btn(params) {

    button.addEventListener("click" , (click) => {
       
        menuList.style.display = "flex"
    })

    cross.addEventListener("click" , (click) => {
       
        menuList.style.display = "none"
    })
}

// about form 

const Icon = document.querySelector(".icon");

let form = document.querySelector(".parant-form");


const cross_icon = document.querySelector(".cross-icon");

function welcome (){
    Icon.addEventListener("click", () => {
        form.style.display = "block";
        
    })

    cross_icon.addEventListener("click", () => {
        form.style.display = "none";
    })
}


//  button codes 

const login = document.querySelector(".login");
// console.log(login)
const register = document.querySelector(".register");
// console.log(register)

const login_form = document.querySelector(".login-form");

const registration_form = document.querySelector(".registration-form");

const cross_icon2 = document.querySelector(".cross-icon2")


function weldone() {
    
    register.addEventListener("click", () =>{
        registration_form.style.display = "block";
        login_form.style.display = "none"
    })
    
    login.addEventListener("click", () =>{
        registration_form.style.display = "none";
        login_form.style.display = "block"
    })

    cross_icon2.addEventListener("click", () => {
        registration_form.style.display = "none";
    })
}

