const button = document.querySelector(".close-button");
const settings = document.querySelector(".settings-bar");
const settingsButton = document.querySelector(".nav-text-2");


button.addEventListener("click", function(){
// settings.classList.remove("settings-bar");
settings.classList.remove("settings-bar-1");
settings.classList.remove("settings-bar");
settings.classList.add("close-button-clicked")
// console.log(`working properly!`);
});


settingsButton.addEventListener("click", function(){
settings.classList.remove("close-button-clicked");
settings.classList.remove("settings-bar");
settings.classList.add("settings-bar-1");
});