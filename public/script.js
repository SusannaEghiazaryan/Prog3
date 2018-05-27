var side = 15;
var n = 50;
var col = '##e6e6e6';
ashun = false;
dzmer = false;
function setup() {
  socket = io.connect('http://localhost:3000');
  frameRate(1);
  createCanvas(n * side, n * side);
  socket.on("send matrix", nkarel);
  socket.on("weather", function (weather) {

    if (weather == 'winter') {
      dzmer = true;
      col = "#e6e6e6"
    }
    else if (weather == 'spring') {
      col = "#99ff99"
    }
    else if (weather == 'summer') {
      col = "#ffff99"
    }
    else if (weather == 'autumn') {
      col = "#ffcc66"
      ashun = true;
    }
  });



}
function nkarel(matrix) {
  background(col);

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[0].length; x++) {

      if (matrix[y][x] == 1 && ashun == true) {
        fill("#804000");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 1 && dzmer == true) {
        fill("#ffffff");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 1) {
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

