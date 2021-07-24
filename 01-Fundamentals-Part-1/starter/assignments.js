//Assignment 1
console.log("ASSIGNMENT 1");
let country = "United States";
let continent = "North America";
let poputation = 328000000;

console.log("In the " + country + " located in " + continent + " there are approximately "
    + poputation + " million people living there.");

//Assigntmnt 2
let isIsland = false;
let language;

console.log("");
console.log("ASSIGNMENT 2");
console.log("Is " + country + " an island? " + isIsland);
console.log("In the " + country + " most people speak " + language + ".");

//Assignment 3
language = "English";
console.log("");
console.log("ASSIGNMENT 3");
console.log("In the " + country + " most people speak " + language + ".");

//Assignment 4
let halfPopulation = poputation / 2;

console.log("");
console.log("ASSIGNMENT 4");
console.log("In half of the " + country + ", " + halfPopulation + " million people live here.");

poputation++;
console.log(country + "' population + 1: " + poputation);

let findlandPopulation = 6000000;
console.log("Does the " + country + " have a larger population than Findland?",
    + poputation > findlandPopulation);

let averagePopulation = 33000000;
console.log("Does the " + country + " have less people than the average country? ",
    + averagePopulation < poputation);

let description = "Portugal is in Europe, and it's 11 million people speak Portuguese."

//Assignment 5
let descriptionCountry = "Portugal";
let descriptionContinent = "Europe";
let descriptionPopulation = 11000000;
let descriptionLanguage = "Portuguese";

let descriptionLiteral = `${descriptionCountry} is in ${descriptionContinent}, and it's ${descriptionPopulation} million people speak ${descriptionLanguage}.`;

console.log("");
console.log("ASSIGNMENT 5");
console.log(description);
console.log(descriptionLiteral);

//Assignemnt 6
console.log("");
console.log("ASSIGNMENT 6");
if (poputation > averagePopulation) {
    console.log(country + " population is above average.");
}
else {
    console.log(country + " population is " + (poputation - averagePopulation) + " million below average.");
}

//Assignment 7
console.log("");
console.log("ASSIGNMENT 7");
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); //FALSE
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

//Assignment 8
console.log("");
console.log("ASSIGNMENT 8");
/*IF === IS USED IN IF/ELSE THEN THE NUMBER CONVERSION MUST BE USED, IF == IS USED INSTEAD 
THEN NUMBER CONVERSTION DOESNT HAVE TO BE USED AS ITS NOT A STRICT OPERATOR*/
let numNeighbours;
//numNeighbours = prompt("How many neighbour counties does your country have?");
//numNeighbours = Number(prompt("How many neighbour counties does your country have?"));
if (numNeighbours == 1) {
    console.log("Only one border!");
} else if (numNeighbours > 1) {
    console.log("More than one!");
} else {
    console.log("No borders!")
}

//Assignment 9
console.log("");
console.log("ASSIGNMENT 9");

let canadaLang = "English";
let canadaIsland = false;
let canadaPop = 37000000;

console.log("USA LANGUAGE: " + language); //English
console.log("IS USA AN ISLAND?: " + isIsland); //False
console.log("USA POPULATION: " + poputation); // 328,000,001
console.log("");
console.log("CANADA LANGUAGE: " + canadaLang); //English
console.log("IS CANADA AN ISLAND?: " + canadaIsland); //False
console.log("CANADA POPULATION: " + canadaPop); // 37,000,000
console.log("");
if (language === "English" && poputation < 50000000 && isIsland === false) {
    console.log("You should live in The " + country + ".");
} else if (canadaLang === "English" && canadaPop < 50000000 && canadaIsland === false) {
    console.log("You should live in Canada!");
} else {
    console.log("Theres no country that meets your prefernces...");
}

//Assignment 10
console.log("");
console.log("ASSIGNMENT 10");

let spokenLanguage = "english";
switch (spokenLanguage) {
    case "chinese":
    case "mandarin":
        console.log("MOST spoken language!");
        break;
    case "spanish":
        console.log("Second most spoken language.");
        break;
    case "english":
        console.log("Third most spoken language.");
        break;
    case "hindi":
        console.log("Fourth most spoken language.");
        break;
    case "arabic":
        console.log("Fifth most spoken language.");
        break;
    default:
        console.log(spokenLanguage + " is not in the top 5, but is still a great language.");
        break;
}

//Assignment 11
console.log("");
console.log("ASSIGNMENT 11");

let popAvg = poputation > 40000000 ? "above" : "below";
console.log("The United States' population is " + popAvg + " average.");

popAvg = canadaPop > 40000000 ? "above" : "below";
console.log("Canada's population is " + popAvg + " average.");