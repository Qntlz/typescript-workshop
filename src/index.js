"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomeStuff = doSomeStuff;
const filter_1 = require("./filter");
const fruit_1 = require("./fruit");
const map_1 = require("./map");
const slice_1 = require("./slice");
console.log("Try npm run lint/fix!");
const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
const trailing = 'Semicolon';
const why = { am: 'I tabbed?' };
const iWish = "I didn't have a trailing space...";
const sicilian = true;
;
const vizzini = (!!sicilian) ? !!!sicilian : sicilian;
const re = /foo   bar/;
function doSomeStuff(withThis, andThat, andThose) {
    //function on one line
    if (!Boolean(andThose.length)) {
        return false;
    }
    console.log(withThis);
    console.log(andThat);
    console.dir(andThose);
    console.log(longString, trailing, why, iWish, vizzini, re);
    return;
}
// TODO: more examples
// Initialize Array Words(For filter function)
const words = ["Introduction", "Development", "Linklist", "API"];
console.log((0, filter_1.filterWords)(words));
// Initialize fruits(For forEach loop)
const fruits = ["Apple", "Banana", "Orange", "Mango", "Avocado"];
(0, fruit_1.logFruits)(fruits);
// Initalize array of integers(For Map Function)
const intArr = [1, 2, 3, 4, 5];
console.log((0, map_1.mapNum)(intArr));
// Demo String (For slice function)
const demoStr = "The quick brown fox jumped over the lazy dog";
console.log((0, slice_1.getFirChar)(demoStr));
