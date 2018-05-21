var matrix = [];
var n = 50;
var kendaniArr = [];
var gishatichArr = [];
var xotArr = [];
var xotqanaktokos = 50;
var kendaniqanaktokosov = 45;
var gishatichqanaktokosov = 5;
var side = 15;

//var x = matrix[0].length;




for (var i = 0; i < n; i++) {
  matrix[i] = [];
  for (var j = 0; j < n; j++) {
    matrix[i][j] = 0;

  }
}


var xotqanak = Math.round((n * n * xotqanaktokos) / 100);
while (xotqanak > 0) {
  var x = Math.floor(Math.random() * n);
  var y = Math.floor(Math.random() * n);
  if (matrix[y][x] == 0) {
    xotqanak--;
    matrix[y][x] = 1;
  }

}

var kendaniqanak = Math.round((n * n * kendaniqanaktokosov) / 100);
while (kendaniqanak > 0) {
  var x = Math.floor(Math.random() * n);
  var y = Math.floor(Math.random() * n);
  if (matrix[y][x] == 0) {
    kendaniqanak--;
    matrix[y][x] = 2;
  }
}


var gishatichqanak = Math.round((n * n * gishatichqanaktokosov) / 100);
while (gishatichqanak > 0) {
  var x = Math.floor(Math.random() * n);
  var y = Math.floor(Math.random() * n);
  if (matrix[y][x] == 0) {
    gishatichqanak--;
    matrix[y][x] = 3;
  }

}


function setup() {
  frameRate(1);
  createCanvas(n * side, n * side);
  background('#acacac');

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[j][i] == 1) {
        var xotik = new Grass(j, i, 1);
        xotArr.push(xotik);

      }
      else if (matrix[i][j] == 2) {
        var kendanik = new animal(j, i, 2);
        kendaniArr.push(kendanik);

      }

      else if (matrix[i][j] == 3) {
        var gishatichik = new gishatich(j, i, 3);
        gishatichArr.push(gishatichik);
      }
    }

  }

}
function draw() {
  background('#acacac');
  for (var i in xotArr) {
    xotArr[i].mul();
  }
  for (var i in kendaniArr) {
    kendaniArr[i].eat();
  }
  for (var i in gishatichArr) {
    gishatichArr[i].eat();
  }


  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {

      if (matrix[i][j] == 1) {
        fill("green");
        rect(j * side, i * side, side, side);

      }
      else if (matrix[i][j] == 2) {
        fill("yellow");
        rect(j * side, i * side, side, side);
      }
      else if (matrix[i][j] == 3) {
        fill("red");
        rect(j * side, i * side, side, side);
      }
    }
  }
}

