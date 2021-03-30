
  // Accepts any class name
  var rellax = new Rellax('.rellax');
  let kidImg = document.getElementById("kid");
  let kidAudio = document.getElementById("kidaudio");
  let introdiv = document.getElementById("introdiv");
  let introcass1 = document.getElementById("introcass1");
  let introsound = document.getElementById("introsound");
  let babyImg = document.getElementById("baby");
  let babyAudio = document.getElementById("babyaudio");
  let teenImg = document.getElementById("teen");
  let teenAudio = document.getElementById("teenaudio");
  let adultImg = document.getElementById("adult");
  let adultAudio = document.getElementById("adultaudio");
  let oldImg = document.getElementById("old");
  let oldAudio = document.getElementById("oldaudio");

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
    if (kidAudio.paused == true ) {
        kidAudio.play();


    } else {
      kidAudio.pause();
    }
  })

  babyImg.addEventListener('click', () => {
    if (babyAudio.paused == true ) {
        babyAudio.play();


    } else {
      babyAudio.pause();
    }
  })

  teenImg.addEventListener('click', () => {
    if (teenAudio.paused == true ) {
        teenAudio.play();


    } else {
      teenAudio.pause();
    }
  })

  adultImg.addEventListener('click', () => {
    if (adultAudio.paused == true ) {
        adultAudio.play();


    } else {
      adultAudio.pause();
    }
  })

  oldImg.addEventListener('click', () => {
    if (oldAudio.paused == true ) {
        oldAudio.play();


    } else {
      oldAudio.pause();
    }
  })

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
