type Point={
    readonly x:number,
    y?:number,
    z:number
  }
  
  //impelementation of ReadOnly<T>
  type Mapped<T>={
     +readonly[P in keyof T]+?:T[P]
  }
  
  type Partial1<T>={
    [P in keyof T]?:T[P]
  }
  
  const center:Mapped<Point>={
    x:0,
    y:0,
    z:0
  }
  
  // center.x=1 //should error
  
  