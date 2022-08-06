"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginApi_1 = require("./LoginApi");
let login = new LoginApi_1.LoginApi('id1234', '1234');
// let login = new Login('id1234','1235');
let res = '';
console.log("Before Promise:" + res);
login.authenticate()
    .then(
//resolve()
function (value) {
    //   console.log(value);
    //   console.log("Success in Resolve()");
    return login.userName(value);
}, 
//Reject()
function (value) {
    //   console.log(value);
    //   console.log("Reject in Catch in Reject()");
    return login.userName(value);
})
    .catch(function (value) {
    // console.log(value);
    // console.log("Reject in Catch");
    return login.userName(value);
})
    .then(
//chained
function (value) {
    res = value;
    console.log("Inside then Promise: " + res);
    console.log(value);
    //   console.log("Success in chained Resolve()");
})
    .catch(function (value) {
    res = value;
    console.log("Inside catch Promise: " + res);
    console.log(value);
    // console.log("Reject in Catch");
})
    .finally(function () {
    console.log("finally ");
});
console.log("After Promise: " + res);
