"use strict";

//ASSIGNMENT 1
console.log("ASSIGNMENT 1");
function describeCountry(country, population, capitalCity) {
    return country + " has " + population + " people and it's capital city is " + capitalCity + ".";
}
console.log(describeCountry("Finland", "6 million", "Helsinki"));
console.log(describeCountry("Colombia", "50.34 million", "Bogota"));
console.log(describeCountry("United States", "328.2 million", "Washington, DC"));

//ASSIGNMENT 2
console.log("");
console.log("ASSIGNMENT 2");
let percentageOfWorld = function (population) {
    return Math.round((population / 7900000000) * 100);
}

let chinaPop = "China's total population is 1441 million people and its " + percentageOfWorld(1441000000) + "% of the worlds population.";
let usaPop = "USA's total population is 328 million people and its " + percentageOfWorld(328000000) + "% of the worlds population.";
let colombiaPop = "Colombia's total population is 50 million people and its " + percentageOfWorld(50000000) + "% of the worlds population.";

console.log(chinaPop);
console.log(usaPop);
console.log(colombiaPop);

//ASSIGNMENT 3
console.log("");
console.log("ASSIGNEMNT 3");
let worldPercentage = population => Math.round((population / 7900000000) * 100);

console.log("China is " + worldPercentage(1441000000) + "% of the worlds population");
console.log("USA is " + worldPercentage(328000000) + "% of the worlds population");
console.log("Colombia is " + worldPercentage(50000000) + "% of the worlds population");

//ASSIGNMENT 4
console.log("");
console.log("ASSIGNMENT 4");
function describePopulation(country, population) {
    return country + " has " + population + " million people, which is about " + percentageOfWorld(population) + "% of the world.";
}

console.log(describePopulation("China", 1441000000));
console.log(describePopulation("USA", 328000000));
console.log(describePopulation("Colombia", 50000000));

//ASSIGNEMNT 5
console.log("");
console.log("ASSIGNEMNT 5");
let populations = [1441000000, 328000000, 50000000, 6000000];
console.log(populations.length === 4 ? true : false);

//let percentages = new Array; //= [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]) ]
for (let i = 0; i < populations.length; i++) {
    let percentages = [percentageOfWorld(populations[i])];
    console.log(percentages + "%");
}

//ASSIGNMENT 6
console.log("");
console.log("ASSIGNMENT 6");
let neighbours = ["Ecuador", "Peru", "Venezuela", "Brazil"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
neighbours.includes("Germany") ? console.log("Germany is a neighbour!") : console.log("Germany is not a neighbour.");
let index = neighbours.indexOf("Brazil");
neighbours[index] = "Utopia";
console.log(neighbours);

//ASSIGNMENT 7
console.log("");
console.log("ASSIGNMENT 7");
let myCountry = {
    country: "Colombia",
    capital: "Bogota",
    language: "Spanish",
    population: 50000000,
    neighbours: ["Ecuador", "Peru", "Venezuela", "Brazil"]
};
console.log(myCountry);

//ASSIGNMENT 8
console.log("");
console.log("ASSIGNMENT 8");
let myCountryDescription = `${myCountry.country} has ${myCountry.population} million ${myCountry.country}n-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital city called ${myCountry.capital}.`
console.log(myCountryDescription);
myCountry.population += 2000000;
console.log(myCountry.population);
myCountry.population += Number([2000000]);
console.log(myCountry.population);

//ASSIGNMENT 9
console.log("");
console.log("ASSIGNMENT 9");
myCountry.describe = function () {
    return `${this.country} has ${this.population} million ${this.country}n-speaking people, ${this.neighbours.length} neighbouring countries and a capital city called ${this.capital}.`
}
console.log(myCountry.describe());
myCountry.checkIsIsland = function () {
    return myCountry.isIsland = this.neighbours.length === 0 ? true : false;
}
console.log(myCountry.checkIsIsland());
console.log(myCountry.isIsland);

//ASSIGNMENT 10
console.log("");
console.log("ASSIGNMENT 10");
for (let i = 1; i <= 5; i++) {
    console.log(`Voter number ${[i]} is voting.`);
}

//ASSIGNMENT 11
console.log("");
console.log("ASSIGNMENT 11");
// let colombiaPopulation = percentageOfWorld(50000000) + "%";
// let usaPopulation = percentageOfWorld(328000000) + "%";
// let chinaPopulation = percentageOfWorld(1441000000) + "%";
// let finlandPopulation = percentageOfWorld(6000000) + "%";

let totalPopulation = [50000000, 328000000, 1441000000, 6000000];
let popPercent = [];
for (let i = 0; i < totalPopulation.length; i++) {

    popPercent.push(percentageOfWorld(totalPopulation[i]) + "%");
    console.log(popPercent[i]);
}
console.log(popPercent);

//ASSIGNMENT 12
console.log("");
console.log("ASSIGNMENT 12");
let listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}

//ASSIGNMENT 13
console.log("");
console.log("ASSIGNMENT 13");
let newPopPercent = [];
let num = 0;
while (num < totalPopulation.length) {
    newPopPercent.push(percentageOfWorld(totalPopulation[num]) + "%");
    console.log(newPopPercent[num]);
    num++;
}