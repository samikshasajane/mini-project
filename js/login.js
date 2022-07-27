// function signup(){
//     document.getElementById("login-form").style.display = "none";
//     document.getElementById("signup-form").style.display = "block";
// }
document.addEventListener("DOMContentLoaded",()=>{
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");

    document.querySelector("#createform").addEventListener("click", e =>{
    e.preventDefault();
    loginForm.classList.add("hide-form");
    signupForm.classList.remove("hide-form");
    })

    document.querySelector("#login").addEventListener("click", e =>{
        e.preventDefault();
        signupForm.classList.add("hide-form");
        loginForm.classList.remove("hide-form");
        })
})
