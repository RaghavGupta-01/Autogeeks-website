
const facebook = document.querySelector("#facebook");
facebook.addEventListener('click',async(e)=>
{
    window.open("https://www.facebook.com/","_blank");
});


const insta = document.querySelector("#instagram");
insta.addEventListener('click',async(e)=>
{    
    window.open("https://instagram.com/","_blank");
});

const twitter = document.querySelector("#twitter");
twitter.addEventListener('click',async(e)=>
{
window.open("https://twitter.com/","_blank");
});

const youtube = document.querySelector("#youtube");
youtube.addEventListener('click',async(e)=>
{
window.open("https://youtu.be/","_blank");
});






var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
  displaySlides(currentIndex += num);
}

function displaySlides(num) {
  var x;
  var slides = document.getElementsByClassName("slide");
  if (num > slides.length) { currentIndex = 1 }
  if (num < 1) { currentIndex = slides.length }
  for (x = 0; x < slides.length; x++) {
      slides[x].style.display = "none";
  }
  slides[currentIndex - 1].style.display = "block";
}
