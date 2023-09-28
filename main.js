let btn = document.getElementById('btn');


btn.addEventListener('click', hassane);

function hassane() {
	document.body.style.backgroundColor = '#' + Math.random().toString(16).slice(2,8)
}
