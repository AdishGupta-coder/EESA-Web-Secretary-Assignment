document.addEventListener('DOMContentLoaded', function () {
    window.mode=true;
    const toggleButton = document.getElementById('mode');
    const home = document.getElementById('home');
    const resources = document.getElementById('resources');
    toggleButton.textContent="Dark Mode";
    toggleButton.style.backgroundColor="transparent";
    home.style.backgroundColor="transparent";
    resources.style.backgroundColor="transparent";

    toggleButton.addEventListener('click', function() {
        window.mode = !window.mode;
        if(window.mode) {
            toggleButton.textContent = "Dark Mode";
            toggleButton.style.color="black";
            home.style.color="black";
            resources.style.color="black";
            document.body.classList.remove("dark");
        }
        else{
            toggleButton.textContent="Light Mode";
            toggleButton.style.color="white";
            home.style.color="white";
            resources.style.color="white";
            document.body.classList.add("dark");
        }
    });
});

document.addEventListener('DOMContentLoaded', function (){
    const slides = document.querySelectorAll('.slide');
    const l = slides.length;
    let i = 0;

    document.getElementById('right').addEventListener('click', function(){
        slides[i].classList.remove("active");
        i = (i + 1) % l;
        slides[i].classList.add("active");
    });

    document.getElementById('left').addEventListener('click', function(){
        slides[i].classList.remove("active");
        i = (i - 1 + l) % l;
        slides[i].classList.add("active");
    });
});
