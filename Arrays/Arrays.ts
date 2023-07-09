import { User } from "../Objects/Objects";

type Users = User[];
//It can also be written as type Users = Array<User>

const userGenerator = (limit: number): Users => {
  const users: Users = [];
  
  for (let i = 0; i < limit; i++) {
    const newUser: User = {
      uid: Math.floor(Math.random() * 1000), // Generating a random uid for demonstration
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      isActive: Math.random() < 0.5, // Randomly assign isActive value
      isAdmin: Math.random() < 0.2, // Randomly assign isAdmin value (20% chance)
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    users.push(newUser);
  }

  return users;
};

let usersArray: Users = userGenerator(10);

console.log("The generated users are as follows:\n", usersArray);

export default userGenerator;


