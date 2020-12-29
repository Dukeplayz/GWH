class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 450
        }
        this.pointB = pointB
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
     this.sling.bodyA=body
}
    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()

            strokeWeight(7);
            stroke(48,22,8);
           
            line(pointB.x,pointB.y,pointA.x,pointA.y)

            pop();
        }
    }
    
}