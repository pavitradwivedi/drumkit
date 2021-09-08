alert("hi");
var lenght=document.querySelcectorAll(".drum").lenght;
for(var i=0;i<lenght;i++)

{
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var innerhtml=this.innerHTML}
    make sound(innerhtml); 
    Animation(innerhtml)
    );

}
document.addEventListener("keypress",function(event)
{buttoninnerhtml=event.key;});
make sound(buttoninnerhtml);
Animation(buttoninnerhtml);


Make sound(element)
{

switch(element)
{
case w:
{
   var audio=new Audio("sounds/crash.mp3");
   audio.play();
   break;
}

case a:
{
       var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

}
case s:
{
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
}
case d:
{   var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
}
case j:
{var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
}
case K:
{   var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
}
case l:
{
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
}

}
}1
}

function Animation(value){
    document.querySelectorAll("." + "value").classlist.add("pressed");
}

}
set Timeout(function Animation(value){
    document.querySelectorAll("." + "value").classlist.remove("pressed");


}100);




    


