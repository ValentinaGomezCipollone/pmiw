//https://youtu.be/tX_qYOQU8k4

let mb = []; //declaro mi arreglo sin tamaño
let marcaenElTiempo=0;
//let contadorIndiceImg=0;
let texto = ['Es verano en Gravity Falls. Dipper y Mabel descubren un portal extraño en el bosque. Parece tener un gran poder… pero también un gran peligro.'];
let texto1 = ['Haz clic en las opciones para elegir qué harán los personajes. Cada decisión cambia el final.'];
let texto2 = ['LISTO PARA JUGAR ...'];
let texto3= [ ' ¿Con quién explorarás?']
let texto4 = [ '"El portal puede tener pistas de los diarios ¡quiero investigar!"']
  let texto5= [ '“No es necesario entrar \n alli, es mejor vivir en \n calma antes que \n alterar el mundo”']
  let texto6= [ '“Ooooh, ¡brilla como una fiesta galáctica! \n  Yo digo que hay que \n ir por diversión.”']
  let texto7= [ ' Dipper estudia símbolos en el portal. \n Cree que uno coincide con los diarios.']
  let texto8= [ ' “Podría abrirlo… si me animo.”']
  let texto9= [ ' Mabel encuentra un extraño dibujo en los árboles.\n  Parece un corazón… pero late.']
  let texto10= [ ' “Esto es raro y adorable. \n ¿Lo usamos para abrir el portal?”']
  let texto11= [ ' “¡Eh, chicos! Ese portal \n puede valer millones… o matarnos.”']
  let texto12= [ ' Decisión sobre el portal']
  let texto13= [ ' ¡Oh hay dos portales!  ¿Que portal decidís investigar?']
  let texto14= [ '¿Qué hacer con el portal?']
  let texto15= [ 'Portal abierto']
  let texto16= [ 'El portal se enciende. \n Una figura triangular aparece flotando…']
  let texto17= [ '“¡Al fin libre! \n Hagamos un trato, amiguito.”']
  let texto18= [ 'Portal destruido']
  let texto19= [ 'El portal se derrumba. El suelo tiembla, \n pero el peligro parece evitarse…']
  let texto20= [ '“¡Adiós fiesta  \n galáctica!”']
  let texto21= [ '“Hmm, sin portal \n no hay plata.”']
  let texto22= [ 'Trato con Bill']
  let texto23= [ '“Les ofrezco poder,  \n secretos y diversión eterna. \n  ¿Aceptan mi ayuda?”']
  let texto24= [ 'Bill toma el control. El cielo se rompe,\n monstruos invaden el pueblo.\n Ha comenzado el Weirdmageddon…']
  let texto25= [ 'Final 1: El Despertar del Caos']
  let texto26= [ 'Mabel usa la magia del diario. El portal \n  se cierra… pero el verano nunca termina\n .Un bucle infinito de fiestas y diversión.']
  let texto27= [ 'Final 2: El Verano Infinito']
  let texto28= [ 'Dipper trabaja duro . El portal  se cierra \n de forma definitiva.Encuentra un nuevo \n diario enterrado, con más misterios por resolver…']
  let texto29= [ 'Final 3: La Verdad Revelada']
  let texto30= [ 'Stan decide no acercarse al portal por  el miedo \n de obtener  nuevas respuestas o  un nuevo conflicto \n el cual pueda  llegar a destruir su mundo']
  let texto31= [ 'Final 4: el miedo ante la revelación']
  let texto32 = ['Una aventura creada por']
  let texto33= ['Paula Lacanna Moreno y Valentina Gomez Cipollone.\n Basada en Gravity Falls de Alex Hirsch.']

  let miFuente;
let pantalla = 0;
let miEleccion;
let song;
let sonidoActivo = false;


