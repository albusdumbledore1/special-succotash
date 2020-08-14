//Create variables here
var dog, happyDog, database, foodS, foodStock,dogImg;




function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(230,200,20,20);
  dog.addImage("dog",dogImg);
  dog.scale = 0.5;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
background(46, 139, 87);


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  addImage(dogHappy);
}

  drawSprites();
  dog.display();
  //add styles here

}



