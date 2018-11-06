var burger = document.getElementById('burger');





burger.onclick = function() {
	if (burger.classList.contains('burger-open')) {
		burger.classList.remove('burger-open');
		document.getElementById('nav').style.display = 'none';
	} else {
		burger.classList.add('burger-open');
		document.getElementById('nav').style.display = 'flex';
	}
}

function auth() {
	var overlay = document.getElementById('overlay');
	var btn = document.getElementById('overlay-btn');
	
	overlay.style.display = 'flex';
	
	btn.onclick = function() {
		overlay.style.display = 'none';
	}
}