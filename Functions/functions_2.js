"use strict";
//Making and Handling Errors
Object.defineProperty(exports, "__esModule", { value: true });
var makeError = function (errMsg) {
    if (errMsg === void 0) { errMsg = "An unknown Error Occurred! :("; }
    throw new Error(errMsg);
};
function handleError(errMsg) {
    if (errMsg === void 0) { errMsg = "The Error has been handled"; }
    console.log(errMsg);
}
try {
    makeError();
}
catch (error) {
    handleError(error.message);
}
//Map functions
var heroes = ["Ironman", "SpiderMan", "Thor"];
var heroesMap = heroes.map(function (hero) {
    console.log(hero);
    return hero.toUpperCase();
});
console.log(heroesMap);
