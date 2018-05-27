var a = require("./class.js");

module.exports = class gishatich extends a {
	constructor(x, y, index) {
		super(x, y, index);
		this.x = x;
		this.y = y;

		this.multiply = 0;
		this.energy = 5;
		this.eatten = 0;

	}
	newDirections() {
		this.directions = [
			[this.x - 2, this.y - 2],
			[this.x - 1, this.y - 2],
			[this.x, this.y - 2],
			[this.x + 1, this.y - 2],
			[this.x + 1, this.y - 2],

			[this.x - 2, this.y - 1],
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x, this.y - 2],

			[this.x + 2, this.y - 2],
			[this.x - 2, this.y],
			[this.x + 2, this.y],
			[this.x - 2, this.y + 2],
			[this.x, this.y + 2],
			[this.x + 2, this.y + 2],

			[this.x - 1, this.y - 2],
			[this.x, this.y - 2],
			[this.x + 1, this.y - 2],
			[this.x - 2, this.y],
			[this.x + 2, this.y],
			[this.x - 1, this.y + 2],
			[this.x, this.y + 2],
			[this.x + 1, this.y + 2]
		];
	}

	getDirections(t) {
		this.newDirections();
		var found = [];

		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == t) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}
	move() {

		var emptyCord = this.getDirections(0);
		var randomVandak = Math.floor(Math.random() * emptyCord.length);
		var cord = emptyCord[randomVandak];
		if (cord) {
			var x = cord[0];
			var y = cord[1];

			matrix[this.y][this.x] = 0;
			matrix[y][x] = 3;

			this.x = x;
			this.y = y;

		}
		if (weather != "winter") {
			this.energy--;
		}
		if (this.energy <= 0 && weather != "winter") {

			this.die();
		}

	}



	eat() {
		var emptyCord = this.getDirections(2);
		var randomVandak = Math.floor(Math.random() * emptyCord.length);
		var cord = emptyCord[randomVandak];

		if (cord) {
			this.energy = 5;
			this.eatten++;
			var x = cord[0];
			var y = cord[1];
			matrix[this.y][this.x] = 0;
			matrix[y][x] = 3;
			this.x = x;
			this.y = y;
			for (var i in kendaniArr) {
				if (kendaniArr[i].x == x && kendaniArr[i].y == y) {
					kendaniArr.splice(i, 1);
				}
			}

			if (this.eatten == 4 && weather == "spring") {
				this.mul();
				this.eatten = 0;
			}
			else if (this.eatten == 6 && weather != "spring") {
				this.mul();
				this.eatten = 0;

			}

		}
		else if (weather != "winter") {
			this.move();
		}
		GishKeravKend++;
	}


	mul() {
		this.multiply++;

		var emptyCord = this.getDirections(0);
		var randomVandak = Math.floor(Math.random() * emptyCord.length);
		var cord = emptyCord[randomVandak];
		if (cord) {
			var x = cord[0];
			var y = cord[1];

			var poghos = new gishatich(x, y, this.index);
			gishatichArr.push(poghos);

			matrix[y][x] = 1;
		}
		GishBazm++;
	}
	die() {

		for (var i in gishatichArr) {
			if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {

				gishatichArr.splice(i, 1);
				matrix[this.y][this.x] = 0;
				break;
			}
		}

	}
}
