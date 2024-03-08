console.log("Hello world");

// alert("Hello World!");

let firstVariable = "This is a string";
console.log(firstVariable);
// alert(firstVariable);

console.log(firstVariable + "!");

let exPoint = "!";

console.log(firstVariable + exPoint);

let myFirstInt = 1;
console.log(myFirstInt);
console.log(myFirstInt + 5);
console.log(myFirstInt * 100);
console.log(myFirstInt + exPoint);

let mySecondInt = 760;
console.log(mySecondInt % 2);
console.log(mySecondInt % 11);

console.log("Division:")
console.log(mySecondInt / 11);

console.log("Increment:")

console.log(++mySecondInt);

console.log("Decrement:");
console.log(--mySecondInt);

console.log(-100 % 8);

//This is uncommon
let myBool = true;


let hasRemainder = 100 % 7 > 0
console.log(hasRemainder);

// alert(hasRemainder);


if(50 % 5 == 0){
   
    console.log("5 is a multiple of 50");
}
else{
    console.log("5 is not a multiple of 50");
}

let divisor = 59;
let mutliplemsg = "mutliple of " + mySecondInt;

if (mySecondInt % divisor == 0) {
    console.log(divisor + " is a " + mutliplemsg);
}
else{
    console.log(divisor + " is NOT a " + mutliplemsg);
}