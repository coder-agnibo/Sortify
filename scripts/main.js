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


  // Program to append the array in the container


  const barsContainer = document.querySelector(".bars-container");
  const generateArray = document.querySelector(".generate-array");

  let bars;

  let maxBars = 152;

  let maxHeight = 500;

  let barWidth = 10;

// Function to generate a new bars' array (Hardcoded for now!)

  generateArray.addEventListener("click", function createArray(event) {
   
    if (this.classList.contains("disabled")) {
      return; // Do nothing if the button is disabled
    }

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


// Functions handling delay time


  function delay(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }



  function afterCompleteDelay() {
    return new Promise((resolve) => setTimeout(resolve, 0));
  }
 


  async function afterViewComplete() {
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor =
        "yellow";
      await afterCompleteDelay();
    }
    enableFeatures();
  }

  function disableFeatures() {
    document.querySelector(".generate-array").classList.add("disabled");
    document.querySelectorAll(".button-sort").forEach(button => {
      button.classList.add("disabled");
      button.disabled = true;
    });
  }

  function enableFeatures() {
    document.querySelector(".generate-array").classList.remove("disabled");
    
    // If they were divs or spans, then this particular method wouldn't work 
    document.querySelectorAll(".sorting-button").forEach(button => {
      button.classList.remove("disabled");
      button.disabled = false;
    });

  }


// Function for the slider

  // function showSpeedSliderValue() {
  //   sliderSpeedValue.innerHTML = sliderSpeed.value;
  //   delayTime = Math.pow(sliderSpeed.value, 2) * 10;
  //   var sliderSpeedValuePosition = sliderSpeed.value / sliderSpeed.max;
  //   sliderSpeedValue.style.left =
  //     sliderSpeedValuePosition * sliderSpeedValuePositionMultiplier + "px";
  // }