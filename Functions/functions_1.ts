let uid: number;

function getUid() {
    return 562825192181;
}

uid = getUid();

console.log("The uid generated is: ", uid);

let user: object

let userInfo = (username: string = "user@example.com", uid: number = 123456789, isPaid: boolean = false) => {
    return {
        username,
        uid,
        isPaid
    };
}

user = userInfo("Sudhi");

console.log(user);

export { }

