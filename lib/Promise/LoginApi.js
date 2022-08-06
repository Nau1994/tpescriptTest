"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginApi = void 0;
class LoginApi {
    constructor(id, password) {
        this.id = id;
        this.password = password;
        this.pass = {
            id1234: '1234',
            id5678: '5678',
        };
        this.name = {
            id1234: 'name1234',
            id5678: 'name5678',
        };
    }
    authenticate() {
        return new Promise((resolve, reject) => {
            if (this.password === this.pass[this.id]) {
                resolve(true);
            }
            else {
                // console.log('rejected');
                reject(false);
            }
        });
    }
    userName(authenticate) {
        return new Promise((resolve, reject) => {
            if (authenticate === true) {
                resolve(`Logged as ${this.name[this.id]} !`);
            }
            else {
                // console.log('rejected');
                reject('Authentication failed !');
            }
        });
    }
}
exports.LoginApi = LoginApi;
// console.log((new Login('id1235','1234')).authenticate());
// console.log((new Login('id1234','1234')).userName(true));
