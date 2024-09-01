import { filterWords } from "./filter";
import { logFruits } from "./fruit";
import { mapNum } from "./map";
import { getFirChar } from "./slice";

console.log("Try npm run lint/fix!");

const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon'

			const why={am:'I tabbed?'};

const iWish = "I didn't have a trailing space..."; 

const sicilian = true;;

const vizzini = (!!sicilian) ? !!!sicilian : sicilian;

const re = /foo   bar/;

export function doSomeStuff(withThis: string, andThat: string, andThose: string[]) {
    //function on one line
    if(!Boolean(andThose.length)) {return false;}
    console.log(withThis);
    console.log(andThat);
    console.dir(andThose);
    console.log(longString, trailing, why, iWish, vizzini, re);
    return;
}
// TODO: more examples

// Initialize Array Words(For filter function)
const words = ["Introduction", "Development", "Linklist", "API"];
console.log(filterWords(words));

// Initialize fruits(For forEach loop)
const fruits = ["Apple","Banana","Orange","Mango","Avocado"];
logFruits(fruits);

// Initalize array of integers(For Map Function)
const intArr = [1,2,3,4,5];
console.log(mapNum(intArr));

// Demo String (For slice function)
const demoStr = "The quick brown fox jumped over the lazy dog";
console.log(getFirChar(demoStr));

