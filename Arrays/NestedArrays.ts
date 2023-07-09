import { User } from "../Objects/Objects";

type NestedArray = Array<Array<User>>;
//We can also write it as type NestedArray = User[][] instead

const generateNestedArray = (rows: number, cols: number): NestedArray => {
    const nestedArray: NestedArray = [];
    //Using a Nested Loop
    for (let i = 0; i < rows; i++) {
        const row: Array<User> = [];
        for (let j = 0; j < cols; j++) {
            const user: User = {
                uid: Math.floor(Math.random() * 1000),
                name: `User ${i + 1}-${j + 1}`,
                email: `user${i + 1}-${j + 1}@example.com`,
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

const rows = 3;
const cols = 4;

const nestedArray = generateNestedArray(rows, cols);

console.log(nestedArray);
