//smooth up scroll 

var timeOut;
function scrollToTop() {
  if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    window.scrollBy(0,-50);
    timeOut=setTimeout('scrollToTop()',20);
  }
  else clearTimeout(timeOut);
}

//button navigation dropdown

var nav = document.getElementById('navi'),
	btn = document.getElementById('navButton');

(function(){
	var width = window.innerWidth;
	if(width >= 768){
		nav.classList.add('show');
	}else {
		nav.classList.add('hide');
	}
}("docReady", window));

 btn.addEventListener('click', function(){
 	nav.classList.toggle('hide');
 	nav.classList.toggle('show');
 });

 window.addEventListener('resize', function(event){
 	var width = window.innerWidth;
 	if(width <= 768){
 		nav.classList.add('hide');
 		nav.classList.remove('show');
 	}else {
 		nav.classList.remove('hide');
 		nav.classList.add('show');
 	}
 });
