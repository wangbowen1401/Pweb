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

var tabs = document.querySelectorAll(".tabContainer.HoverButton a");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function blockPanels() {
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
}

function showPanel(panelIndex) {
	blockPanels();
    $(tabPanels[panelIndex]).fadeIn(300);
}
blockPanels();
tabPanels[0].style.display="block";