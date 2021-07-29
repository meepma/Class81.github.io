Canvas=document.getElementById("MyCanvas");
ctx=Canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="coral";
ctx.lineWidth=5;
ctx.arc(200,400,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(250,350,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(300,400,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(350,350,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="purple";
ctx.lineWidth=5;
ctx.arc(400,400,40,0,2*Math.PI);
ctx.stroke();