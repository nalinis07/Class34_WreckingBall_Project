/* 
  someone has given me the project .. to demolish 
   a multistoryed building ... for which I would be paid
   $10000000... why not? .. let me do it !!!

   I shall use the wrecking ball technology do execute this
   project ...

  Here it goes .............
*/

// namespacing of physics engine modules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// variables
var wreckEngine, wreckWorld ;
var wreckWall = [] ;
var wreckGround ;
var wreckBall ;
var wreckRope ;



function preload () {
  
  // I can't see the background image as the buildng is skyscraper
  // will get to see after the building is demolished..

  //backGrndImg = loadImage ("sprites/bg.png");

} // end of fn preload ()

function setup() {
  createCanvas(3000,800);

  // create instance of engine and world for the simulation
  wreckEngine = Engine.create();
  wreckWorld = wreckEngine.world;

  // create the ground
  wreckGround = new Ground (600,600,1200,20);

  // create apartments .. using arrays concept
  // ( need to create this though all will be demolished soon ..:-)
  var i = 0;
  for (i = 0 ; i < 6 ; i++)
      wreckWall[i]= new Apartment (900,100,70,70);
      console.log (i);
  for (i = i ; i < 12 ; i++)
    wreckWall[i]= new Apartment (800,100,70,70);
    console.log (i);
  for (i = i ; i < 20 ; i++)
    wreckWall[i]= new Apartment (700,100,70,70);

  // create wrecking ball
  wreckBall = new Ball (200,200,90,80);

  // create a strong rope and attach to the wrecking ball
  wreckRope = new Rope (wreckBall.body, {x:500, y:50});

}  // end of fn setup ()

function draw() {
  background("blue");   // clear sky .. bright sunny day.

  Engine.update (wreckEngine);

  //display ground
  wreckGround.display ();

  // display walls  ..
  // let me see them .. one last time before they are demolished :-)
  var i = 0;
  for (i = 0 ; i < 20 ; i++)
    wreckWall[i].display ();

  // display wreck ball and rope ... waiting to kill the buildings
  wreckBall.display ();    
  wreckRope.display () ;

} // end of fn draw ()


//set the wrecking ball to mouse postion
// give a nice shot ... so thet everything is down at one shot..
function mouseDragged () {
    //Matter.Body.setStatic (wreckBall.body, false);
    Matter.Body.setPosition (wreckBall.body, {x:mouseX, y:mouseY} );
}