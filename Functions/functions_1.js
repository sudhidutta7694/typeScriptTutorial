"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uid;
function getUid() {
    return 562825192181;
}
uid = getUid();
console.log("The uid generated is: ", uid);
var user;
var userInfo = function (username, uid, isPaid) {
    if (username === void 0) { username = "user@example.com"; }
    if (uid === void 0) { uid = 123456789; }
    if (isPaid === void 0) { isPaid = false; }
    return {
        username: username,
        uid: uid,
        isPaid: isPaid
    };
};
user = userInfo("Sudhi");
console.log(user);
