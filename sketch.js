const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour=0;
var bg ;

function preload() {
 getBackgroundImg();   
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);
    else{
        background("black");
    }
    textSize(35);
    fill("white");
    //text("time- "+hour,width-300,50);

    Engine.update(engine);

    // write code to display time in correct format here
if(hour>=12){
    text("time: "+hour%12+"pm",50,100);
    
}
else if(hour==0){
    text("time: "+12+"am",50,100);
}
text("time: "+hour%12+"am",50,100);
}

async function getBackgroundImg(){

    
        var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
        console.log(response);
        var responseJson=await response.json();
        console.log(responseJson);
        var dt=responseJson.datetime;
         hour=dt.slice(11,13);

        if(hour>=04 && hour<=06 ){  bg = "sunrise1.png"; }
        else if(hour>=06 && hour<=08 ){  bg = "sunrise2.png"; }
        else if(hour>=08 && hour<=11 ){  bg = "sunrise3.png"; }
        else if(hour>=11 && hour<=13){  bg = "sunrise4.png"; }
        else if(hour>=13 && hour<=15){  bg = "sunrise5.png"; }
        else if(hour>=15 && hour<=17 ){  bg = "sunrise6.png"; }
        else if(hour>=17 && hour<=18 ){  bg = "sunset7.png"; }
        else if(hour>=18 && hour<=20 ){  bg = "sunset8.png"; }
        else if(hour>=20 && hour<=23 ){  bg = "sunset9.png"; }
        else if(hour>=23 && hour==0){  bg = "sunset10.png"; }
        else if(hour==0 && hour<=03){  bg = "sunset11.png"; }
        else{  bg = "sunset12.png"; }
           
        


    

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);
}
