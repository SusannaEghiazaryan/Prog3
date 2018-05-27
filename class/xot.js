var a = require("./class.js");


module.exports = class Grass extends a {

	mul() {
		this.multiply++;
		if (this.multiply >= 3) {
			var emptyCord = this.getDirections(0);
			var randomVandak = Math.floor(Math.random() * emptyCord.length);
			var cord = emptyCord[randomVandak];

			if (cord) {
				var x = cord[0];
				var y = cord[1];

				var norXot = new Grass(x, y, this.index);
				xotArr.push(norXot);

				matrix[y][x] = 1;
				this.multiply = 0;
			}
		}
		XotBazm++;
		
	}
}








