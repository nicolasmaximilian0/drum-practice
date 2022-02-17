// Detecting button press

for (var i = 0; i<(document.querySelectorAll(".drum").length); i++)


document.querySelectorAll("button")[i].addEventListener("click", function () {
    
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    
    
});


// Detecting Keyboard press
document.addEventListener("keypress", function(event) {
    console.log(event)
    makeSound(event.key);
    });


function makeSound(key) {
    
    switch (key) {
        case "w":
            var crash = new Audio("sonidos/crash.mp3");
            crash.play();
            break;
        case "a":
            var tom4 = new Audio("sonidos/tom-4.mp3");
            tom4.play();
           break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
           break;

        case "d":
            var tom1 = new Audio("sonidos/tom-1.mp3");
            tom1.play();
           break;

        case "j":
            var tom2 = new Audio("sonidos/tom-2.mp3");
            tom2.play();
           break;

        case "k":
            var tom3 = new Audio("sonidos/tom-3.mp3");
            tom3.play();
           break;

        case "l":
            var kickbass = new Audio("sonidos/kick-bass.mp3");
            kickbass.play();

           break;

        default: console.log(buttonInnerHTML);

           
    }
}









