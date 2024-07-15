




////////////////////////////////////////////////////////////////////////////////////////////////
// clicking the buttonj events:
var buttons=document.querySelectorAll(".drum").length;

for (var x=0; x<buttons ; x++)

    {
        document.querySelectorAll(".drum")[x].addEventListener("click", function() 
             
        {
           
           var buttonInnerhtml=this.innerHTML;
           makesound(buttonInnerhtml);
           animateButton(buttonInnerhtml)
        } 
        );
    }







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// key board events:


document.addEventListener("keydown", function(event){
    makesound(event.key)
    animateButton(event.key)
})





 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 
// main function that is attached to the different events :P 
function makesound(key){

    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();                       
            break;

        case "a":
            var tom1=new Audio("sounds/tom-2.mp3");
            tom1.play();                       
            break;

        
        case "s":
            var tom1=new Audio("sounds/tom-3.mp3");
            tom1.play();                       
            break;
            
            
        case "d":
            var tom1=new Audio("sounds/tom-4.mp3");
            tom1.play();                       
            break;



        case "j":
            var tom1=new Audio("sounds/crash.mp3");
            tom1.play();                       
            break;



        case "k":
            var tom1=new Audio("sounds/kick-bass.mp3");
            tom1.play();                       
            break;



        case "l":
            var tom1=new Audio("sounds/snare.mp3");
            tom1.play();                       
            break;
                
                




    
        default: console.log(key)
        break;
    }

}


//  what we have done here is that we make a function called make sound , that function will be called in two different times
// each time with a doifferent parameter depending on the event if the event is clicking on a certain button , then the 
// event will be clicking and the button is the target , and then the parameter given to the function to be checked through the
//  switch statemnt will be the inner html of thatn button , we continue listening , if a keyboard press is detected , we call the same
// function but here we give it a different parameter whivh is the key , then it checks that key throgh the switch statement ,
// and perform a differnt instructions depending on that key or the innerhtml ! 

//  adding animations to the buttons when they are clicked ! 

function animateButton(buttonclicked){

    var clickedbutton=document.querySelector("."+buttonclicked);

    clickedbutton.classList.add("pressesd");

    setTimeout(function() {
        clickedbutton.classList.remove("pressed");
    },100);
}

// what this function will do first seach for the clicked button by the class name by getting the vale of the 
// parameter buttonclicked from the higher order functions that calls that function when a button is clicked
// providing the innerhtml or the event.key as a value , then we add the css class to the button 
// where this will change the style of the event 
// then after 1 second we will remove the style from the button , creating an anim ation effect by this step ! 