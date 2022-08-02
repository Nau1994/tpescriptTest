type Point ={
    x:number,
    y:number
  }
  
  class State<T>{
    constructor(public current:T){
  
    }
  
    update (next:Partial<T>){
      this.current={...this.current,...next};
    }
  }
  
  let st=new State({x:0,y:2});
  st.update({y:3});
  console.log(st.current);