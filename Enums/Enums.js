"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["Monday"] = "Monday";
    DayOfWeek["Tuesday"] = "Tuesday";
    DayOfWeek["Wednesday"] = "Wednesday";
    DayOfWeek["Thursday"] = "Thursday";
    DayOfWeek["Friday"] = "Friday";
    DayOfWeek["Saturday"] = "Saturday";
    DayOfWeek["Sunday"] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));
var getWeekendMessage = function (day) {
    if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
        return "It's the weekend! Enjoy your time off.";
    }
    else {
        return "It's a weekday. Keep up the good work!";
    }
};
var currentDate = new Date();
var currentDay = DayOfWeek[currentDate.toLocaleString("en-US", { weekday: "long" })];
var weekendMessage = getWeekendMessage(currentDay);
console.log(weekendMessage);
