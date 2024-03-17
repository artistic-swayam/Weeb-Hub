//Event listners
let btn = document.querySelector("button");
 btn.addEventListener("click", () =>{
    console.log("button was clicked - handler1");
 });

 btn.addEventListener("click", () =>{
    console.log("button was clicked - handler2");
 });

 btn.addEventListener("click", () =>{
    console.log("button was clicked - handler3");
 });

 btn.addEventListener("click", () =>{
    console.log("button was clicked - handler4");
 });

 btn.removeEventListener("click", handler3);