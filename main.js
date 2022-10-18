noseX=0
noseY=0
function preload(){
clown_nose = loadImage('https://i.postimg.cc/J7qSpnM4/Clown-Nose-removebg-preview.png')
apple = loadImage('https:i.postimg.cc/tCXqSTwd/6-68549-large-painted-apples-png-clipart-gallery-yopriceville-apple-removebg-preview.png')
}
function setup(){
 canvas= createCanvas(300,300)
 canvas.center();
 video = createCapture(VIDEO);
 video.size(300,300);
 video.hide()

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Inialized')
}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    //circle(noseX,noseY,20);
    image(clown_nose,noseX-25,noseY-27,50,50)
   }
   function draw()
    {
        image(apple,noseX,noseY,45,45)
    }
function Apple(){
    function draw()
    {
        image(apple,noseX,noseY,45,45)
    }
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x = "+ noseX)
        console.log("nose y = "+ noseY)
    } 
}
function take_snapshot(){
    save('myFilterImage.png')
}
//https:i.postimg.cc/tCXqSTwd/6-68549-large-painted-apples-png-clipart-gallery-yopriceville-apple-removebg-preview.png
//https://i.postimg.cc/J7qSpnM4/Clown-Nose-removebg-preview.png