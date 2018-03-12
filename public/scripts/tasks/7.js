var canvas, context,
    state = "menu",
    timer, score,
    timerIntervalId,
    box = new Array();

function onClick(e) {
  if(state == "menu") {
    startGame();
  }
  else if(state == "playing") {
    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    var i = box.length - 1;

    if(collides(box[i].x, box[i].y, 40, 40, x, y)){
        score += 1;
        document.getElementById("score").innerHTML = score;
        box[i].clicked = true;
        drawSquare();
    }
  }
  else if (state == "gameover") {
    startGame();
    document.getElementById("score").innerHTML = score;
  }
}

function drawSquare() {
  box = [];
  var square = new Object();
  square.x = Math.floor(Math.random() * canvas.width-22.5);
  square.y = Math.floor(Math.random() * canvas.height-22.5);

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "orange";
  context.fillRect(square.x, square.y, 40, 40);

  box.push(square);
}

function collides(rectX, rectY, rectWidth, rectHeight, mouseX, mouseY) {
  if(((rectX <= mouseX) && (rectX+rectWidth >= mouseX))
    &&
    ((rectY <= mouseY) && (rectY+rectWidth >= mouseY))){
    return true;
  }
  else{
    return false;
  }
}

function startGame() {
  timer = 10;
  score = 0;
  state = "playing";

  drawSquare();
  timerIntervalId = setInterval(function() {
    timer --;
    document.getElementById('time').innerHTML = timer;

    if (timer == 0) {
      state = "gameover";
      clearInterval(timerIntervalId);
      drawCanvas();
    }

  }, 1000)
}

function drawCanvas() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  canvas.width = window.innerWidth * 0.6;
  canvas.height = window.innerHeight * 0.6;

  if (state == "menu") {
    context.fillStyle = "black";
    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText("Click to Start", canvas.width/2, canvas.height/2);
  }

  else if (state == "gameover") {
    //Game Over
    context.fillStyle = "black";
    context.font = "20px Arial";
    context.textAlign = "center";
    context.fillText("Game Over", canvas.width/2, canvas.height/2);

    // Click to start again
    context.fillStyle = "black";
    context.font = "40px Arial";
    context.textAlign = "center";
    context.fillText("Start again", canvas.width/2, canvas.height/2 + 40);
  }
}
