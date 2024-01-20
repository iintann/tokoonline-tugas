// ketika tombol btn-menu di klik
const navbarMenu = document.querySelector('.navbar-menu');
document.querySelector('#btn-menu').onclick = () =>{
	navbarMenu.classList.toggle('active');
};

//kemudian kita buat si menu sidebar navbarnya ketika kita klik di luar menu sidebar,
// maka si menu sidebar itu bakal ketutup
const btnMenu = document.querySelector('#btn-menu');
document.addEventListener('click', function(e){
	if(!btnMenu.contains(e.target) && !navbarMenu.contains(e.target)){
		navbarMenu.classList.remove('active');
	}
})