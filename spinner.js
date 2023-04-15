let spinnerWrapper = document.querySelector('.spinner-wrapper');
    
        window.addEventListener('load', function () {
            setTimeout(function(){
            spinnerWrapper.parentElement.removeChild(spinnerWrapper);
            document.body.style.overflow = "auto"
            }, 2000)
        });


 var elem = document.getElementById("progress-bar");
    var width = 1;

    function progressBar() {
        resetProgressBar();

        id = setInterval(frame, 16);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.innerHTML = width + '%';
            }
        }
    }

    function resetProgressBar() {
        width = 1;
        elem.innerHTML = width + '%';
    }
    
     progressBar();