var song1="";
var song2=""
 function preload(){
song=loadSound("Believer(PagalWorld) (1).mp3")
song=loadSound(videoplayback (1) (1).mp3)
 }

 function setup(){
canvas=createCanvas(600,500);
canvas.center()
video=createCapture(VIDEO)
video.hide();
}

function draw(){
image(video,0,0,600,500)
}

function playbtn(){
    song.play();
}