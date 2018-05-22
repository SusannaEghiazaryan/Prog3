var n = 50;
var side = 15;
var x = matrix[0].length;


function setup() {
  frameRate(1);
  createCanvas(n * side, n * side);
}
function draw() {
  background('#acacac');
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 2) {
        fill("yellow");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 3) {
        fill("red");
        rect(x * side, y * side, side, side);
      }
    }
  }

}

