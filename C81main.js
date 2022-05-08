canvas = document.getElementById("myCanvas");

color = "yellow";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(300 , 200 , 40 ,0 , 2 * Math.PI);
ctx.stroke();


color = "blue";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(250, 150 , 40 ,0 , 2 * Math.PI);
ctx.stroke();


color = "black";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(350, 150 , 40 ,0 , 2 * Math.PI);
ctx.stroke();


color = "green";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(400, 200 , 40 ,0 , 2 * Math.PI);
ctx.stroke();

color = "red";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(450, 150 , 40 ,0 , 2 * Math.PI);
ctx.stroke();








function my_mousedown(e)
{
color = document.getElementById("color").value;
console.log(color);


}
