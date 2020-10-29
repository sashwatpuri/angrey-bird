const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;

var engine, world;
var ground;
var box1 , box2 , box3 , box4 , box5  ; 
var pig , pig1 ;
var log , log1 , log2 , log3 ; 
var bird ; 
var backImage ; 

function preload(){
backImage = loadImage("sprites/bg.png") ; 

}

function setup() {
  createCanvas(1200,400) ; 

  engine=Engine.create();
  world= engine.world;

  ground = new Ground(600,390 ,1200,20);
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig = new Pig(810,320) ;
  log = new Log(810,275,300,PI/2);

  box3 = new Box(700,230,70,70) ; 
  box4 = new Box(920,230,70,70);
  pig1 = new Pig(810,230);
  log1 = new Log(810,185,300,PI/2);

  box5 = new Box(810,160,70,70);
  log2 = new Log(760,120,150,PI/7);
  log3 = new Log (870,120,150,-PI/7);

  bird = new Bird(100,100) ;
}

function draw() {
  background(backImage); 
  Engine.update(engine);
  box1.Display();
  box2.Display();
  ground.Display();
  pig.Display();
  log.Display();

  box3.Display();
  box4.Display();
  pig1.Display();
  log1.Display();

  box5.Display();
  log2.Display();
  log3.Display();

  bird.Display();
}