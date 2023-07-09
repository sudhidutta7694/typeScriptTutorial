"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//We can also write it as type NestedArray = User[][] instead
var generateNestedArray = function (rows, cols) {
    var nestedArray = [];
    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < cols; j++) {
            var user = {
                uid: Math.floor(Math.random() * 1000),
                name: "User ".concat(i + 1, "-").concat(j + 1),
                email: "user".concat(i + 1, "-").concat(j + 1, "@example.com"),
                isActive: Math.random() < 0.5,
                isAdmin: Math.random() < 0.2,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            row.push(user);
        }
        nestedArray.push(row);
    }
    return nestedArray;
};
var rows = 3;
var cols = 4;
var nestedArray = generateNestedArray(rows, cols);
console.log(nestedArray);
