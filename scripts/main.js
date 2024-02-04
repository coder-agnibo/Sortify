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