// https://youtu.be/-ZeeAM8Au7c

let IlucionOptica;
let parada, sumar;

function preload() {
  IlucionOptica= loadImage ( "data/IlucionOptica.png" );
}

function setup() {
  createCanvas ( 800, 400);
  background (200);
  parada = 0;
  sumar = 255;
}

function draw() {
  let col1, col2, col3, col4;
  col1 = color(0);
  col2 = color(255);
  col3 = color(0);
  background( 255 );
  image( IlucionOptica, 0, 0 );
  stroke(0);
  strokeWeight(1);
  line(400, 0, 800, 0);
  cuadroExterior(col1, col2);
  cuadroInterior(col1, col2);

  if (mouseIsPressed && (mouseButton == LEFT)) {
    col3 = sacarcolor1();
    cuadroExterior(col3, col2);
    col4 = sacarcolor2();
    cuadroInterior(col4, col2);
    noLoop();
  } else if (mouseIsPressed && (mouseButton == RIGHT)) {
  }
}

function cuadroExterior(col3, col4) {
  let cambio = col3;
  for (let i = 400; i < 800; i += 40) {
    for (let h = 0; h < 400; h += 10) {
      if (cambio == col4) {
        cambio = col3;
        fill(cambio);
      } else {
        cambio = col4;
        if (cambio==255) {
          fill(cambio);
        } else
        {
          fill(cambio);
        }
      }
      rect(i, h, 40, 10);
    }
    if (cambio==col3) {
      cambio=col4;
    } else {
      cambio=col3;
    }
  }
}

function cuadroInterior(col5, col6) {
  let cambio = col6;
  noStroke();
  for (let i = 480; i < 720; i += 10) {
    for (let h = 90; h < 330; h += 42) {
      if (cambio == col6) {
        cambio = col5;
        fill(cambio);
      } else {
        cambio = col6;
        if (cambio==255) {
          fill(cambio);
        } else
        {
          fill(cambio);
        }
      }
      rect(i, h, 10, 40);
    }
    if (cambio==col5) {
      cambio=col6;
    } else {
      cambio=col5;
    }
  }
}

function mousePressed() {
  if (mouseIsPressed == true) {
    loop();
  }
}

function sacarcolor1() {
  let resultado = color(0, 0, random(255));
  return resultado;
}

function sacarcolor2() {
  let from = color(random(255), 102, 204);
  let to = color(204, 102, random(255));
  let interA = lerpColor(from, to, 0.33);
  return interA;
}
