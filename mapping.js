var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
function square(){
  var squareArray=[[0,0][0,1][1,1][0,1]];
  for(var i = 0; i < 4; i++){
    x1 = squareArray[i[0]];
    x2 = squareArray[i[1]];
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,1y2);
    ctx.stroke();
  }
}
