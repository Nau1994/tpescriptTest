type user={
    id1234:string,
    id5678:string,
    }

export class LoginApi{
     
    private  pass:user={
    id1234:'1234',
    id5678:'5678',
    }
    private name:user={
    id1234:'name1234',
    id5678:'name5678',
    }

    constructor(private id:string,private password:string){}

    authenticate():Promise<boolean>{
        return new Promise((resolve,reject)=>{
            if( this.password===this.pass[this.id as keyof user]){
                resolve(true);
            }else{
                // console.log('rejected');
                reject(false)
            }

        })
    }

    userName(authenticate:boolean):Promise<string>{
        return new Promise((resolve,reject)=>{
            if( authenticate===true){
                resolve(`Logged as ${this.name[this.id as keyof user]} !`);
            }else{
                // console.log('rejected');
                reject('Authentication failed !')
            }

        })
    }
}

// console.log((new Login('id1235','1234')).authenticate());
// console.log((new Login('id1234','1234')).userName(true));


