let introVideo = document.getElementById("introvideo");
let flexContainer = document.getElementById("flex-container");
let flexContainer2 = document.getElementById("flex-container2");
let nooraVideo = document.getElementById("nooravideo");
let yegorVideo = document.getElementById("yegorvideo");
let aliVideo = document.getElementById("alivideo");
let nooraStory = document.getElementById("noorastory");
let yegorStory = document.getElementById("yegorstory");
let aliStory = document.getElementById("alistory");
let nooraStoryVid = document.getElementById("noorastoryvid");
let homeButton = document.getElementById("home");
let btn = document.getElementById("btn");
let next = document.getElementById("next");

introVideo.addEventListener('ended', (event) => {
  console.log("log");
  flexContainer.style.display = "none";
  flexContainer2.style.display = "flex";
  introVideo.currentTime = 0;
  introVideo.load();
})

nooraVideo.addEventListener('mouseover', (event) => {
  console.log("noora");
  nooraVideo.play();
})

nooraVideo.addEventListener('mouseout', (event) => {
  console.log("nooraout");
  nooraVideo.pause();
})

nooraVideo.addEventListener('click', (event) => {
  console.log("nooraout");
  flexContainer2.style.display = "none";
  nooraStory.style.display = "flex";
  nooraVideo.currentTime = 0;
  yegorVideo.currentTime = 0;
  aliVideo.currentTime = 0;
  nooraVideo.load();
  yegorVideo.load();
  aliVideo.load();
})

nooraStoryVid.addEventListener('ended', (event) => {
  btn.style.display = "flex";
})

yegorVideo.addEventListener('mouseover', (event) => {
  console.log("yegor");
  yegorVideo.play();
})

yegorVideo.addEventListener('mouseout', (event) => {
  console.log("yegorout");
  yegorVideo.pause();
})

yegorVideo.addEventListener('click', (event) => {
  console.log("nooraout");
  flexContainer2.style.display = "none";
  yegorStory.style.display = "flex";
  nooraVideo.currentTime = 0;
  yegorVideo.currentTime = 0;
  aliVideo.currentTime = 0;
  nooraVideo.load();
  yegorVideo.load();
  aliVideo.load();
})

aliVideo.addEventListener('mouseover', (event) => {
  console.log("Ali");
  aliVideo.play();
})

aliVideo.addEventListener('mouseout', (event) => {
  console.log("Aliout");
  aliVideo.pause();
})

aliVideo.addEventListener('click', (event) => {
  console.log("nooraout");
  flexContainer2.style.display = "none";
  aliStory.style.display = "flex";
  nooraVideo.currentTime = 0;
  yegorVideo.currentTime = 0;
  aliVideo.currentTime = 0;
  nooraVideo.load();
  yegorVideo.load();
  aliVideo.load();
})

homeButton.addEventListener('click', (event) => {
  if(flexContainer.style.display = "none") {
    flexContainer2.style.display = "none";
    nooraStory.style.display = "none";
    yegorStory.style.display = "none";
    aliStory.style.display = "none";
    flexContainer.style.display = "flex";
    nooraVideo.currentTime = 0;
    yegorVideo.currentTime = 0;
    aliVideo.currentTime = 0;
    nooraVideo.load();
    yegorVideo.load();
    aliVideo.load();
  }
})

next.addEventListener('click', (event) => {
  
})
