var blackColor= document.getElementById("color-1");
var redColor= document.getElementById("color-2");
var purpleColor= document.getElementById("color-3");
var pinkColor= document.getElementById("color-4");
var watchImage=document.getElementById("watch");
var d= new Date();
var dateTime= document.getElementById("time");
var timeText= document.getElementById("time-text");
var heartRate= document.getElementById("heart-rate");
var rateHeart= document.getElementById("heartRate");

blackColor.addEventListener('click',function(){
    watchImage.src='https://i.imgur.com/iOeUBV7.png';
    watchImage.alt="smart-watch-black";
});

redColor.addEventListener('click',function(){
    watchImage.src='https://i.imgur.com/PTgQlim.png';
    watchImage.alt="smart-watch-red";
});

purpleColor.addEventListener('click',function(){
    watchImage.src='https://i.imgur.com/xSIK4M8.png';
    watchImage.alt="smart-watch-purple";
});

pinkColor.addEventListener('click',function(){
    watchImage.src='https://i.imgur.com/Zygu7I3.png';
    watchImage.alt="smart-watch-pink";
});

dateTime.addEventListener('click',function(){
  rateHeart.style.display="none";
  timeText.style.dispay = "block";
  timeText.innerHTML=d;
});

heartRate.addEventListener('click',function(){ 
  timeText.style.dispay = "none";
  rateHeart.style.display = "block";
  //rateHeart.innerHTML=72;
  
});
