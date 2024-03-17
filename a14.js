let newBtn = document.createElement("button");
newBtn.innerText = "click here";
console.log(newBtn);

let selectedDiv = document.querySelector("div");
selectedDiv.append(newBtn);
//append -to add at last
//prepend -to add at start
//before -to add before 
//after -to add after