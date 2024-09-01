"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterWords = void 0;
// Filter words more than 5 letters
const filterWords = (words) => {
    const filWords = words.filter(word => word.length > 5);
    return filWords;
};
exports.filterWords = filterWords;
