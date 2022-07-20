var leftButton = document.getElementById("leftButton");
var middleButton = document.getElementById("middleButton");
var rightButton = document.getElementById("rightButton");

var firstSet = document.getElementById("set1");
var secondSet = document.getElementById("set2");
var thirdSet = document.getElementById("set3");

leftButton.addEventListener('click', function () {
    firstSet.style.display = "grid";
    secondSet.style.display = "none";
    thirdSet.style.display = "none";
    leftButton.style.background = "#222426";
    middleButton.style.background = "#444648";
    rightButton.style.background = "#444648";
});


middleButton.addEventListener('click', function () {
    firstSet.style.display = "none";
    secondSet.style.display = "grid";
    thirdSet.style.display = "none";
    leftButton.style.background = "#444648";
    middleButton.style.background = "#222426";
    rightButton.style.background = "#444648";
});



rightButton.addEventListener('click', function () {
    firstSet.style.display = "none";
    secondSet.style.display = "none";
    thirdSet.style.display = "grid";
    leftButton.style.background = "#444648";
    middleButton.style.background = "#444648";
    rightButton.style.background = "#222426";
});