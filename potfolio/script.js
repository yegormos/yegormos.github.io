let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

var canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
  if (windowWidth <= 770) {
    rad = 30;
  }
}

function draw() {
  background(249, 248, 244);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  fill(0,0,0);
  ellipse(xpos, ypos, rad, rad);
}
//Responsive Top nav that collapses into a menu when the media query is executed
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//Place links to the project websites on the video and project button title
document.getElementById('buttontitle').addEventListener('click', function() {
     window.open('https://yegormos.github.io/index.html','_blank');
}, false);

document.getElementById('teaprojectvid').addEventListener('click', function() {
     window.open('https://yegormos.github.io/index.html','_blank');
}, false);

document.getElementById('buttontitle2').addEventListener('click', function() {
     window.open('https://eabahrami.github.io/comic/','_blank');
}, false);

document.getElementById('comicprojectvid').addEventListener('click', function() {
     window.open('https://eabahrami.github.io/comic/','_blank');
}, false);

document.getElementById('buttontitle3').addEventListener('click', function() {
     window.open('https://lucychoi1215.github.io/soundproject/soundproject.html','_blank');
}, false);

document.getElementById('soundprojectvid').addEventListener('click', function() {
     window.open('https://lucychoi1215.github.io/soundproject/soundproject.html','_blank');
}, false);

document.getElementById('buttontitle4').addEventListener('click', function() {
     window.open('https://eabahrami.github.io/video/','_blank');
}, false);

document.getElementById('videoprojectvid').addEventListener('click', function() {
     window.open('https://eabahrami.github.io/video/','_blank');
}, false);
