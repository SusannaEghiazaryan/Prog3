var a = require("./class.js");

module.exports = class animal extends a {

	constructor(x, y, index) {
		super(x, y, index);
		this.eatten = 0;
	}



	move() {
		var emptyCord = this.getDirections(0);
		var randomVandak = Math.floor(Math.random() * emptyCord.length);
		var cord = emptyCord[randomVandak];
		if (cord) {
			--this.energy;
			this.eatten = 0;
			var x = cord[0];
			var y = cord[1];

			matrix[this.y][this.x] = 0;
			matrix[y][x] = 2;

			this.x = x;
			this.y = y;
			if (this.energy <= 0) {
				this.die(x, y);
			}
		}

	}



	eat() {
		var emptyCord = this.getDirections(1);
		var randomVandak = Math.floor(Math.random() * emptyCord.length);
		var cord = emptyCord[randomVandak];
		if (cord) {

			this.eatten++;
			var x = cord[0];
			var y = cord[1];
			matrix[this.y][this.x] = 0;
			matrix[y][x] = 2;

			for (var i in xotArr) {
				if (xotArr[i].x == x && xotArr[i].y == y) {
					xotArr.splice(i, 1);
					break;
				}
			}

			this.x = x;
			this.y = y;

			if (this.eatten >= 5 && weather == 'winter') {
				this.mul();
				this.eatten = 0;
			}
			else if (this.eatten >= 1 && (weather == 'spring' || weather == 'autumn')) {
				this.mul();
				this.eatten = 0;
			}
			else if (this.eatten >= 3 && weather == "summer") {
				this.mul();
				this.eatten = 0;
			}
		}
		else {
			this.move();
		}
		KendKeravXot++;
	}

	mul() {
		this.multiply++;
		var emptyCord = this.getDirections(0);
		var randomVandak = Math.floor(Math.random() * emptyCord.length);
		var cord = emptyCord[randomVandak];
		if (cord) {
			var x = cord[0];
			var y = cord[1];

			var kendanik = new animal(x, y, this.index);
			kendaniArr.push(kendanik);

			matrix[y][x] = 2;
		}
		KendBazm++;
	}
	die(x, y) {
		for (var i in kendaniArr) {
			if (kendaniArr[i].x == x && kendaniArr[i].y == y) {
				kendaniArr.splice(i, 1);
				matrix[y][x] = 0;
				break;
			}
		}
		KendMerav++;
	}

}