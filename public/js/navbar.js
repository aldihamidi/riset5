const menu = document.querySelector('#menu');
const submenu = document.querySelector('#submenu');


menu.addEventListener('click',() => {
    if(submenu.classList.contains('hidden')){
        submenu.classList.remove('hidden');
    } else {
        submenu.classList.add('hidden');
    }
})




