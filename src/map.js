"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapNum = void 0;
const mapNum = (numbers) => {
    const sqrArr = numbers.map(num => num * num);
    return sqrArr;
};
exports.mapNum = mapNum;
