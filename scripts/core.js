window.addEventListener('load', function() {
	var words = document.getElementsByClassName('word');
		var wordArray = [];
		var currentWord = 0;
	
	words[currentWord].style.opacity = 1;
	for (var i = 0; i < words.length; i++) {
	  splitLetters(words[i]);
	}
	
	function changeWord() {
	  var cw = wordArray[currentWord];
	  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
	  for (var i = 0; i < cw.length; i++) {
	    animateLetterOut(cw, i);
	  }
	  
	  for (var i = 0; i < nw.length; i++) {
	    nw[i].className = 'w behind';
	    nw[0].parentElement.style.opacity = 1;
	    animateLetterIn(nw, i);
	  }
	  
	  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
	}
	
	function animateLetterOut(cw, i) {
	  setTimeout(function() {
			cw[i].className = 'w out';
	  }, i*80);
	}
	
	function animateLetterIn(nw, i) {
	  setTimeout(function() {
			nw[i].className = 'w in';
	  }, 340+(i*80));
	}
	
	function splitLetters(word) {
	  var content = word.innerHTML;
	  word.innerHTML = '';
	  var result = [];
	  for (var i = 0; i < content.length; i++) {
	    var item = document.createElement('span');
	    item.className = 'w';
	    item.innerText = content.charAt(i);
	    word.appendChild(item);
	    result.push(item);
	  }
	  
	  wordArray.push(result);
	}
	
	changeWord();
	setInterval(changeWord, 4000);





	var navBtn = document.getElementById('navbtn');
	var nav = document.getElementById('nav');

	navBtn.addEventListener('click', navToggle);
	
	function navToggle(e) {
	  var closed = (navBtn.className.indexOf('close') > 0); 
	  if(closed) {
	    navBtn.className = 'navbtn open';
	    nav.className = 'out';
	  } else {
	    navBtn.className = 'navbtn close';
	    nav.className = 'in';
	  }
	}
});