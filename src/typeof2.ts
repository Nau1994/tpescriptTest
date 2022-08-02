type Person={
  name:string,
  age:number
}

const john:Person={
  name:'john',
  age:28
}

function logGet(obj:Person,key:keyof Person){
  const value=obj[key];
  return value;
}

function logGet1<T extends Person,U extends keyof T>(obj:T,key:U){
  const value=obj[key];
  return value;
}

function logSet<T extends Person,U extends keyof T>(obj:T,key:U,value:T[U]){
  obj[key]=value;
}

console.log(logGet(john,'name'));

logSet(john,'name','Changed')

console.log(logGet1(john,'name'));