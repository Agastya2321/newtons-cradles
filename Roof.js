class Roof{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.Roof = Constraint.create(options);
        World.add(world,this.Roof);
    }
    display(){

        var pointA= this.Roof.bodyA.position;
        var pointB= this.Roof.bodyB.position;
        
        fill("red")
        strokeWeight(1)
        var Anchor1X = pointA.x
        var Anchor1Y = pointB.y

        var Anchor2X = pointA.x
        var Anchor2Y = pointB.y

        var Anchor2X = pointB.x+this.offsetX
        var Anchor2Y = pointB.y+this.offsetY
            
            line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
  
}