enum DayOfWeek {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday",
}

const getWeekendMessage = (day: DayOfWeek): string => {
    if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
        return "It's the weekend! Enjoy your time off.";
    } else {
        return "It's a weekday. Keep up the good work!";
    }
};

const currentDate: Date = new Date();
const currentDay: DayOfWeek = DayOfWeek[currentDate.toLocaleString("en-US", { weekday: "long" })];
const weekendMessage: string = getWeekendMessage(currentDay);

console.log(weekendMessage);

export { }