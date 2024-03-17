let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let opt = document.querySelector("#opt");
let button = document.querySelector("button");
let ans = document.querySelector("#sol");

let no1 = prompt("Enter first number :")
let no2 = prompt("Enter second number :")
let no3 = prompt("Enter operator +,-,*,/ :")
let sol;

function fill(){
    num1.placeholder += no1;
    num2.placeholder += no2;
    opt.placeholder += no3;
}
function calculate(sol){
    if(no3 === "+"){
        let sol = no1 + no2;
        console.log(sol);
    }
    if(no3 === "-"){
        let sol = no1 - no2;
        console.log(sol);
    }
    if(no3 === "*"){
        let sol = no1 * no2;
        console.log(sol);
    }
    if(no3 === "/"){
        let sol = no1 / no2;
        console.log(sol);
    }
}
function give(){
    button.addEventListener("click", () => {
        ans.placeholder += sol;
    })
}

fill();
calculate();
give();