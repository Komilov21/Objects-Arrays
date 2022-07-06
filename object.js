/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
console.log("-----------------Exercise 1-----------------")
let firstArray=[1,2,3,4,5,];
console.log(firstArray)

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
console.log("-----------------Exercise 2-----------------")
let myObject={
    name:"Khayrulla",
    surname:"Komilov",
    email:"xayrullakomilov2@gmail.com",
    age:18
}
console.log(myObject);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
console.log("-----------------Exercise 3-----------------")
myObject.hasDrivingLicense = false;
console.log(myObject);
let myLicence = myObject.hasDrivingLicense;
if (myLicence === true){
    console.log("I have a driving license!")
}else{
    console.log("I dont have driving license")
}
/* EXERCISE 4
 Remove from the previously created object the age property.
*/

console.log("-----------------Exercise 4-----------------")
delete myObject.age;
console.log(myObject);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
console.log("-----------------Exercise 5-----------------")

let myObject2={
    name: "David",
    surname:"Dobrik",
    email:"david1232@gmail.com"
}
console.log(myObject2);
console.log(JSON.stringify(myObject.email) === JSON.stringify(myObject2.email))
/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
/*console.log("-----------------Exercise 6-----------------")

let arrayofSpent = [
    {id:"1253636",product:"Laptop",price:25},
    {id:"1253636",product:"Webcam",price:20},
    {id:"1253636",product:"Wireless Mouse",price:15},
];

let totalShoppingCart=0;

for (let index = 0; index < arrayofSpent.length; index++);{
let spent = arrayofSpent[index];
console.log("Spent"+(index+1),spent.price);
totalShoppingCart+=spent.price;
}
console.log("Total",totalShoppingCart);

let shippingcost=10;

if (totalShoppingCart>50){
    console.log("Shipping cost is Free");
}else{
    console.log("Shipping cost is ",shippingcost)
}
*/



/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
console.log("-----------------Exercise 8-----------------")

let objectCar={
    brand:"Toyota",
    model:"Corolla",
    licensePlate:"EB90308",
}
console.log(objectCar);

let objectCar1 = {};
Object.assign(objectCar1.licensePlate, objectCar.licensePlate);
objectCar1.licensePlate="TF87345"

console.log(objectCar1);
console.log(objectCar);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