function preload () {
  mb.push(loadImage ('data/1.png') );
  mb.push(loadImage ('data/2.png') );
  mb.push(loadImage ('data/3.png') );
  mb.push(loadImage ('data/4.png') );
  mb.push(loadImage ('data/5.png') );
  mb.push(loadImage ('data/6.png') );
  mb.push(loadImage ('data/7.png') );
  mb.push(loadImage ('data/8.png') );
  mb.push(loadImage ('data/9.png') );
  mb.push(loadImage ('data/10.png') );
  mb.push(loadImage ('data/11.png') );
  mb.push(loadImage ('data/12.png') );
  mb.push(loadImage ('data/13.png') );
  mb.push(loadImage ('data/14.png') );
  mb.push(loadImage ('data/15.png') );
  mb.push(loadImage ('data/16.png') );
  mb.push(loadImage ('data/17.png') );
  mb.push(loadImage ('data/18.png') );
  mb.push(loadImage ('data/19.png') );
  mb.push(loadImage ('data/20.png') );
  mb.push(loadImage ('data/21.png') );
  mb.push(loadImage ('data/22.png') );
  mb.push(loadImage ('data/23.png') );
  mb.push(loadImage ('data/mute.png') );
  mb.push(loadImage ('data/sonido.png') );
  miFuente = loadFont('data/Caveat-VariableFont_wght.ttf');
  song = loadSound ('data/gravity-falls.mp3');
}


function setup() {
  createCanvas( 640, 480 );
  textFont(miFuente);
  imageMode( CENTER );
}

