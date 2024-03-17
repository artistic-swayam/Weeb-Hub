let heading = document.querySelector("h2");
console.log(heading.innerText);

heading.innerText = heading.innerText + " by Swayam";

let divs = document.querySelectorAll(".box");
console.log(divs);
divs[0].innerText = "new value 1";
divs[1].innerText = "new value 2";
divs[2].innerText = "new value 3";

