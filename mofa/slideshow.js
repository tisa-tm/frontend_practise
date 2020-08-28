var slideIndex = 0;

function showSlides() {
	var slides = document.getElementsByClassName("mySlides");
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	}
	
	if (slideIndex > slides.length-1){
		slideIndex = 0;
	} 
	slides[slideIndex].style.display = "block"; 
	// slides[slideIndex+1].style.display = "block";
	slideIndex++;
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

showSlides();
setInterval(showSlides,5000);