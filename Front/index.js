const toggle = document.getElementById('menuBtn');
console.log(toggle);

const navbar = document.getElementById('navbar');
console.log(navbar);

const disClose = document.getElementById('disClose');
console.log(disClose);

const enfant1 = toggle.querySelector(':nth-child(1)');

const enfant2 = toggle.querySelector(':nth-child(2)');
 
var etatMenu = false;

window.addEventListener('scroll'), () => {

}

openMenu = () =>{
    etatMenu = true;
    navbar.style.right = '0';
    disClose.style.display = 'none';
    enfant1.style.transform = 'rotate(45deg)';
    enfant1.style.transition = '0.5s ease-in-out';
    enfant2.style.transform = 'translateY(-2.5px) rotate(-45deg)';
    enfant2.style.transition = '0.5s ease-in-out';
    toggle.style.gap = '0';
}

closeMenu = () =>{
    etatMenu = false;
    navbar.style.right = '-300px';
    disClose.style.display = 'block';
    enfant1.style.transform = 'rotate(0deg)';
    enfant1.style.transition = 'none';
    enfant2.style.transform = 'rotate(0deg)';
    enfant2.style.transition = 'none';
    toggle.style.gap = '7px';
}

toggle.addEventListener('click', () => {
if(etatMenu === true){
    closeMenu();
}else if (etatMenu === false){
    openMenu();
}
});
