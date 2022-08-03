let spinnerWrapper = document.querySelector('.spinner-wrapper');
    
        window.addEventListener('load', function () {
            setTimeout(function(){
            spinnerWrapper.parentElement.removeChild(spinnerWrapper);
            document.body.style.overflow = "auto"
            }, 4000)
        });




        