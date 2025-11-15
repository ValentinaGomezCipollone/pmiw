// imagenes, arrays, manejo del tiempo con millis(), spritesheet
// estos contenidos los pueden aplicar a su tpf etapa 1 en:
// - cambio de pantallas por tiemp0
// - carga de botones en imagenes y efectos over/clicx

let mb = [];  //declaro mi arreglo sin tamano

let marcaEnElTiempo = 0;
let contadorIndiceImg = 0;

function preload() {  // aqui empieza a contar millis()
  //aca cargo imagenes, sonidos, txt y otros archivos externos

  mb.push( loadImage('/assets/mb00.png') );  //indice 0
  mb[1] = loadImage('/assets/mb01.png');     //indice 1    //otra manera de carga
  mb.push( loadImage('/assets/mb02.png') );  //indice 2
}

function setup() {
  createCanvas( 600, 600 );

  textSize( 40 );
  imageMode( CENTER );  //cambio desde donde se posiciona la imagen xy
}

function draw() {
  background( 200 );

  //image( mb[0], 0, 0 );
  //image( mb[1], 120, 0 );
  //image( mb[2], 240, 0 );

  //for( let i = 0; i < mb.length ; i++ ){  // mb.length devuelve el largo del arreglo = 3
  //  image( mb[i], i*120, 0 );
  //}

  text( int( millis() ) + " MILISEGUNDOS", 100, 500 );           //milisegundos
  text( int( millis() / 1000 ) + " SEGUNDOS", 100, 550 );    //segundos

  let segundos = int( millis() / 1000 );  //segundos enteros, sin decimales

  // animar el spritesheet de mario bros cambiando la imagen cada 1 segundo
  //image( mb[ segundos % 3 ], 300, 300 );

  // otra manera: una mini/logica de estados para animar el personaje
  if ( (millis() - marcaEnElTiempo) > 200 ) {  //paso medio segundo
    //
    marcaEnElTiempo = millis();
    //
    contadorIndiceImg++;
    if ( contadorIndiceImg == mb.length ) {  //similar a usar % modulo
      contadorIndiceImg = 0 ;
    }
  }
  image( mb[ contadorIndiceImg ], frameCount%width, 300 );
}
