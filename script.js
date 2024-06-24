
function getRandomNumber(minRange, maxRange) {
    return Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
}

window.onload = function() {
    const rand = getRandomNumber(1, 100);
    document.getElementById("yourNumber").textContent = rand
};

