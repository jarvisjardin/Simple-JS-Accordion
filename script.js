	var acc = document.getElementsByClassName("accordion"); //creates an array with all the accordion sections
	var i;
	
	for (i = 0; i < acc.length; i++) { // loop for every sections
	    acc[i].onclick = function(){ // add an onclick event listener
	        this.classList.toggle("active"); // when clicked, toggle class 'active' ( this changes the icon if active)
	        this.nextElementSibling.classList.toggle("show"); // toggle class 'show' on the next element which is the 'dropdown' section.
	  }
	}
