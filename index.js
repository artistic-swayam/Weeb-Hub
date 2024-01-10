 //It is a comment
console.log("Hello Swayam");

//Variables
let name1="swayam";
console.log(name);


//Constants
const interestRate=3;
console.log(interestRate);


//Primitive types
let name2="swayam";//String
let age=15;//Number
let approval=true;//Boolean
let home=undefined;//Undefined
let house=null;//Null


//Adding two numbers
let no1 = 5;
let no2 = 100;
console.log(no1*no2);


//Objects
let person={
    name:"swayam",
    age:15
};
console.log(person);

person.name="Abhi";//Dot Notation
person["name"]="Mary";//Bracket Notation
console.log(person.name);


//Arrays
let colors=["red","blue"];
colors[2]="green";//adding
console.log(colors);

//Functions
function greet(name){
    console.log("Hello how are you?",name);
}
greet("swayam");

function square(number){
    return number*number;
}
let number = square(2);
console.log(number);