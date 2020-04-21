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

//Gelas Terbuka dan Tertutup
context.beginPath();
context.moveTo(170,80);
context.rect(500,150,130,200);
context.fillStyle = 'salmon';
context.fill();

context.beginPath();
context.moveTo(170,80);
context.rotate(75 * Math.PI/360);
context.rect(462,-293,130,30);
context.fillStyle = 'black';
context.fill();

context.beginPath();
context.moveTo(170,80);
context.rect(520,-305,20,20);
context.fillStyle = 'salmon';
context.fill();

//gelas terbuka
context.fillStyle='salmon';
context.strokeStyle='salmon';
context.rotate(-75 * Math.PI/360);
context.fillRect(800,150,130,200);

context.fillStyle = 'black';
context.translate(170,80);
context.rotate(Math.PI/2);
context.rect(700,-450,130,30);
context.fillRect(-60,-760,130,30);
context.strokeStyle = 'black';
context.strokeRect(-60,-760,130,30);

context.fillStyle = 'salmon';
context.fillRect(-3,-780,20,20);
context.strokeStyle = 'salmon';
context.strokeRect(-3,-780,20,20);
