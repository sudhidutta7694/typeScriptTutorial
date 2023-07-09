//Making and Handling Errors

const makeError = (errMsg: string = "An unknown Error Occurred! :("): never => {
    throw new Error(errMsg);
};

function handleError(errMsg: string = "The Error has been handled"): void {
    console.log(errMsg);
}

try {
    makeError();
} catch (error) {
    handleError(error.message);
}

//Map functions

const heroes = ["Ironman", "SpiderMan", "Thor"];

const heroesMap = heroes.map(
    (hero: string): string => {
        console.log(hero);
        return hero.toUpperCase()
    }
);

console.log(heroesMap);

export {};