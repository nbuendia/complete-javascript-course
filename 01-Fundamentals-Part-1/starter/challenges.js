//Coding Challenge 1
console.log("");
console.log("CODING CHALLEGNE 1");
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markHigherBMI;

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);
markHigherBMI = markBMI > johnBMI;

console.log("Mark: " + markBMI);
console.log("John: " + johnBMI);
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

console.log("");
markMass = 95;
markHeight = 1.88;
markBMI = markMass / (markHeight ** 2);

johnMass = 85;
johnHeight = 1.76;
johnBMI = johnMass / (johnHeight ** 2);

markHigherBMI = markBMI > johnBMI;

console.log("Mark: " + markBMI);
console.log("John: " + johnBMI);
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

//CODING CHALLENEGE 2
console.log("");
console.log("CODING CHALLEGNE 2");
if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's.");
    console.log(`Mark's BMI, which is, ${markBMI} is higher than John's, which is, ${johnBMI}.`);
}
else {
    console.log("John's BMI is higher than Mark's.");
    console.log(`John's BMI, which is, ${johnBMI} is higher than Mark's, which is, ${markBMI}.`);
}

//CODING CHALLENGE 3
console.log("");
console.log("CODING CHALLEGNE 3");
let dolphinScoreOne = 97;
let dolphinScoreTwo = 112;
let dolphinScoreThree = 101;

let koalaScoreOne = 109;
let koalaScoreTwo = 95;
let koalaScoreThree = 106;

let dolphinAverage = (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
let koalaAverage = (koalaScoreOne + koalaScoreTwo + koalaScoreThree) / 3;

console.log("DOLPHINS: " + dolphinAverage);
console.log("KOALAS: " + koalaAverage);

if (dolphinAverage < koalaAverage) {
    console.log("KOALAS WIN!");
} else if (dolphinAverage > koalaAverage) {
    console.log("DOLPHINS WIN!");
} if (dolphinAverage === koalaAverage) {
    console.log("IT'S A DRAW!");
}

//CODING CHALLENGE 4
console.log("");
console.log("CODING CHALLEGNE 4");

let bill = 40;
let tip;

switch (bill) {
    case 275:
    case 40:
    case 430:
        tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
        break;
}

let total = bill + tip;
console.log("The bill was $" + bill + " the tip is $" + tip + " the total value is $" + total + ".");
