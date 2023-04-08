var amongus, amongusImg
var bgimg
function perload() {
  amongusImg = loadImage("Amongus-pic.png")
  bgimg = loadImage("lobby.jpg")
}
function setup() {
  createCanvas(1000,1000);

  amongus = createSprite(0, 0, 100, 100)
}

function draw() 
{
  image (bgimg, width/2, height/2, 1000, 1000 )
  drawSprites();

}




