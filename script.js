var navbar = document.querySelector('.navbar');
var menu = document.querySelector('.bx-menu');
var x = document.querySelector('.bx-x');

menu.onclick = () => {
    navbar.classList.add("active");
};

x.onclick = () => {
    navbar.classList.remove("active");
};

function menuDirect(){
    window.location.href = "menu"
}

function sobre(){
    window.location.href = "./sobre/"
}