// Assignment#9-10

// Q1 city

var city = prompt("Enter your city");

if(city == "karachi"){
   document.write("Welcome to city of light")
}

// Q2 input from user gender male or female messages

//var message = prompt("Please type your gender");

//if(message == "male"){
    //document.write("Good Morning Sir.")
//}
//else if (message == "female"){
   // document.write("Good Morning Ma'am..")
//}

// Q3 Road Traffic signal 

// var message =prompt("Traffic Signal Color,Red,Yellow,Green")

// if(message === "red"){
//     document.write("Must Stop")
// }
// else if(message === "yellow"){
//     document.write("Ready to move")
// }
// else if(message === "green"){
//     document.write("Move now")
// }

// Q4 Car fuel less than 0.25 letters and show the message

// var remaining = prompt("how many litres fuel in your car")

// if (remaining <= 0.25) {
//     document.write("Please refill the fuel in your car")
// }

// Q5

//(a)

// var a = 4;
// if(++a === 5){
//     alert("given condition for variable a is true");

// }

//(b)

// var b = 82;
// if(b++ === 83){
//     alert("given condition for variable b is true");
// }

//(c)

// var c = 12;
//  if(c++ === 13){
//      alert("condition 1 is true")  
//  } else {
//      alert("condition is false")
//  }
// if (c === 13){
//     alert("condition 2 is true");
// }

// if (++c < 14){
//     alert("condition 3 is true")
// } else alert("codition 3 is false")
// if (c === 14){
//     alert("condition 4 is true")
// }

//(d)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals: "+totalCost);
// }

//(e)
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

//(f)

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// Q6

// var totalMarks1 = +prompt("what are the total marks of each subject")*3;
// var subject1 =prompt("enter subject one");
// var subject1Marks = +prompt("enter how many marks you obtained in "+subject1);

// var subject2 = prompt("enter subject two");
// var subject2Marks = +prompt("enter how many marks you obtained in "+subject2);

// var subject3 = prompt("enter subject three");
// var subject3Marks = +prompt("enter how many marks you obtained in "+subject3);

// var percentage = ((subject1Marks + subject2Marks)* 100) / totalMarks1;

// var totalObtained = subject1Marks + subject2Marks + subject3Marks
// var grade = "";

// if (percentage >= 80){
//     grade = "A-One"+" "+"Excellebt";
// }
// else if (percentage >= 70){
//     grade = "A"+" "+"Very Good";
// }
// else if (percentage >= 60){
//     grade = "B"+" "+"You need improvement";
// }
// else {
//     grade = "fail"+" "+"sorry";
// }
// document.write("<b>"+" "+"Total Marks "+totalMarks1+"</b><br><br>");
// document.write("<b>"+" "+"Marks Obtained "+totalObtained+"</b><br><br>");
// document.write("<b>"+" "+"Percentage "+percentage+"%"+"</b><br><br>");
// document.write("<b>"+" "+"Grade "+grade+"</b><br><br>");

//Q7 guess game:

// var secretNumber = 6;
// var guessNumber = +prompt("Guess The Secret Number.(Range: 0 to 10)");

// if (guessNumber === 6){
//     alert("Bingoo! Correct Answer")
// }
// else if(guessNumber === 7){
//     alert("Close Enough to The Correct Answer")
// }
// else {
//     alert("Sorry You Are Out")
// }

//Q-8

// var num = +prompt("Enter a number which should me divisble with 3 and answere must be without decimal (Range: 0 to 20)");

// if(num === 6 || num === 9 || num === 12 || num === 15 || num === 18){
//     alert("yeah"+" "+num+" "+"Correct Answer.");
// }
// else {
//     alert(num + " " + "Wrong Answer.")
// }

//Q-9

// var num = +prompt("Enter the Even number or Odd number.(Range 0 to 10)");

// if (num === 2 ||num === 4 || num === 6 || num === 8 || num === 10){
//     alert(num + " " + "Is Even Number")
// }
// else{
//     alert(num + " " + "Is Odd Number")
// }

//Q-10

// var temperature = +prompt("What is temperature of your city");
// if (temperature >= 40){
//     alert("It is too hot outside")
// }
// else if(temperature >= 30){
//     alert("The Weather today is Normal")
// }
// else if(temperature >= 20){
//     alert("Today Weather is so Cool")
// }
// else if(temperature >= 10){
//     alert("OMG! Today Weather is so Cool")
// }

//Q-11

// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number")
// var operator = prompt("Select one operator + - x / ")

// if (operator === "+"){
//     alert("Result is " + num1 + num2)
// }
// else if(operator === "-"){
//     alert("Result is " + num1 - num2)
// }
// else if(operator === "*"){
//     alert("Result is " + num1 * num2)
// }
// else if(operator === "/"){
//     alert("Result is " + num1 / num2)
// }
// else if(operator === "%"){
//     alert("Result is " + num1 % num2)
// }