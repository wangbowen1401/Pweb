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
	var current="#HomePanel"
	var panels=["#HomePanel","#AboutMePanel","#ResumePanel"];
	$("#HomePanel").show();
	$(".HoverButton").click(function(){
		current=this.getAttribute('tab');
		panels.forEach(function(panel){
			if(panel!=current)
				$(panel).fadeOut(300).promise().done();
		});
		$(this.getAttribute('tab')).delay(100);
		$(this.getAttribute('tab')).fadeIn(600);
	});
});
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});