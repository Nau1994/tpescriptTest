function error(message:string):never{
    throw new Error(message);
  }
  
//   const notallowed:never='anything';
  
  const allow:never=error('anything');
  
  const str:string=error('anything');
  