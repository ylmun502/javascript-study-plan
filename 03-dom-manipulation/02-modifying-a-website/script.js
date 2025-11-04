const title = document.getElementById("main-title");
title.textContent = "DOM Manipulation is Fun!";
title.style.color = "red";
const paragraphs = document.querySelectorAll(".paragraph");

for (let paragraph of paragraphs) {
    paragraph.style.backgroundColor = "yellow";
}

let count = 0;
const display = document.getElementById("count-display");
const button = document.getElementById("counter-button");

// Arrow function / anonymous callback
button.addEventListener("click", () => {
    count++;
    display.textContent = count;
});

// Named function callback
button.addEventListener("click", countClick);

function countClick() {
    count++;
    display.textContent = count;
}

// With both functions the counter becomes increment of 2 for every click