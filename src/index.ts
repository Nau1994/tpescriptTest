type Person=Record<string,{name:string,age:number}>
let persons:Person={};
persons['111']={name:'na',age:28};
persons['222']={name:'av',age:20};

console.log(persons)

type pageInfo={
  id:number,
  title:string
}

type PageVerbose={
  home:pageInfo,
  services:pageInfo,
  about:pageInfo,
  contact:pageInfo
}

type Pages=Record<'home'|'services'|'about'|'contact',{id:number,title:string}>

let pages:Partial<Pages>={};
pages['home']={id:10,title:'home title'} //pages.home={id:10,title:'home title'}
pages['services']={id:20,title:'services title'}
pages['about']={id:30,title:'about title'}
pages['contact']={id:50,title:'contact title'}
console.log(pages as Pages)