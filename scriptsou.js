let interactable = document.getElementById("interactable");
let player = document.getElementById("player");
let someText = document.getElementById("sometext");
let someText1 = document.getElementById("sometext1");
let someText2 = document.getElementById("sometext2");

interactable.addEventListener('mouseenter', () => {
  player.play();
})

interactable.addEventListener('mouseleave', () => {
  player.pause();
})

player.addEventListener('pause', () => {
  document.body.style.backgroundColor = "white";
})

player.addEventListener('play', () => {
  document.body.style.backgroundColor = "black";
})

player.addEventListener('timeupdate', () => {
  console.log("the current time is:", player.currentTime)

  if(player.currentTime > 5){
    someText.style.visibility = "visible";
  }
  if(player.currentTime > 10){
    someText.style.visibility = "hidden";
    someText1.style.visibility = "visible";
  }
  if(player.currentTime > 15){
    someText1.style.visibility = "hidden";
    someText2.style.visibility = "visible";
  }
})
