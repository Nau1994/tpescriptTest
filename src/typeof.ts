const center = {
    x: 0,
    y: 0,
    z: 0,
  };
  
  type point =typeof center;
  
  const unit:point={
      x:center.x+1,
      y:center.y+1,
      z:center.z+1
  }
  
  const unit1:typeof center={
      x:center.x+1,
      y:center.y+1,
      z:center.z+1
  }
  
  console.log(unit);
  console.log(unit1)