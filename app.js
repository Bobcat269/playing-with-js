
//Keeping the rust off of our javascript by doing some problems.

//Problem 1
// Write a function named planetHasWater.

// It will have one parameter: planet.

// Print true to the console if the planet argument is either 'Earth' or 'Mars'; otherwise, log false.

// function prompt() {
//     console.log('===========================================');
//     console.log('Enter a planet to see if it contains water!');
//     console.log('==========================================='); 
    
// }

// prompt()

function planetHasWater(planet) {
    // return console.log(`${planet}`);
    
    if (planet === 'Earth') {
        return true
    } else if (planet === 'Mars') {
        return true
    } else {
        return false
    }
}

console.log(planetHasWater('Earth'));
console.log(planetHasWater('Mars'));
console.log(planetHasWater('Jupiter'));
console.log(planetHasWater('Pluto'));

//Is there a cleaner way to do this?


function planetHasWater2(planet) {
    return planet ==='Earth' || planet === 'Mars'
}
console.log(planetHasWater2('Earth'));
console.log(planetHasWater2('Mars'));
console.log(planetHasWater2('Jupiter'));
console.log(planetHasWater2('Pluto'));

//Since the comparator is a binary boolean we can just return the result instead of specifying return true.
//We can also us the OR || operator since we are listing all positive matches.

//Reminder that we use === in JS for strict equality whereas == would convert types?
//What would that look like....?

function isThisATwo (x) {
    return x == 2
}
console.log('Is this a two?');

console.log(isThisATwo(2));
console.log(isThisATwo('2'));

//Versus....
function aintThisATwo (x) {
    return x === 2
}
console.log('Aint this a two?');
console.log(aintThisATwo(2));
console.log(aintThisATwo('2'));

// Problem 2
// Write a function named computeArea.

// It will have two parameters: width and height.

// It will compute the area of a rectangle (width * height) and return a string in the following form:

// The area of a rectangle with a width of __ and a height of __ is ___ square units.


function computeArea(width, height) {
    console.log(`The area of a rectangle with a width of ${width} and a height of ${height} is ${width*height} square units.`);
}

computeArea(5,25)

//Problem 3
// As arrow functions with implicit returns create a basic multiply and divide function.

const multiply = (x,y) => x*y
const divide = (x,y) => x/y

console.log(multiply(2,2));
console.log(divide(2,2));



//Make a stoplight to demonstrate else if branching

function stoplight(color) {
    if (color === 'Green') {
        console.log('Time to go.');
    } else if (color === 'Yellow') {
        console.log('Time to slow.');
    } else if (color === 'Red') {
        console.log('It`s time to stop.  Where are your parents?');
    } else {
        console.log('Invalid color input.');   
    }
    
}

stoplight('Green')
console.log(stoplight('Green'));
console.log(stoplight('Yellow'));
console.log(stoplight('Red'));

//if we try to log the function here we also get the line "undefined"
//This is likely because the log is being done in the function rather than returned?
//not that it's necessary, but would this change if our branch statement was returning instead of logging?
function stoplight2(color) {
    if (color === 'Green') {
        return 'Time to go.';
    } else if (color === 'Yellow') {
        return 'Time to slow.';
    } else if (color === 'Red') {
       return'It`s time to stop.  Where are your parents?';
    } else {
       return 'Invalid color input.';   
    }
    
}

//I feel like this is gonna mess up?  Fixed by changing return console.log('blah blah') to return 'blah blah'
console.log(stoplight2('Green'));
console.log(stoplight2('Yellow'));
console.log(stoplight2('Red'));

//Summary: function will return undefined unless an implicit return is provided.


//Task: Write a for loop that iterates from 1 - 20 and logs out the square of each number.

for ( i=1; i <21; i++) {
    console.log(`The square of ${i} is ${i*i}.`);
    
}

//Write a ternary that tells if a number is > 3

let z = 3
z > 3 ? console.log('z is greater than 3'): console.log('z is not greater than 3');

//write a switch statement that returns seasons
let seasonCheck = 'autumn'
switch (seasonCheck) {
    case 'summer':
      console.log("It's summer!");
      break;
      //by not breaking below case 'autumn' we allow either of the cases that match to trigger the result: "It's fall now!"
    case 'autumn':
    case 'fall':
      console.log("It's fall now!");
      break;
    case 'winter':
      console.log('Brrr!');
      break;
    case 'spring':
      console.log("It's spring!");
      break;
    default:
      console.log('Invalid season');
  }


  //Basic while loop

  let number = 1;

while (number <= 10) {
  console.log(number);
  number++;
}

//do while
let i = 120;

do {
  console.log(`${i} is even`);
  i += 20;
} while (i <= 10);

//runs once, checks while, ceases running

// || or operator returns the first truthy value while && and operator returns first falsy
// in essence 1 || 0 || 2 returns 1
// whereas 1 && 0 && 2 returns 0

//if function getUsername() below returns an actual username i.e. the active user is logged in it will return their username.  
//If the user is not logged in it will return 'Guest'
const username = getUsername() || 'Guest';