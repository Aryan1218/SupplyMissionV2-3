class Box{
    constructor(){
        var options={
            isStatic:true
            

    }
   
    this.body = Bodies.rectangle(200,20,50,50,options)
    this.width = width;
    this.height = height;
    World.add(world,this.body)

    display()
    var pos = this.body.position
    rectMode(CENTER)
    fill("red")
    rect(pos.x,pos.y, this.width, this.height)
    pop();
    
    
  
}


}

