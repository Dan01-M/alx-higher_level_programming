#!/usr/bin/node
#"write the code program"
class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
    }
  }
}

module.exports = Rectangle;
