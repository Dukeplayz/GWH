const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,rope,ball
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10



function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   ball = new Ball (200,200,80,80)
rope = new Rope(ball.body,{x:500,y:50})
b1 = new Box(900,100,100,100)
b2 = new Box(900,150,100,100)
b3 = new Box(900,200,100,100)
b4 = new Box(900,250,100,100)
b5 = new Box(800,100,100,100)
b6 = new Box(800,150,100,100)
b7 = new Box(800,200,100,100)
b8 = new Box(800,250,100,100)
b9 = new Box(700,100,100,100)
b10 = new Box(700,150,100,100)

}
function draw(){
    background(155);
    Engine.update(engine);
    strokeWeight(4);
      
    ground.display();
    rope.display()
    ball.display()
    
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    b7.display()
    b8.display()
    b9.display()
    b10.display()
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


