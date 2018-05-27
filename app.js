var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set("port", process.env.PORT || 3000);
app.use(express.static("public"));
app.get('/', function (req, res) {
    res.redirect('public/index.html');
});
server.listen(app.get("port"), function () { });

var a = require("./class/class.js");
var Grass = require("./class/xot.js");
var gishatich = require("./class/gishatich.js");
var animal = require("./class/xotaker.js");

matrix = [];
kendaniArr = [];
gishatichArr = [];
xotArr = [];
var xotqanaktokos = 60;
var kendaniqanaktokosov = 15;
var gishatichqanaktokosov = 2;
n = 50;
XotBazm=0;
KendBazm=0;
GishBazm=0;
KendKeravXot=0;
GishKeravKend=0;
KendMerav=0;
var obj =
{
    "XotBazm":[],
    "KendBazm":[],
    "GishBazm":[],
    "KendKeravXot":[],
    "GishKeravKend":[],
    "KendMerav":[]
}

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



exanakNum = 0;
weather = 'winter';
function funkcia() {

    exanakNum++;

    if (exanakNum % 24 == 0) {
        weather = 'winter';
    }
    else if (exanakNum % 24 == 6) {
        weather = 'spring';
    }
    else if (exanakNum % 24 == 12) {
        weather = 'summer'
    }
    else if (exanakNum % 24 == 18) {
        weather = 'autumn';
    }
    io.sockets.emit("send matrix", matrix);
    io.sockets.emit("weather", weather);
    console.log(weather);

    if (weather != 'winter') {
        for (var i in xotArr) {
            xotArr[i].mul();
        }
    }

    for (var i in kendaniArr) {
        kendaniArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
var fs = require('fs');
var js=JSON.stringify(obj, null," ");
if(exanakNum%6==0)
{
    obj.XotBazm.push(XotBazm);
    obj.KendBazm.push(KendBazm);
    obj.GishBazm.push(GishBazm);
    obj.GishKeravKend.push(GishKeravKend);
    obj.KendKeravXot.push(KendKeravXot);
    obj.KendMerav.push(KendMerav);
    fs.writeFile("info.json",js);
    console.log(obj);
}

}
setInterval(funkcia, 1500);
io.on('connection', function () {

});
