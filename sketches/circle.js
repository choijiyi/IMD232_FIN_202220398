class Circle {
    constructor(x, y, diameter, speed, acc) {
      this.x = x;
      this.y = y;
      this.diameter = diameter;
      this.speed = speed;
      this.acc = acc;

      colorMode(RGBA, 255, 255, 255, 1);

      this. r = random(0);
      this. g = random(150);
      this. b = random(200);
      this. a = random(0.5);
    }

    update() {
        this.speed += this.acc;
        this.y -= this.speed;
      }

    
    display() {
        fill(this.r, this.g, this.b, this.a);
        ellipse(this.x, this.y, this.diameter);
    }
}