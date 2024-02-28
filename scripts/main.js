const button = document.querySelector(".close-button");
const settings = document.querySelector(".settings-bar");
const settingsButton = document.querySelector(".nav-text-2");
const details = document.querySelector(".details-button");
const detailsBar = document.querySelector("#details-bar-main");
const maxBarsRange = document.querySelector("#max-bars-range");
const speedExecutionRange = document.querySelector("#speed-execution");
const barsWidthRange = document.querySelector("#bars-width");


let maxBar = parseInt(maxBarsRange.value, 10); // Initialize with current value
let speedExecution = parseInt(speedExecutionRange.value, 10); // Initialize with current value



maxBarsRange.addEventListener('change', () => {
  maxBar = parseInt(maxBarsRange.value, 10);
  // Optionally, update the UI or regenerate bars here if needed
  console.log(maxBar); // Check updated value
  document.querySelector("#details-bars").innerHTML = maxBar;
});

speedExecutionRange.addEventListener('change', () => {
  speedExecution = parseInt(speedExecutionRange.value, 10);
  // Optionally, adjust delay-related functionality here if needed
  document.querySelector("#details-speed").innerHTML = speedExecution;
});

barsWidthRange.addEventListener('change', () => {
  document.querySelector("#details-width").innerHTML = barsWidthRange.value;
});

button.addEventListener("click", function(){
settings.classList.remove("settings-bar-1");
settings.classList.add("settings-bar")
// console.log(`working properly!`);
});


settingsButton.addEventListener("click", function(){
// settings.classList.remove("close-button-clicked");
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
  let maxHeight = 500;

// Function to generate a new bars' array (Hardcoded for now!)

  generateArray.addEventListener("click", function createArray(event) {
   
    let maxBars = maxBar;

    let barWidth = barsWidthRange.value;

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


  function delay(speedExecution) {
    return new Promise((resolve) => setTimeout(resolve, 1000 / speedExecution));
  }



  function afterCompleteDelay() {
    return new Promise((resolve) => setTimeout(resolve, 10));
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
    document.querySelectorAll(".button-sort").forEach(button => {
      button.classList.remove("disabled");
      button.disabled = false;
    });

  }

  
