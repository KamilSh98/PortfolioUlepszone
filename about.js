var education = document.getElementById("education");
var courses = document.getElementById("courses");
var thesis = document.getElementById("thesis");

var educationMore = document.getElementById("education-more");
var coursesMore = document.getElementById("courses-more");
var thesisMore = document.getElementById("thesis-more");

var educationText = document.getElementById("education-text");
var coursesText = document.getElementById("courses-text");
var thesisText = document.getElementById("thesis-text");

education.addEventListener('click', function () {
    educationMore.style.display = "grid";
    coursesMore.style.display = "none";
    thesisMore.style.display = "none";
    educationText.style.color = "#378f95";
    coursesText.style.color = "#fff";
    thesisText.style.color = "#fff";
});

courses.addEventListener('click', function () {
    educationMore.style.display = "none";
    coursesMore.style.display = "grid";
    thesisMore.style.display = "none";
    educationText.style.color = "#fff";
    coursesText.style.color = "#378f95";
    thesisText.style.color = "#fff";
});

thesis.addEventListener('click', function () {
    educationMore.style.display = "none";
    coursesMore.style.display = "none";
    thesisMore.style.display = "grid";
    educationText.style.color = "#fff";
    coursesText.style.color = "#fff";
    thesisText.style.color = "#378f95";
});