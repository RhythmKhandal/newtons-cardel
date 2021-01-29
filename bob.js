class Bob{

    constructor(x,y){
      var myOpt={
            isStatic:false,
            restitution:0,
            friction:2,
            density:0.4


        }




        this.body=Bodies.circle(x,y,37.5,myOpt)
        this.radius=75
        
      // this.image=loadImage("bob2.PNG")
        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
       // push();
        //imageMode(CENTER)
        //image(this.image,pos.x,pos.y,this.radius+50,this.radius+50)
       // pop();
       ellipseMode(CENTER)
       ellipse(pos.x,pos.y,this.radius,this.radius)
    }}