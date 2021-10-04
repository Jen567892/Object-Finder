function preload(){

}
function setup(){
    canvas = createCanvas(640, 420)
canvas.center()

video = createCapture(VIDEO)
video.hide()
}

function draw(){
    image(video, 0, 0, 420, 360)
}


