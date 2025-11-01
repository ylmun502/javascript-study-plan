const button = document.querySelector("#submit");
button.addEventListener("click", () => {
    document.getElementById("changeText").textContent = "Congrat! You successfully changed the text in the <p> tag!";
});