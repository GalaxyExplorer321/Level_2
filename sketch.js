const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1, pig3;
var backgroundImg, platform;
var bird, slingshot;
var score = 0;
var bg;

var gameState = "onSling";

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    getBackground()
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(600, 320, 70, 70);
    pig5 = new Pig(500, 320);
    box2 = new Box(400, 320, 70, 70)
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 300, 300, PI / 2);
    rock1 = new rock(700, 320, 70, 70);
    rock2 = new rock(930, 320, 70, 70);
    rock3 = new rock(700, 240, 70, 70);
    rock4 = new rock(930, 240, 70, 70);
    pig2 = new Pig(810, 200);
    log2 = new Log(810, 160, 300, PI / 2);
    log3 = new Log(500, 20, 300, PI / 2);
    pig3 = new Pig(810, 150);
    rock8 = new rock(1100, 280, 70, 70);
    rock5 = new rock(1100, 210, 70, 70);
    rock6 = new rock(1100, 140, 70, 70);
    rock7 = new rock(1100, 70, 70, 70);
    pig4 = new Pig(1100, 0)


    bird = new Bird(200, 50);

    slingshot = new SlingShot(bird.body, { x: 200, y: 50 });
}

function draw() {
    if (backgroundImg) {
        background(backgroundImg);
    } else {
        background("pink")
    }
    textSize(30)
    fill("white")
    text("score=" + score, width - 300, 50)
   // if (score = 25 && score < 26) {
   //     background("red")
   // }
   // if (score >= 49) {
   //     background("green")
   // }
    Engine.update(engine);
    //strokeWeight(4);

    box1.display();
    box2.display();
    log3.display();
    rock1.display();
    rock2.display();
    rock3.display();
    rock4.display();
    rock5.display();
    rock6.display();
    rock7.display();
    rock8.display();
    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();
    pig3.display();
    pig3.score();
    log1.display();
    log2.display();
    pig4.display();
    pig4.score();
    pig5.display();
    pig5.score();

    ground.display();
    bird.display();
    platform.display();
    slingshot.display();
}

function mouseDragged() {
    if (gameState !== "launched") {
        Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
    }
}


function mouseReleased() {
    slingshot.fly();
    //gameState = "launched";
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(bird.body);
    }
}
async function getBackground() {
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
    console.log(response)
    var responseJSON = await response.json()
    console.log(responseJSON)
    var datetime = responseJSON.datetime
    console.log(datetime)
    var hour = datetime.slice(11, 13)
    console.log(hour)
    if (hour >= 06 && hour <= 17) {
        bg = "sprites/bg.png"
    }
    else {
        bg = "sprites/bg2.jpg"
    }
    backgroundImg = loadImage(bg)
}