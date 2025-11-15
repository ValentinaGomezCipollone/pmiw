class Dipper {

  constructor(img, x, y, imgSalto, sonidoSalto) {
    this.mb = img;
    this.img3= imgSalto;
    this.x = x;
    this.y = y;
    this.velY = 0;
    this.gravedad = 0.8;
    this.saltando = false;
    this.suelo = y;
    this.contadorIndiceImg = 0;
    this.marcaEnElTiempo = 0;
    this.tam = 60;
    this.sonidoSalto = sonidoSalto;
  }

  dibujarDipper() {
    if (this.saltando) {
      image( this.img3, this.x, this.y);
    } else {

      if ( (millis() - this.marcaEnElTiempo) > 200 ) {
        //
        this.marcaEnElTiempo = millis();
        //
        this.contadorIndiceImg++;
        if ( this.contadorIndiceImg == this.mb.length ) {
          this.contadorIndiceImg = 0 ;
        }
      }
      image( this.mb[ this.contadorIndiceImg ], this.x, this.y);
    }
  }



  actualizar() {
    if (this.saltando) {
      this.velY += this.gravedad;
      this.y += this.velY;
      if (this.y >= this.suelo) {
        this.y = this.suelo;
        this.velY = 0;
        this.saltando = false;
      }
    }
  }

  saltar() {
    if (!this.saltando) {
      this.saltando = true;
      this.velY = -20;
      this.sonidoSalto.play();
    }
  }
}
