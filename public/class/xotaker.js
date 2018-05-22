class animal extends a {

	constructor(x, y, index) {
		super(x, y, index);
		this.eatten = 0;
	}



	move() {
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);
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
		var cord = random(emptyCord);
		if (cord) {

			this.eatten++;
			var x = cord[0];
			var y = cord[1];
			matrix[this.y][this.x] = 0;
			matrix[y][x] = 2;
			console.log(cord);
			for (var i in xotArr) {
				if (xotArr[i].x == x && xotArr[i].y == y) {
					console.log(xotArr[i], xotArr.length);

					xotArr.splice(i, 1);
					console.log(xotArr.length);
					break;
				}
			}

			this.x = x;
			this.y = y;

			if (this.eatten >= 5) {
				this.mul();
				this.eatten = 0;
			}
		}
		else {
			this.move();
		}

	}

	mul() {
		this.multiply++;

		var emptyCord = this.getDirections(0);

		var cord = random(emptyCord);
		if (cord) {
			var x = cord[0];
			var y = cord[1];

			var kendanik = new animal(x, y, this.index);
			kendaniArr.push(kendanik);

			matrix[y][x] = 2;
		}



	}
	die(x, y) {
		for (var i in kendaniArr) {
			if (kendaniArr[i].x == x && kendaniArr[i].y == y) {
				kendaniArr.splice(i, 1);
				matrix[y][x] = 0;
				break;
			}
		}

	}

}