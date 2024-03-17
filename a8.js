//Arrays
let foodItems = ["potato","apple","Banana"];

let added = foodItems.push("Litchi","Guava");//To add
console.log("added",added);

let deleted = foodItems.pop();//To delete
console.log("deleted",deleted);

console.log(foodItems.toString);//To log as a string
console.log(foodItems);

let vehicles = ["car","bike"];
let food_vehicles = vehicles.concat(foodItems);//To add two arrays
console.log(food_vehicles);
console.log(food_vehicles.slice(0,2));//To cut a piece
console.log(food_vehicles.splice(0,1,"Icecream"));//To add, remove,replace