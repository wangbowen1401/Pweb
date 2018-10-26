var text = ["Chemical Engineer", "Programmer"];
var counter = 0;
var elem = document.getElementById("changeText");
var isVisible = document.getElementById("")

function change() {
  $(elem).fadeTo(1500,0,function(){
  	this.innerHTML=text[counter];
  	counter = ++counter % text.length;
  	$(this).fadeTo(1500,1,change);
  })
}

change()

///////////////////////// Tab Portions//////////////////////

$(document).ready(function(){
  console.log("ready!");
  $("#HomePanel").show();

  $(".HoverButton").click(function(){
    $(this);
  });
});