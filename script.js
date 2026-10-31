console.log("THE DARK CASE JS LOADED");

document.addEventListener("DOMContentLoaded", function () {

```
const startButton = document.getElementById("startGame");
const hero = document.querySelector(".hero");
const bottomSection = document.querySelector(".bottom-section");
const investigationScreen = document.getElementById("investigationScreen");

if (!startButton || !hero || !bottomSection || !investigationScreen) {
    console.error("Required HTML element missing!");
    return;
}

startButton.onclick = function () {

    console.log("START BUTTON CLICKED");

    hero.style.display = "none";
    bottomSection.style.display = "none";

    investigationScreen.style.display = "block";
    investigationScreen.classList.add("active");

    window.scrollTo(0, 0);
};
```

});
