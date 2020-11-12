// Select DOM items
//By DOM we mean all the UI structure, all the HTML tags, the attributes, etc
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
//querySelectorAll: for NODE LIST
const menuNavItems = document.querySelectorAll('.nav-item');


//Set Initial State of Menu
let showMenu = false;         //we use "let" because we want to directly reassign this at   
                              //certain times and you can't do that with "const"


menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
  if (showMenu) {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuBranding.classList.remove('show');
    menuNav.classList.remove('show');
    menuNavItems.forEach(item => item.classList.remove('show'));
    
    showMenu = false;
  }
  else {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuBranding.classList.add('show');
    menuNav.classList.add('show');
    menuNavItems.forEach(item => item.classList.add('show'));

    showMenu = true;
  }
}