class Gnomo {
  constructor(imgGno, x, y) {
    this.img = imgGno;
    this.x = x;
    this.y = y;
    this.velocidad = random(3, 6);
    this.ancho = this.img.width;
    this.alto = this.img.height;

    this.tam = max(this.ancho, this.alto);
    this.activo = true;
  }

  correr() {
    if (!this.activo) return;
    this.x -= this.velocidad;
    image(this.img, this.x, this.y);
  }


  fueraDePantalla() {
    return this.x < -50;
  }
}
