var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
function square(){
  var squareArray=[[0,0][0,1][1,1][1,0],[0,0]];
  for(var i = 0; i < squareArray.length; i++){
    x1 = squareArray[i[0]];
    x2 = squareArray[i+1[0]];
    y1 = squareArray[i[1]];
    y2 = squareArray[i+1[1]];
    ctx.moveTo(x1*50,y1*50);
    ctx.lineTo(x2*50,y2*50);
    ctx.stroke();
  }
}
