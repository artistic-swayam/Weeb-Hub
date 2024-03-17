let toggle_btn = document.getElementById("toggler");
let background = document.querySelector("body");
let current_bg = "white";

toggle_btn.addEventListener( "click",()=> {
    if(current_bg === "white"){
        current_bg = "black";
        background.style.backgroundColor = "black";
        console.log("user changed mode to",current_bg);
    }
    else{
        current_bg = "white";
        background.style.backgroundColor = "white";
        console.log("user changed mode to",current_bg);
    }
})