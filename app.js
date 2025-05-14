
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


