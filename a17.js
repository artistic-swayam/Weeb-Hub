//event toggler
let mode_btn = document.querySelector("#mode");
let curr_mode = "Light";
let body = document.querySelector("body");

mode_btn.addEventListener("click", () => {
    console.log("user is trying to change mode");
    if (curr_mode === "Light"){
        curr_mode = "Dark";
        body.classList.add("dark");
        body.classList.remove("white");
    }
    else{
        curr_mode = "Light";
        body.classList.add("white");
        body.classList.remove("dark");
    }
    console.log(curr_mode);
});