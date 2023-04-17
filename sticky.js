window.addEventListener("scroll", function(){
    var header = document.querySelector("#sec")
    header.classList.toggle("sticky", window.scrollY > 0)
})