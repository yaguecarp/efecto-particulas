class Bola {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.dirX = Math.random() * 2 - 1;
    this.dirY = Math.random() * 2 - 1;
    this.velocity = 1;
  }

  dibujar() {
    ctx.fillStyle = 'white'
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.closePath();
  }

  mover() {
    this.x += this.dirX * this.velocity;
    this.y += this.dirY * this.velocity;

    if (this.x + this.radius > canvas.width || this.x < 0){
        this.dirX *= -1;
    }
    if (this.y + this.radius > canvas.height || this.y < 0){
        this.dirY *= -1;
    }
  }
}
