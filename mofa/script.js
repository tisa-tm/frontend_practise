function changeTab(n){
	var tabs = document.getElementsByClassName("tab-container-tab")
	var buttons = document.getElementsByClassName("tab-container-button");
	for(var i = 0; i < tabs.length; i++){
		tabs[i].style.display = "none";
		buttons[i].style.background = "#EEB255";
		buttons[i].style.color = "#22556C";
	}
	if(n == 1){
		tabs[n].style.display = "flex";
		buttons[n].style.background = "#22556C";
		buttons[n].style.color = "#EEB255";
	}
	else{
		tabs[n].style.display = "block";
		buttons[n].style.background = "#22556C";
		buttons[n].style.color = "#EEB255";
	}
	
}