function draw() {
  background( 112, 128, 73 ); 

  if (sonidoActivo) {
    image(mb[24], 590, 30);
  } else {
    image(mb[23], 590, 30);
  }

  if (pantalla === 0) {
    image( mb[0], 80, 420 );
    image (mb [1], 130, 100);
    fill('#ffbf32');
    textSize( 30 );
    textAlign(LEFT, TOP);
    text(texto, 70, 180, 540, 300);
    fill('#ffbf32');
    noStroke();
    dibujarBoton(475, 420, 155, 50, 'Continuar');
    
  } else if (pantalla === 1) {
    image (mb [2], 80, 365);
    fill('#ffbf32');
    textSize( 30 );
    textAlign(LEFT, TOP);
    text(texto1, 70, 180, 540, 300);
    text(texto2, 200, 80, 540, 300);
    dibujarBoton(475, 420, 155, 50, 'Comenzar la aventura');
  } else if (pantalla === 2) {
    image (mb [3], 80, 320);
    image (mb [4], 480, 320);
    image (mb [5], 280, 320);
    textAlign(LEFT, TOP);
    textSize( 30 );
    text(texto3, 200, 15, 540, 300);
    dialogoDeTexto(texto4, 0, 5, 80, 195, 100);
    dialogoDeTexto(texto5, 0, 208, 70, 208, 130);
    dialogoDeTexto(texto6, 0, 425, 70, 208, 130);
    dibujarBoton(20, 440, 130, 30, 'Dipper');
    dibujarBoton(210, 440, 135, 30, 'Stan');
    dibujarBoton(420, 440, 135, 30, 'Mabel');
  } else if ( pantalla === 3) {
    image (mb [6], 150, 320);
    textAlign(LEFT, TOP);
    textSize( 30 );
    text(texto7, 120, 30, 540, 300);
    dialogoDeTexto(texto8, 0, 300, 200, 195, 100);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  } else if ( pantalla === 4) {
    image (mb [8], 150, 320);
        dialogoDeTexto(texto11, 0, 200, 120, 250, 120);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  } else if ( pantalla === 5) {
    image (mb [7], 150, 320);
    textAlign(LEFT, TOP);
    textSize( 30 );
        text(texto8, 170, 80, 540, 300);
        dialogoDeTexto(texto10, 0, 280, 200, 250, 120);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  } else if ( pantalla === 6) {
    image (mb [9], 320, 250);
    textAlign(LEFT, TOP);
    textSize( 30 );
    text(texto12, 200, 15, 540, 300);
    dibujarBoton(50, 430, 205, 40, 'Investigar mas sobre el portal ');
    dibujarBoton(390, 430, 205, 40, 'Ignorar el portal ');
  } else if ( pantalla === 7) {
    image (mb [10], 170, 250);
    image (mb [11], 480, 250);
     textAlign(LEFT, TOP);
    textSize( 30 );
     text(texto13, 50, 80, 600, 300);
    dibujarBoton(70, 350, 205, 40, 'El portal del espacio');
    dibujarBoton(370, 350, 205, 40, 'Portal inframundo');
  } else if ( pantalla === 8) {
    image (mb [15], 170, 250);
    image (mb [16], 480, 250);
    textAlign(LEFT, TOP);
    textSize( 30 );
     text(texto14, 200, 80, 600, 300);
    dibujarBoton(70, 350, 205, 40, ' Abrir el portal ');
    dibujarBoton(370, 350, 205, 40, 'Destruirlo');
  } else if ( pantalla === 9) {
    image (mb [17], 320, 280);
   textAlign(LEFT, TOP);
    textSize( 30 );
     text(texto15, 250, 15, 600, 300);
    text(texto16, 120, 50, 630, 300);
    dialogoDeTexto(texto17, 0, 80, 150, 150, 120);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  } else if ( pantalla === 10) {
    image (mb [18], 315, 240);
    image (mb [19], 140, 370);
    textAlign(LEFT, TOP);
    textSize( 30 );
     text(texto18, 250, 5, 600, 300);
    text(texto19, 120, 50, 630, 300);
    dialogoDeTexto(texto20, 0, 200, 280, 150, 80);
     dialogoDeTexto(texto21, 0, 20, 200, 150, 100);
    dibujarBoton(475, 420, 155, 50, 'Fin');
  } else if ( pantalla === 11) {
    image (mb [20], 245, 240);
     textAlign(LEFT, TOP);
    textSize( 30 );
     text(texto22, 250, 5, 600, 300);
      dialogoDeTexto(texto23, 0, 40, 60, 150, 130);
    dibujarBoton(420, 100, 200, 40, 'Aceptar trato ');
    dibujarBoton(420, 350, 200, 40, 'Rechazar trato');
  } else if ( pantalla === 12) {
    image (mb [21], 315, 240);
     textAlign(LEFT, TOP);
    textSize( 30 );
     text(texto24, 150, 3, 600, 300);
     text(texto25, 150, 420, 600, 300);
    dibujarBoton(475, 420, 155, 50, 'Fin');
  } else if ( pantalla === 13) {
    image (mb [12], 320, 250);
    textAlign(LEFT, TOP);
    textSize( 30 );
     text(texto28, 100, 3, 600, 300);
     text(texto29, 150, 435, 600, 300);
    dibujarBoton(475, 420, 155, 50, 'Fin');
  } else if ( pantalla === 14) {
    image (mb [13], 320, 250);
    textAlign(LEFT, TOP);
    textSize( 30 );
     text(texto30, 60, 3, 600, 300);
     text(texto31, 110, 425, 600, 300);
    dibujarBoton(475, 420, 155, 50, 'Fin');
  } else if ( pantalla === 15) {
    image (mb [14], 320, 250);
     textAlign(LEFT, TOP);
    textSize( 30 );
     text(texto26, 100, 3, 600, 300);
     text(texto27, 180, 420, 600, 300);
    dibujarBoton(475, 420, 155, 50, 'Fin');
  } else if ( pantalla === 16) {
    image (mb [22], 320, 230);
     textAlign(LEFT, TOP);
    textSize( 30 );
     text(texto32, 200, 3, 600, 300);
     text(texto33, 25, 398, 600, 300);
    dibujarBoton(464, 430, 155, 35, 'Reiniciar');
  }
}


function dibujarBoton(x, y, ancho, alto, texto) {
  fill('#576438');
  stroke('#384027');
  rect(x, y, ancho, alto);
  textSize( 20 );
  fill('#ffbf32');
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}

function dialogoDeTexto(textoArray, indice, x, y, ancho, alto) {
  fill('#576438');
  rect(x, y, ancho, alto, 10, 15, 10, 0);
  textSize(22);
  fill('#ffbf32');
  textAlign(LEFT, TOP);
  text(textoArray[indice], x + 10, y + 10, ancho - 20, alto - 20);
}

