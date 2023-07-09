"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userGenerator = function (limit) {
    var users = [];
    for (var i = 0; i < limit; i++) {
        var newUser = {
            uid: Math.floor(Math.random() * 1000),
            name: "User ".concat(i + 1),
            email: "user".concat(i + 1, "@example.com"),
            isActive: Math.random() < 0.5,
            isAdmin: Math.random() < 0.2,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        users.push(newUser);
    }
    return users;
};
var usersArray = userGenerator(10);
console.log("The generated users are as follows:\n", usersArray);
exports.default = userGenerator;
