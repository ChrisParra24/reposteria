/** HMABURGUER MENU */
let menuActive = false;
const hamburguer = document.getElementById('menu_responsive');
const navbar_options = document.getElementById('navbar_options');
const children = Array.from(navbar_options.children);
const menu = document.getElementById('menu');
const close = document.getElementById('close');

/** USER OPTIONS */
let optionsActive = false;
const user_info = document.getElementById('user_info');
const user_options = document.getElementById('user_options');
const close_options = document.getElementById('close_options');

/** HAMBURGUER MENU */
const onClickMenu = (e) => {
    if(menuActive){
        navbar_options.classList.remove('visible');
        navbar_options.classList.add('hidden');
        close.classList.replace('open','close')
        menu.classList.replace('close','open');
    }else{
        navbar_options.classList.add('visible');
        navbar_options.classList.remove('hidden');
        menu.classList.replace('open','close')
        close.classList.replace('close','open');
    }
    menuActive = !menuActive;
}

const closeMenu = (e) => {
    navbar_options.classList.replace('visible', 'hidden');
    close.classList.replace('open','close')
    menu.classList.replace('close','open');
    menuActive = false;
}

children.forEach(child => {
    child.addEventListener('click', closeMenu)
});

hamburguer.addEventListener("click", onClickMenu);

/** USER OPTIONS*/
const onClickOptions = (e) => {
    user_options.classList.remove('hidden');
    user_options.classList.add('visible');
}

const closeOptions = (e) => {
    user_options.classList.add('hidden');
    user_options.classList.remove('visible');
}

user_info.addEventListener("click", onClickOptions);
close_options.addEventListener("click", closeOptions);
