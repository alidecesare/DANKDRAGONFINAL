class Soup{
  constructor(/*soupmove, soupheight, walkbox, idlebox, jumpbox, soupbox*/) {
    // this.soupmove = int(random(width/2, 7680));
    this.soupmove = int(random(width/2, width));
    this.soupheight = int(random(230, 545));
    // this.walkbox = rect(370, 370, 200, 240);
    // this.idlebox = rect(370, 370, 200, 240);
    // this.jumpbox = rect(370, 220, 200, 240);
    // this.soupbox = rect(this.soupmove, this.soupheight, 60, 60);
    // this.soupbox = point(this.soupmove, this.soupheight);
  }
  display() {
    image(soup, this.soupmove, this.soupheight);
    // rect(this.soupmove, this.soupheight, 40, 40);
  }
  move() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.soupmove = this.soupmove - 7;
      if (this.soupmove <= 570 && this.soupheight >= 230 && this.soupheight <= 545) {
        print('hit');
      }
    }
    if (keyIsDown(UP_ARROW)) {
      if (this.soupmove <= 570 && this.soupheight >= 200 && this.soupheight <= 500) {
        print('hit');
      }
    }
  }
}

//if a point on the soup circle is between the coordinates for the chracter then collect
