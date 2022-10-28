let getButtons = (e) => e.preventDefault()
let switchCtn = document.querySelector("#switchern");
let switchC1 = document.querySelector("#flober1");
let switchC2 = document.querySelector("#flober2");
let switchCircle = document.querySelectorAll(".scir");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#fcontainer");
let bContainer = document.querySelector("#scontainer");
let allButtons = document.querySelectorAll(".submit");



let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);

 
