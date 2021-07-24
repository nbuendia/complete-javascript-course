//CHALLENGE 1
console.log("");
console.log("CHALLENGE 1");
let calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return console.log("Dolphins win!" + ` (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        return console.log("Koalas win!" + ` (${avgKoalas} vs ${avgDolphins})`);
    } else {
        return console.log("Nobody wins.");
    }
}

let dolphinScore = calcAverage(44, 23, 71);
let koalaScore = calcAverage(65, 54, 49);

console.log(checkWinner(dolphinScore, koalaScore));
console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));
console.log(checkWinner(10, 20));

//CHALLENGE 2
console.log("");
console.log("CHALLENGE 2");
function calcTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * .15;
    } else {
        tip = bill * .2;
    }
    return tip;
}

let bills = [125, 555, 44];
let tips = new Array;
let totalBill = new Array;
let count = 0;

for (i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totalBill.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totalBill);

//CHALLENGE 3
console.log("");
console.log("CHALLENGE 3");
let markMiller = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.bmi = this.mass / this.height * 2;
    }
}
console.log("Mark's BMI: " + markMiller.calcBMI());

let johnSmith = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.bmi = this.mass / this.height * 2;
    }
}
console.log("John's BMI: " + johnSmith.calcBMI());

let higherBMI = johnSmith.bmi > markMiller.bmi ? `John's BMI (${johnSmith.bmi.toFixed(2)}) is higher than Mark's (${markMiller.bmi.toFixed(2)}).` : `Mark's BMI (${markMiller.bmi}) is higher than John's (${johnSmith.bmi})`;
console.log(higherBMI);

//CHALLENGE 4
console.log("");
console.log("CHALLENGE 4");
let recipt = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tip = [];
let total = [];

for (let i = 0; i < recipt.length; i++) {
    tip.push(calcTip(recipt[i]));
    total.push(recipt[i] + tip[i]);
}
console.log(total);

let sum = 0;
function calcBillAverage(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcBillAverage(total));
