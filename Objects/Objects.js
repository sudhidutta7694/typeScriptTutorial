"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    var currentDate = new Date();
    var newUser = {
        uid: Math.floor(Math.random() * 1000),
        name: user.name,
        email: user.email,
        isActive: true,
        isAdmin: false,
        createdAt: currentDate,
        updatedAt: currentDate,
    };
    return newUser;
}
var user = {
    uid: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    isActive: true,
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    photoURL: "https://example.com/avatar.jpg",
    cardDetails: {
        cardNumber: "1234567890",
        cardHolderName: "John Doe",
        cardCvv: "123",
        cardExpiration: "12/25",
        cardType: "Visa",
    },
};
var newUser = createUser(user);
console.log(newUser);
