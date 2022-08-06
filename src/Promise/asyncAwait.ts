import { LoginApi } from "./LoginApi";
async function login() {
   

let login = new LoginApi('id1234','1234');
// let login = new Login('id1234','1235');
let name:string='';

console.log("Before Promise:"+name)
try{
    let auth:boolean=await login.authenticate().then(value=>{return value}).catch(value=>{return value});
    name=await login.userName(auth).then(value=>{console.log("inside Promise then: "+value);return value}).catch(value=>{return value});
}catch(error){
    console.log(error)
}


  console.log("After Promise: "+name)

}

login()