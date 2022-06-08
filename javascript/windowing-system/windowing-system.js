// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (width, height) {
  this.width = width;
  this.height = height;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    this.size.width =
      newSize.width > 1
        ? newSize.width + this.position.x < this.screenSize.width
          ? newSize.width
          : this.screenSize.width - this.position.x
        : 1;
    this.size.height =
      newSize.height > 1
        ? newSize.height + this.position.y < this.screenSize.height
          ? newSize.height
          : this.screenSize.height - this.position.y
        : 1;
  }

  move(newPosition) {
    this.position.x =
      newPosition.x > 0
        ? newPosition.x + this.size.width < this.screenSize.width
          ? newPosition.x
          : this.screenSize.width - this.size.width
        : 0;
    this.position.y =
      newPosition.y > 0
        ? newPosition.y + this.size.height < this.screenSize.height
          ? newPosition.y
          : this.screenSize.height - this.size.height
        : 0;
  }
}

export function changeWindow(programWindow) {
  programWindow.move(new Position());
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));

  return programWindow;
}
