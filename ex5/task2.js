var tabPanels=document.querySelectorAll(".tabPanel");

function showPanel(panelIndex,colorCode,color) {
    for (i = 0; i < tabPanels.length; i++) {
        tabPanels[i].style.display = "none";
      }
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
    tabPanels[panelIndex].style.color=color;
}
showPanel(0,'lightseagreen', 'black');