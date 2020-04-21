var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
canvas.width= canvas.scrollWidth;
canvas.height= canvas.scrollHeight;
context.height= context.scrollWidth;
context.height= context.scrollHeight;

//gelas tertutup
context.beginPath();
context.moveTo(170,80);
context.rect(188,150,130,200);
context.fillStyle = 'salmon';
context.fill();

context.beginPath();
context.moveTo(170,80);
context.rect(188,140,130,30);
context.fillStyle = 'black';
context.fill();

context.beginPath();
context.moveTo(170,80);
context.rect(245,120,20,20);
context.fillStyle = 'salmon';
context.fill();
