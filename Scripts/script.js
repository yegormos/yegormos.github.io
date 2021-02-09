console.log("hello");

let imageKettle = document.getElementById("kettle-image");

imageKettle.addEventListener('mouseenter', () => {
  imageKettle.style.opacity = 1;
})
imageKettle.addEventListener('mouseleave', ()=> {
  imageKettle.style.opacity = 0;
})

let imageTea = document.getElementById("tea-image");

imageTea.addEventListener('mouseenter', () => {
  imageTea.style.opacity = 1;
})
imageTea.addEventListener('mouseleave', ()=> {
  imageTea.style.opacity = 0;
})

let imageHoney = document.getElementById("honey-image");

imageHoney.addEventListener('mouseenter', () => {
  imageHoney.style.opacity = 1;
})
imageHoney.addEventListener('mouseleave', ()=> {
  imageHoney.style.opacity = 0;
})

let imageBeverage = document.getElementById("beverage-image");

imageBeverage.addEventListener('mouseenter', () => {
  imageBeverage.style.opacity = 1;
})
imageBeverage.addEventListener('mouseleave', ()=> {
  imageBeverage.style.opacity = 0;
})
