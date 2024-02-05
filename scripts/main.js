const button = document.querySelector(".close-button");
const settings = document.querySelector(".settings-bar");
const settingsButton = document.querySelector(".nav-text-2");
const details = document.querySelector(".details-button");
const detailsBar = document.querySelector("#details-bar-main");


button.addEventListener("click", function(){
// settings.classList.remove("settings-bar");
settings.classList.remove("settings-bar-1");
// settings.classList.remove("settings-bar");
settings.classList.add("close-button-clicked")
// console.log(`working properly!`);
});


settingsButton.addEventListener("click", function(){
settings.classList.remove("close-button-clicked");
settings.classList.remove("settings-bar");
settings.classList.add("settings-bar-1");
});


details.addEventListener("click", function() {
    // console.log("Hello!");
    if (detailsBar.classList.contains("details-bar")) {
      detailsBar.classList.remove("details-bar");
      detailsBar.classList.add("details-bar2");
    } else if (detailsBar.classList.contains("details-bar2")) {
      detailsBar.classList.remove("details-bar2");
      detailsBar.classList.add("details-bar");
    }
  });


  // Bars js


  const barsContainer = document.querySelector(".bars-container");
  const generateArray = document.querySelector(".nav-text-1");

  let bars;

  let maxBars = 150;

  let maxHeight = 500;

  let barWidth = 10;


  generateArray.addEventListener("click", function createArray() {
   
    // clearing the container so that new array can be added
    barsContainer.innerHTML = ''; 

    // Declaring a new arrray
    bars = new Array();


    for(let i = 0; i < maxBars; i++) {
      let bar = document.createElement("div");
      
      let randomHeight = Math.floor(Math.random() * maxHeight + 1);

      bar.style.height = `${randomHeight}px`;;

      bar.style.width = `${barWidth}px`;
      
      bar.style.backgroundColor = "#4ed096df";

      bar.style.marginRight = "5px";

      
      bars.push(bar);

    }

    // console.log(bars);
    bars.forEach(bar => barsContainer.appendChild(bar));
  }
  );






