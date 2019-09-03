console.log("Image slider connected!");

const current = document.querySelector("#current"); //current img id
const imgs = document.querySelectorAll(".imgs img"); //.imgs class and all images
const opacity = 0.6;
//set first image opacity
imgs[0].style.opacity = opacity;

//loop thru nodelist of imgs and adds event listener to each img listening for a click and changing the src of the current to the click src
//imgs.forEach(function(img){
//     img.addEventListener("click", function(e){
//         current.src = e.target.src;
//     });
// });
imgs.forEach(img => 
    img.addEventListener("click", imgClick));  

function imgClick(e){
    //reset opacity
    imgs.forEach(img => (img.style.opacity =1));
    current.src = e.target.src;
    //add fadeIn class
    current.classList.add("fade-in");
    //remove fade-in class after 0.5s timeout
    setTimeout(() => current.classList.remove("fade-in"), 500);
    //change opacity
    e.target.style.opacity = opacity;
}
