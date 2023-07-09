"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seatAllotment = function (seat, paymentType) {
    if (paymentType === "cash") {
        console.log("Seat allotted: ".concat(seat, " (Payment type: Cash)"));
    }
    else if (paymentType === "credit") {
        console.log("Seat allotted: ".concat(seat, " (Payment type: Credit)"));
    }
    else if (paymentType === "debit") {
        console.log("Seat allotted: ".concat(seat, " (Payment type: Debit)"));
    }
    else {
        console.log("Invalid payment type");
    }
};
var processArray = function (arr) {
    console.log("Array elements:");
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        console.log(element);
    }
};
// Example usages
var elements = [1, "two", 3, "four", 5];
var paymentType = "credit";
processArray(elements);
seatAllotment("aisle", paymentType);
