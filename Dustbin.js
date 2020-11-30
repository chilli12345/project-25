class Dustbin{
    constructor(x,y,width,height){
       var options={
           'isStatic':true,
           'friction':1,
           'restitution':0,
           'density':100
       }
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     this.image=loadImage("images/dustbingreen.png");	
     World.add(world ,this.body);
    }
    display(){
        fill("white");
        rect(this.body.position.x ,this.body.position.y , this.width,this.height);
       
    }
}