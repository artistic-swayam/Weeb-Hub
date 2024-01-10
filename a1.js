const product={
    title:"Ball Pen",
    rating:4,
    offer:5,
    price:270
};
console.log(product);

const profile={
    username:"shradhakhapra",
    nickname:"Shradha Khapra",
    followers:569000,
    following:4,
    follow:false,
    post:195,
    bio:""
};
console.log(profile);

//Calculator
let no1 = prompt("Enter first number:");
let no2 = prompt("Enter second number");
let opt = prompt("Enter operator +,-,*,/:");
if (opt="+"){
    console.log(no1 + no2)
};