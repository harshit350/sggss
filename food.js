var milkimg


function preload(){
    milkimg=loadImage("Milk.png");
}

class FOOD{
    constructor(){
        var foodStock
        var lastFed

    }

    getFoodStock(){
        var FoodStockRef = database.ref('foodStock');
        FoodStockRef.on("value",(data)=>{
          foodStock = data.val();
        })
      }



      updateFoodStock(Food){
        database.ref('/').update({
            foodStock: Food
          });  
      }


      deductFood(){
        if(x <= 0){
            x=0
          }else{
            x=x-1
          }
      }
    
    display(){
var x=80,y=100;

imageMode(CENTER);
image(this.image,720,220,70,70);

if(this.foodStock!=0){
    for(var i=0;<this.foodStock; i++){
        if(i%10==0){
            x=80;
            y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
    }
}


    }
    
    
    }
