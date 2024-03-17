//Logical Operators
let a = 6;
let b = 8;
let cond1 = a > b;//true
let cond2 = a < b;//false
console.log("cond1 && cond2",cond1 && cond2);

//Conditional Operators
let age = 20;
if (age > 18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligble to vote");
}

//Ternary Operators
let age1 = 16;
let detail = age1 >= 18 ? "adult":"not adult";
console.log(detail);

