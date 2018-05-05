var matrix =[[0,2,1,0,1,0,0],
            [3,2,1,0,0,0,0],
            [2,1,1,2,1,0,2],
            [0,0,1,2,0,2,1],
            [1,1,0,1,1,2,1],
            [0,0,0,0,2,0,2],
            [1,2,1,1,0,0,0],
            [1,0,1,0,2,0,2],
            ];
var x = matrix[0].length;
var y = matrix.length ;
var side = 120;
var xotArr = [];
var kendaniArr = [];
var gishatichArr = [];


function setup() 
{
    frameRate(1);
    createCanvas(x * side, y * side);
    background('#acacac');

    for(var i = 0; i < matrix.length; i++)
    {
      for(var j = 0; j < matrix[i].length; j++)
      {
        if(matrix[i][j] == 1){
          var xotik  = new Grass(j, i, 1);
          xotArr.push(xotik);
        }
        else if(matrix[i][j] == 2)
        {
          var kendanik  = new animal(j, i, 2);
          kendaniArr.push(kendanik);
        }
      
        else if(matrix[i][j] == 3)
        {
          var gishatichik = new gishatich(j, i, 3);
          gishatichArr.push(gishatichik);
        }
      }
    }
        
}
function draw() 
{
  background('#acacac');
  for(var i in xotArr)
  {
   xotArr[i].mul();
  }
  for(var i in kendaniArr)
  {
    kendaniArr[i].eat();
  }
  for(var i in gishatichArr)
  {
    gishatichArr[i].eat();
  }

  
  for(var i = 0; i < matrix.length; i++)
  {
    for(var j = 0; j < matrix[i].length; j++)
    {
	
      if(matrix[i][j] == 1)
      {
        fill("green");
        rect(j * side, i * side, side, side);
      }
	    else if(matrix[i][j] == 2)
      {
		    fill("yellow");
	      rect(j * side, i * side, side, side); 
	    }
      else if(matrix[i][j] == 3)
      {
		    fill("red");
	      rect(j * side, i * side, side, side); 
	    }
     
	  
    }
  }
}