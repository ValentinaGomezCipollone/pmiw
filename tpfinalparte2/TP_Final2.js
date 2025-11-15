//https://www.youtube.com/watch?v=MG-BXtnN1pw
let fondo;
let img3;
let mb = [];
let mp=[];
let perder;
let saltar;
let musica;
let juego;
let fin;

function preload() {
  mb.push(loadImage('imagenes/img1.png'));
  mb.push(loadImage('imagenes/img2.png'));
  img3=loadImage('imagenes/img3.png');
  mp.push(loadImage('imagenes/gnomo1.png'));
  mp.push(loadImage('imagenes/gnomo2.png'));
  mp.push(loadImage('imagenes/gnomo3.png'));
  mp.push(loadImage('imagenes/gnomo4.png'));
  fondo=loadImage('imagenes/fondo.jpg');
  fin=loadImage('imagenes/fin.jpg');
  perder=loadSound('imagenes/game-over.mp3');
  saltar=loadSound('imagenes/salto.mp3');
  musica=loadSound('imagenes/gravity-falls.mp3');
}
function setup() {
  createCanvas(640, 480);

  juego = new Juego(mb, fondo, img3, fin, mp, perder, saltar, musica);
}


function draw() {
  background (200);
  juego.mostrar();
}

function keyPressed() {
  juego.teclas(keyCode);
}


function mousePressed() {
  juego.click(mouseX, mouseY);
}

