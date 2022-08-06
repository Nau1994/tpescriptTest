"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginApi_1 = require("./LoginApi");
function login() {
    return __awaiter(this, void 0, void 0, function* () {
        let login = new LoginApi_1.LoginApi('id1234', '1234');
        // let login = new Login('id1234','1235');
        let name = '';
        console.log("Before Promise:" + name);
        try {
            let auth = yield login.authenticate().then(value => { return value; }).catch(value => { return value; });
            name = yield login.userName(auth).then(value => { console.log("inside Promise then: " + value); return value; }).catch(value => { return value; });
        }
        catch (error) {
            console.log(error);
        }
        console.log("After Promise: " + name);
    });
}
login();
