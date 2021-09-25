var garden,rabbit,apple,orangeL,redL;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  leafImg= loadImage("leaf.png")
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
  
// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);
var no =  Math.round(random(1,100))
console.log(no)

  
  // if (frameCount % 50 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  if(frameCount%80===0){
    leaf=createSprite(random(50,350),40,10,10);
    leaf.velocityY=3
    randomNumber=Math.round(random(1,4))
    switch(randomNumber){
     case 1:leaf.addImage(appleImg)
     break
     case 2:leaf.addImage(orangeImg)
     break
     case 3:leaf.addImage(redImg)
     break
     case 4:leaf.addImage(leafImg)
     break
     default:break
    }
    leaf.scale=0.1
    leaf.lifetime=150
     }
  
  }





function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
  function createleaf() {
    leafL = createSprite(random(50, 350),40, 10, 10);
    leafL.addImage(leafImg);
    leafL.scale=0.06;
      leafL.velocityY = 3;
      leafL.lifetime = 150;
}
