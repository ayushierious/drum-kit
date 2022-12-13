
// console.log("1")

var drums=document.querySelectorAll(".drum").length;
// console.log(drums)
for(var i=0;i<drums;i++){
  console.log(i)
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  var audio=new Audio("sounds/tom-1.mp3");
  audio.play();
  });
}
