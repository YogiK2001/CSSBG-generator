var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");
h3.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ");";
function setGradient() {
    document.body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    h3.textContent = document.body.style.background + ";";
}

function randomHexGenerator() {
    var randomHex = Math.floor(Math.random() * 16777216);
    var hexCode = randomHex.toString(16).toUpperCase();
    return "#" + "0".repeat(6 - hexCode.length) + hexCode;

}

function randomGradient() {
    color1.value = randomHexGenerator();
    color2.value = randomHexGenerator();
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomGradient);