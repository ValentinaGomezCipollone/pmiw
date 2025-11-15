class Boton {
  constructor(x, y, w, h, texto) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
  }

  dibujar() {
    fill(0, 0, 0, 150);
    rect(this.x, this.y, this.w, this.h, 10);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(26);
    text(this.texto, this.x + this.w/2, this.y + this.h/2);
  }

  estaPresionado(mx, my) {
    return (
      mx > this.x && mx < this.x + this.w && my > this.y &&  my < this.y + this.h);
  }
}
