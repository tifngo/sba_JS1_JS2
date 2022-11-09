// You will use this .js file to write your four coding challenges

// "Coding Challenge #1: Basketball Score"

// Getting user inputs
let freeThrows = prompt("How many successful free throws were there?");
let midRange = prompt("How many successful mid-range throws were there?");
let threePointers = prompt("How many successful three pointers were there?");

// making the user input into a number
freeThrows = Number(freeThrows);
midRange = Number(midRange);
threePointers = Number(threePointers);

// The function will calculate and return the score of the basketball game when given the number of free throws, mid-range, and three pointers made.
// Free throws = 1, mid-range = 2, three pointers = 3
function totalBasketballScore(freeThrows, midRange, threePointers) {
    // calculating the total basketball score
    const score = ((freeThrows * 1) + (midRange * 2) + (threePointers * 3));
    // checking if all of the user inputs are a number. If one input is not a number, the score will be NaN. If the score is NaN, an error message will display.
    if (isNaN(score)) {
        console.log("Error! All entries must be a number.");
    } else {
        // return the total basketball score if all user inputs are a number
        return score;
    }
} 

// display the total basketball score to the console (even if it's undefined)
console.log("The total basketball score is " + totalBasketballScore(freeThrows, midRange, threePointers));

// "Coding Challenge #2: Computer Store"

// The function will check the price of a given item and return that price. If the item is not in the store, the user will be notified. If the item is not a string (word or character), then the user will be notified that all entries must be of type string
function itemPrice(item) {
    if(typeof item === "string") {
        switch(item) {
            case "computer":
                return "$500";
                break;
            case "mouse":
                return "$10";
                break;
            case "tablet":
                return "$250";
                break;
            case "case":
                return "$25";
                 break;
            case "router":
                return "$100";
                break;
            default:
                console.log("The item is not in the store.");
                break;
            }
    } else {
        console.log("All entries must be of type string.");
    }
}

// display the price of the item even (it will be undefined if the item is not in the store or if it's not a string)
console.log("The price of the item is " + itemPrice("router"));

// "Coding Challenge #3: What’s for dinner?"
const restaurants = ['Applebees', 'Panera Bread', 'Popeyes', 'Chopt', 'Chick-fil-A', 'Cheesecake Factory', 'Five Guys'];

// The function will add the specified amount of restaurant names passed in (numOfRestaurants) from the restaurants array to another array called randomRestaurantList. It is ok if a restaurant appears in your list more than once.
// For example, randomRestaurant(3) should return a randomRestaurantList array with the names of 3 random from the restaurants array.
function randomRestaurant(numOfRestaurants) {
    // creating an empty random restaurant list
    const randomRestaurantList = [];
    // adding a restaurant to the list based on the num of restaurants to add
    for(let added = 0; added < numOfRestaurants; added++) {
        // creating a random number to use to randomlly pick a restaurant from the restaurants list
        const ranNum = Math.floor(Math.random() * restaurants.length);
        // adding the random restaurant to the random restaurant list
        randomRestaurantList.push(restaurants[ranNum]);
    }
    return randomRestaurantList;
}

// display the random restaurant list
console.log(randomRestaurant(3));

// "Coding Challenge #4: Leap Year"

// Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial (years divisible by 100) years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.
// function that returns true if the year input is a leap year, and false if the year input is a common year. For example, when isLeapYear(2000) is called, it should return the value true. 
function isLeapYear(year) {
    // the year is a leap year if it's divisible by 4 AND NOT divisible by 100
    if(year % 4 === 0 && year % 100 !== 0) {
        return true;
    // the year is a leap year if it's divisible by 100 AND divisible by 400
    } else if(year % 100 === 0 && year % 400 === 0) {
        return true;
    // if both statements above are false, the year is a common year
    } else {
        return false;
    }
}

// display true if the year is a leap year and false if the year is a common year
console.log(isLeapYear(2024));

// Make sure to check that each of your challenge functions are working as expected by using console.log() statements and checking the output against what you would expect.