type Point={
    x:number,
    y:number,
    z:number
  }
  
  //impelementation of ReadOnly<T>
  type ReadOnly1<T>={
    readonly [Item in keyof T]:T[Item]
  }
  
  const center:ReadOnly1<Point>={
    x:0,
    y:0,
    z:0
  }
  
  center.x=1 //should error
  
  //inbuilt Readonly<T>
  const center1:Readonly<Point>={
    x:0,
    y:0,
    z:0
  }
  
  center1.x=1 //should error