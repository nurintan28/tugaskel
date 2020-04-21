const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
var rotation = 0;


function shapeOpen() {
    
    shapeBody1();

    if(rotation < Math.PI/2) {
        rotation += 0.02;
        requestAnimationFrame(shapeOpen);
    }
}

function shapeClose() {
    
    shapeBody1();

    if(rotation > 0) {
        rotation -= 0.02;
        requestAnimationFrame(shapeClose);
    }
}

function shapeBody1() {
    ctx.clearRect(0, 0, canvas.width, canvas.height/2 + 5);
    ctx.clearRect(canvas.width/2, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.fillStyle = 'black';
    ctx.translate(90, 80);
    ctx.scale(-1, -1);
    ctx.rotate(rotation);
    ctx.fillRect(15, 4, 9, 3);
    ctx.fillRect(0, 0, 40, 5);
    ctx.restore();
}

function shapeBody() {
    ctx.save();
    ctx.fillStyle = 'grey';
    ctx.beginPath();
    ctx.moveTo(35, 135);
    // ctx.lineTo(35, 80);
    // ctx.lineTo(50, 80);
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 80);
    ctx.lineTo(50, 155);
    ctx.lineTo(90, 160);
    ctx.lineTo(90, 80);
    ctx.lineTo(50, 80);
    ctx.fillStyle = 'salmon';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(90, 80);
    // ctx.lineTo(105,80);
    // ctx.lineTo(105,135);

    ctx.lineWidth = 3;
    
    
    ctx.stroke();
    ctx.restore();
}

openBtn.addEventListener('click', function() {
    shapeOpen();
});

closeBtn.addEventListener('click', function() {
    shapeClose();
});


shapeBody1();
shapeBody();