function mousePressed() {
  if (mouseX > 570 && mouseX < 610 && mouseY > 10 && mouseY < 50) {
    sonidoActivo = !sonidoActivo;
    if (sonidoActivo) {
      song.stop();
      song.play();
    } else {
      song.stop();
    }
  }
  if (pantalla === 0) {
    if (mouseX > 510 && mouseX < 635 && mouseY > 420 && mouseY < 470) {
      pantalla = 1;
      song.play();
      sonidoActivo = !sonidoActivo;
    }
  } else if (pantalla === 1) {
    if (mouseX > 510 && mouseX < 635 && mouseY > 420 && mouseY < 470) {
      pantalla = 2;
    }
  } else if (pantalla === 2) {
    if (mouseX > 20 && mouseX < 150 && mouseY > 440 && mouseY < 470) {
      pantalla = 3;
    } else if (mouseX > 210 && mouseX < 345 && mouseY > 440 && mouseY < 470) {
      pantalla = 4;
    } else if (mouseX > 420 && mouseX < 555 && mouseY > 440 && mouseY < 470) {
      pantalla = 5;
    }
  } else if (pantalla === 3) {
    if (mouseX > 510 && mouseX < 635 && mouseY > 420 && mouseY < 470) {
      pantalla = 6;
      miEleccion = 1;
    }
  } else if (pantalla === 4) {
    if (mouseX > 510 && mouseX < 635 && mouseY > 420 && mouseY < 470) {
      pantalla = 6;
      miEleccion = 2;
    }
  } else if (pantalla === 5) {
    if (mouseX > 510 && mouseX < 635 && mouseY > 420 && mouseY < 470) {
      pantalla = 6;
      miEleccion = 3;
    }
  } else if (pantalla === 6) {
    if (mouseX > 50 && mouseX < 255 && mouseY > 430 && mouseY < 470) {
      pantalla = 7;
    } else if (mouseX > 390 && mouseX < 595 && mouseY > 430 && mouseY < 470) {
      if (miEleccion === 1) {
        pantalla = 13;
      } else if (miEleccion === 2) {
        pantalla = 14;
      } else if (miEleccion === 3) {
        pantalla = 15;
      }
    }
  } else if (pantalla === 7) {
    if (mouseX > 70 && mouseX < 275 && mouseY > 350 && mouseY < 390) {
      pantalla = 8;
    } else if (mouseX > 370 && mouseX < 575 && mouseY > 350 && mouseY < 390) {
      pantalla = 8;
    }
  } else if (pantalla === 8) {
    if (mouseX > 70 && mouseX < 275 && mouseY > 350 && mouseY < 390) {
      pantalla = 9;
    } else if (mouseX > 370 && mouseX < 575 && mouseY > 350 && mouseY < 390) {
      pantalla = 10;
    }
  } else if (pantalla === 9) {
    if (mouseX > 510 && mouseX < 635 && mouseY > 420 && mouseY < 470) {
      pantalla = 11;
    }
  } else if (pantalla === 11) {
    if (mouseX > 420 && mouseX < 620 && mouseY > 100 && mouseY < 140) {
      pantalla = 12;
    } else if (mouseX > 420 && mouseX < 620 && mouseY > 350 && mouseY < 390) {
      if (miEleccion === 1) pantalla = 13;
      else if (miEleccion === 2) pantalla = 14;
      else if (miEleccion === 3) pantalla = 15;
    }
  } else if (pantalla === 10 || pantalla === 12 || pantalla === 13 || pantalla === 14 || pantalla === 15) {
    if (mouseX > 510 && mouseX < 635 && mouseY > 420 && mouseY < 470) {
      pantalla = 16;
    }
  } else if (pantalla === 16) {
    if (mouseX > 464 && mouseX < 619 && mouseY > 430 && mouseY < 465) {
      pantalla = 0;
      miEleccion = null;
      song.stop();
      sonidoActivo = false;
    }
  }
}
