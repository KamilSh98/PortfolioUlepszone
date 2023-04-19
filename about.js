var education = document.getElementById("education");
var courses = document.getElementById("courses");
var thesis = document.getElementById("thesis");

var educationMore = document.getElementById("education-more");
var coursesMore = document.getElementById("courses-more");
var thesisMore = document.getElementById("thesis-more");

education.addEventListener('click', function () {
    educationMore.style.display = "grid";
    coursesMore.style.display = "none";
    thesisMore.style.display = "none";
});

courses.addEventListener('click', function () {
    educationMore.style.display = "none";
    coursesMore.style.display = "grid";
    thesisMore.style.display = "none";
});

thesis.addEventListener('click', function () {
    educationMore.style.display = "none";
    coursesMore.style.display = "none";
    thesisMore.style.display = "grid";
});