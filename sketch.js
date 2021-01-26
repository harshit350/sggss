//Create variables here
var foodS,foodStock;
var dog,happyDog,dogimg;
var database;

var button1,button2;
var fedTime,lastFed;
var foodObj;

function preload()
{
  dogimg=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
  milkimg=loadImage("Milk.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStok=database.ref('Food');
  foodStock.on("value",(readStock));
  dog=createSprite(250,250,20,40);
  dog.addImage(dogimg)
  dog.scale=0.2;

  foodObj= new FOOD();

  
  feed=createButton("feed the dog")
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton(" addFOOD")
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  fedTime=database.ref('feedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();

  });
}


function draw() {  
background(46,139,87);
//if(keyWentDown(UP_ARROW)){
  //writeStock(foodS);
  //dog.addImage(happyDog);
//}
  drawSprites();
  //add styles here
 
  textSize(15)
fill(225,225,224);
if(lastFed>=12){
  text("Last Feed : "+ lastFed%12 + " PM",350,30);
}else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);
}else{
  text(" Last Feed : "+lastFed + " AM",350,30);
}
 

  foodObj.display();

  
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  
  database.ref('/').update({
    Food:x
  })
}

function addFood(){
foodS++;
database.ref('/').update({
  Food:foodS
})


}

 function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
 }