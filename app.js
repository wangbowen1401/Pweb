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
	var panels=["#HomePanel","#AboutMePanel"];
	console.log("ready!");
	$("#HomePanel").show();
	$(".HoverButton").click(function(){
		panels.forEach(function(panel){
			$(panel).fadeOut(300).promise().done();
		});
		$(this.getAttribute('tab')).delay(100);
		$(this.getAttribute('tab')).fadeIn(600);
	});
});

/*
if($(this).attr("tab")=="Home"){
			if($("#AboutMePanel").is(":visible"))
				$("#AboutMePanel").fadeOut(300,function(){$("#HomePanel").fadeIn(300)});
		}
if($(this).attr("tab")=="AboutMe"){
	if($("#HomePanel").is(":visible"))
		$("#HomePanel").fadeOut(300,function(){$("#AboutMePanel").fadeIn(300)});
}
*/