// Object Destructuring

const person = {
    // name: "Marly",
    age: 45,
    location: {
        city: "Charleston",
        temp: 76
    }
};

const { name: firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age} years old.`);

const { city: cityName, temp: newTemp = 60 } = person.location;
console.log(`It is ${newTemp} degrees in ${cityName}.`);


const book = {
    title: "Ego is the Enemy",
    author: "Billie Saunders",
    publisher: {
        name: "Penguin"
    }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(`The publisher name is ${publisherName}.`);

// Array Destructuring

const address1 = ["21 Cowell Drive", "Sunnyvale", "California", "84720"];

const [ street1, city1, state1, zip1 ] = address1;

console.log(`You are in ${street1} ${city1}, ${state1} ${zip1}.`);

// ***************

const address2 = ["34 Garden Lane", "Atwater", , "40021"];

const [ street2, city2, state2 = "defaultState", zip2 ] = address2;

console.log(`You are in ${street2} ${city2}, ${state2} ${zip2}.`);

// *************************

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [ coffee, , price ] = item;
console.log(`A medium ${coffee} costs ${price}.`);