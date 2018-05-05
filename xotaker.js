class animal{
	constructor(x,y,index){
		
		this.x = x;
		this.y = y;
		this.multiply = 0;
		this.energy=5;
		
}
newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
		];
	}
getDirections(t){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}
move(){ 
	//console.log(this.energy);
	var emptyCord = this.getDirections(0);
	var cord = random(emptyCord);
	//console.log(cord);
		if(cord){
			--this.energy;
			this.eatten = 0;
			var x = cord[0];
			var y = cord[1];

			matrix[this.y][this.x] = 0;
			matrix[y][x] = 2;

			this.x = x;
			this.y = y;
			if(this.energy==0){
				//console.log(x,y);
				//console.log("oxormi");
				this.die(x,y);
			}
		}
  }

			

eat(){ 
	var emptyCord = this.getDirections(1);
	var cord = random(emptyCord);
	//console.log(cord);
		if(cord){
			this.energy = 5;
			this.eatten++;
			var x = cord[0];
			var y = cord[1];
			matrix[this.y][this.x] = 0;
			matrix[y][x] = 2;
			this.x = x;
			this.y = y; 
			for (var i in xotArr)
			{
				if(xotArr[i].x==x && xotArr[i].y==y)
				{
					xotArr.splice(i, 1);
				}
			}
			if(this.eatten == 5){
				this.mul();
				this.eatten = 0;

			}

		}
		else {
			this.move();
		}
		
  }

  mul()
  {
		this.multiply++;
		
		var emptyCord = this.getDirections(0);

		var cord = random(emptyCord);
		if(cord)
		{
			var x = cord[0];
			var y = cord[1];

			var kendanik = new animal(x,y,this.index);
			kendaniArr.push(kendanik);

			matrix[y][x] = 1;
		}

	}
	die(x,y)
	{
		for (var i in kendaniArr)
		{//console.log(x,y);
			if(kendaniArr[i].x==x && kendaniArr[i].y==y)
			{
				kendaniArr.splice(i, 1);
				matrix[y][x] = 0;
			}
		}
	}
}