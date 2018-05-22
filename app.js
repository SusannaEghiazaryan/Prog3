var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


matrix = [];
kendaniArr = [];
gishatichArr = [];
xotArr = [];
xotqanaktokos = 50;
kendaniqanaktokosov = 45;
gishatichqanaktokosov = 5;



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


background('#acacac');
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[0].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            xotArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var an = new animal(x, y, 1);
            kendaniArr.push(an);
        }
        else if (matrix[y][x] == 3) {
            var gish = new gishatich(x, y, 1);
            gishatichArr.push(gish);
        }
    }
}


setInterval()
{
    for (var i in xotArr) {
        xotArr[i].mul();
    }
    for (var i in kendaniArr) {
        kendaniArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
}


