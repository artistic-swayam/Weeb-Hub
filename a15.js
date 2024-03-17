let btn = document.querySelector("#bt");

btn.onclick = () => {  //syntax for Events
    console.log("button was clicked");
    alert("button was clicked");
}

let div = document.querySelector("#div");

div.onmouseover = () => {
    console.log("you are inside div");
    alert("you are inside div");
}