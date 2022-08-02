function CreatePerson(firstName:string,lastName:string){
    return {
      firstName:'naushad',
      lastName:'ansari',
      fullName:`${firstName} ${lastName}`
    }
  }
  
  ////implementation of ReturnType<T>
  type ReturnType1<T>=
  T extends (...args:any)=>infer M
  ?M
  :never;
  
  type Person=ReturnType1<typeof CreatePerson>;
  // function logPerson(person:Person)
  function logPerson(person:ReturnType1<typeof CreatePerson>)
  {
    console.log(
      'Person',
      person.firstName,
      person.lastName,
      person.fullName,
    )
  }
  
  
  //inbuilt ReturnType<T>
  function logPerson1(person:ReturnType<typeof CreatePerson>){
    console.log(
      'Person',
      person.firstName,
      person.lastName,
      person.fullName,
    )
  }