var numberofbuttons = document.querySelectorAll(".drum").length

for (var i = 0; i < numberofbuttons; i++ ){
document.querySelectorAll(".drum")[i].addEventListener("click" , function (event){
    // console.log(event)
    var btnText = this.textContent

    drumKit(btnText)
    buttonAnimation(btnText)

})
}


document.addEventListener("keypress", function (event){

    var keychar = event.key
    drumKit(keychar);
    buttonAnimation(keychar);
   
})






function drumKit(Key){
switch (Key){
    case "w":
        var tom4 = new Audio("sounds/tom-4.mp3")
        tom4.play() 
    break;

    case "a":
        var audio = new Audio("sounds/tom-3.mp3")
        audio.play()
    break;

    case "s":
        var audio = new Audio("sounds/tom-2.mp3")
        audio.play()
    break;

    case "d": 
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play()
    break;

    case "j":
        var audio = new Audio("sounds/snare.mp3")
        audio.play()
    break;

    case "k":
        var audio = new Audio("sounds/kick-bass.mp3")
        audio.play()
    break;

    case "l":
        var audio = new Audio("sounds/crash.mp3")
        audio.play()
    break;

    default:
        console.log(Key)
}
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey)
    activeButton.classList.add("pressed")

    setTimeout(function(){
    activeButton.classList.remove("pressed")
    }, 100)
  
}