let menuBtn = document.querySelector('.header__menubtn');
let menu = document.querySelector('.header__menu');
let nav = document.querySelector('.header__nav').cloneNode(1);
let headerBtn = document.querySelector(".header__button");
links = document.querySelectorAll(".header__li a")
let body = document.body;
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('noscroll');
	menu.appendChild(nav);
	menu.appendChild(headerBtn);
})
links.forEach((link) => {
    link.addEventListener("click", function() {
        menu_burg.classList.remove("open");
        body.classList.remove("noscroll");
    });
});