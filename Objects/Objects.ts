type User = {
    readonly uid: number;
    name: string;
    email: string;
    isActive: boolean;
    isAdmin: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
    readonly photoURL?: string;
    readonly providerId?: string;
    readonly cardDetails?: CardDetails;
};

type CardDetails = {
    cardNumber: string;
    cardHolderName: string;
    cardCvv: string;
    cardExpiration: string;
    cardType: string;
    cardBrand?: string;
    cardImageUrl?: string;
};

function createUser(user: User): User {
    const currentDate = new Date();
    const newUser: User = {
        uid: Math.floor(Math.random() * 1000), // Generating a random uid for demonstration
        name: user.name,
        email: user.email,
        isActive: true,
        isAdmin: false,
        createdAt: currentDate,
        updatedAt: currentDate,
    };

    return newUser;
}

const user: User = {
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

let newUser:User = createUser(user);

console.log(newUser);

export {User};
