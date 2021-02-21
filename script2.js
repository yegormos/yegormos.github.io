let insideOfScreen = document.getElementById("button")
let appleLogo = document.getElementById("Apple")

insideOfScreen.addEventListener("click", () => {
  if(appleLogo.style.visibility == "hidden") {
      appleLogo.style.visibility = "visible";

  }else {
      appleLogo.style.visibility = "hidden";

  }
})
