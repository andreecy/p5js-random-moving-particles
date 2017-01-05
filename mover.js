function Mover(x,y) {
  this.size = random(5,10);
  this.pos = createVector(x,y);
  this.vel = createVector(random(-1,1),random(-1,1)); //arah gerak random

  this.update = function() {
    //Teleport effect
    if (this.pos.x < -this.size){
      this.pos.x = width;
    }
    if(this.pos.x > width+this.size) {
      this.pos.x = -this.size;
    }
    if (this.pos.y < -this.size){
      this.pos.y = height;
    }
    if(this.pos.y > height+this.size) {
      this.pos.y = -this.size;
    }

    // comment teleport effect then uncomment this for bounce effect
    // if (this.pos.x > width-this.size || this.pos.x < this.size) {
    //     this.vel.x *= -1;
    // }
    // if (this.pos.y > height-this.size || this.pos.y < this.size) {
    //     this.vel.y *= -1;
    // }
    this.pos.add(this.vel);
  }

  this.show = function() {
    fill(126,160,214,90);
    ellipse(this.pos.x,this.pos.y,this.size,this.size);
  }
}
