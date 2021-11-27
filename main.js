noseX=0;
noseY=0;
difference=0;
rightWrist = 0;
leftWrist = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,150);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNEt is Initialized~!");
}

function gotPoses(){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x; 
        noseY = results[0].pose.nose.y; 
        console.log("noseX =" + noseX+ "noseY =" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.y;

        console.log("leftWristX = " + leftWristX + "rightWrist =" + rightWristX + "difference ="+ difference );
    }
}

function draw(){
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width and Height of a Sqaure will be = "+ difference + "px";

    fill('#F90093');
    stroke('#F90093');
    square(noseX ,noseY, difference);
}