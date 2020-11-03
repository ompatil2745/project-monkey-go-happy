var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","78244601-005f-4069-880d-877f06077c79","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","6d2f8a12-7f58-49a9-988d-4d63b9dd5adf","32ef9ffe-9cc5-40d9-a552-17eba8e7fb1d","44515825-f846-445f-9091-b4e5ce037e42","a4c6b4a5-9138-4539-9c89-07239ded2191","980a88e0-0f7f-4322-974c-ac4fe63aa097","2d578220-3e37-471e-9ff1-e9dc3efca727"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"kLzHo7d0hzISIpgVtJisj0Cxph5iJu0M","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":2456},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"78244601-005f-4069-880d-877f06077c79":{"name":"monkey_copy_1","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":1,"looping":true,"frameDelay":12,"version":"Yq4uJbiDlqz1R51RLWgEE.MA7xy0xRNQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":560,"y":614},"rootRelativePath":"assets/78244601-005f-4069-880d-877f06077c79.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"nZa3aw8G_nQ6naTXPHmiGJtoINRpmc8o","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"tuWfuYlynnwgpdT2KbU9Q6NK_QMp2ISR","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"6d2f8a12-7f58-49a9-988d-4d63b9dd5adf":{"name":"jungle-min-min.jpg_1","sourceUrl":"assets/v3/animations/vNd4iSJfnRRr2uDi9vbmEnS6ZOiPbHFZfe0HZl18Gtw/6d2f8a12-7f58-49a9-988d-4d63b9dd5adf.png","frameSize":{"x":1003,"y":771},"frameCount":1,"looping":true,"frameDelay":4,"version":"Ox8aY8ww2ySn0TbjqAkIbyBgb6T1JaYF","loadedFromSource":true,"saved":true,"sourceSize":{"x":1003,"y":771},"rootRelativePath":"assets/v3/animations/vNd4iSJfnRRr2uDi9vbmEnS6ZOiPbHFZfe0HZl18Gtw/6d2f8a12-7f58-49a9-988d-4d63b9dd5adf.png"},"32ef9ffe-9cc5-40d9-a552-17eba8e7fb1d":{"name":"farm_land_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png"},"44515825-f846-445f-9091-b4e5ce037e42":{"name":"bunny2_walk1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png","frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":4,"version":"Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu","categories":["animals","characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png"},"a4c6b4a5-9138-4539-9c89-07239ded2191":{"name":"carrot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gjko7ZQxLcGGth1zvVKmOkZDpldIPGKx/category_food/carrot.png","frameSize":{"x":78,"y":70},"frameCount":1,"looping":true,"frameDelay":2,"version":"gjko7ZQxLcGGth1zvVKmOkZDpldIPGKx","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":70},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gjko7ZQxLcGGth1zvVKmOkZDpldIPGKx/category_food/carrot.png"},"980a88e0-0f7f-4322-974c-ac4fe63aa097":{"name":"bunny2_walk1_2","sourceUrl":null,"frameSize":{"x":152,"y":193},"frameCount":1,"looping":true,"frameDelay":60,"version":"yxgChqxV7KWm4QeFhdee_NN79Wr2Ls2l","categories":["animals","characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":152,"y":193},"rootRelativePath":"assets/980a88e0-0f7f-4322-974c-ac4fe63aa097.png"},"2d578220-3e37-471e-9ff1-e9dc3efca727":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"G09VBTMEOmfff6MF5Q2nupMQhV16jKjx","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/2d578220-3e37-471e-9ff1-e9dc3efca727.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY=1;
var END=0;
var gamestate=PLAY;
var score = 0;

var survivaltime=0;

var theme=createSprite(0,0,400,400);
theme.setAnimation("jungle-min-min.jpg_1");
theme.velocityX=-2;
theme.x=theme.width/2;
theme.scale=1.5;


var monkey = createSprite(200, 200);
monkey.setAnimation("monkey");
monkey.scale=0.1;

var ground = createSprite(7, 369,900,10);
ground.velocityX=-2;
ground.visible=false;

monkey.setCollider("circle",0,0,40);
monkey.debug=false;


var obstaclegroup = createGroup();
var bananagroup = createGroup();



ground.x=ground.width/2;



function draw() {
  
  background(255);
  
  if(gamestate===PLAY){
  
 if(theme.x<0){
    
    theme.x=theme.width/2;
  }
  
   survivaltime = Math.round(World.frameCount/4);
  
   if(keyDown("space")&&monkey.y>=135){
    
    monkey.velocityY=-14;
  }
   obstacle();
   banana();
    
  monkey.velocityY=monkey.velocityY+0.8;
  ground.x=ground.width/2;
  monkey.collide(ground);
  
  if(bananagroup.isTouching(monkey)){
    score++;
    bananagroup.destroyEach();
    
    
  }
  
    if(obstaclegroup.isTouching(monkey)){
      gamestate = END;
    }
}


  
  
 
 
  
 
  
  
  
  
  
 
drawSprites();
if(gamestate===END){
  
 monkey.setAnimation("monkey_copy_1");
  theme.velocityX=0;

  monkey.velocityY=0;
  monkey.velocityX=0;
  obstaclegroup.setVelocityXEach(0);
  bananagroup.setVelocityXEach(0);
  textSize(30);
  fill("navy");
  stroke("navy");
  text("GAME OVER",100,200);
  obstaclegroup.destroyEach();
  bananagroup.destroyEach();
  
  
}
  

textFont("georgia");
fill("red");
textSize(22);
  text("survivaltime:"+survivaltime,229,19);
  text("Score:" + score , 30,19);
  text("PRESS R TO RESTART",30,2);
  
}

function banana(){
  if(World.frameCount%120===0){
    var banana=createSprite(400,320,40,10);
    banana.y=randomNumber(120,200);
    banana.setAnimation("Banana");
    banana.scale=0.05;
    banana.velocityX=-2;
    banana.lifetime=200;
    bananagroup.add(banana);
  }
}

function obstacle() {
  
  if (World.frameCount%300===0) {
    var obstacle = createSprite(400, 365,10,40);
    obstacle.x=randomNumber(396,370);
    obstacle.setAnimation("Stone");
    obstacle.scale=0.3;
    obstacle.velocityX=-2;
    obstacle.lifetime=200;
    obstaclegroup.add(obstacle);
    
  }
  
}




  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
