
  // Accepts any class name
  var rellax = new Rellax('.rellax');
  let kidImg = document.getElementById("kid");
  let kidAudio = document.getElementById("kidaudio");
  let introdiv = document.getElementById("introdiv");
  let introcass1 = document.getElementById("introcass1");
  let introsound = document.getElementById("introsound");

  introcass1.addEventListener('click', () => {
    introcass1.src = "Cass2.gif";
  })

  introcass1.addEventListener('click', () => {
    introsound.play();
  })

  introsound.addEventListener('timeupdate', () => {
    console.log(introsound.currentTime);

    if(introsound.currentTime > 5) {
      introsound.pause();
      introsound.currentTime = 0;
      introcass1.src = "Cass1.gif";
    }
  })

  kidImg.addEventListener('click', () => {
    kidAudio.play();
  })
/*
  var percent = document.getElementById("percent");
  var preogressbar = document.getElementById("preogressbar");

  var totalHeight = document.body.scrollHeight - window.innerHeight;

  console.log("hello");

  window.onscroll = function(){
    var progress = (window.pageYOffset / totalHeight) * 60;
    preogressbar.style.height = progress + "%";
    percent.innerHTML = "Years " + Math.round(progress);
  }
console.log(totalHeight);
*/
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
