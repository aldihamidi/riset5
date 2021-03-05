const inputs = document.querySelectorAll('.input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.replace('border-gray-400', 'border-primary')
        input.style.borderWidth = '3px'

    })
    input.addEventListener('blur', () => {
        input.classList.replace('border-primary', 'border-gray-400')
        input.style.borderWidth = '2px'
    })
})

const eye = document.querySelectorAll('.eyes')[0];
var arg = false;
eye.addEventListener('click', () => {
    if (!arg) {
        eye.classList.replace('fa-eye-slash', 'fa-eye')
        eye.previousElementSibling.setAttribute('type', 'text');
        arg = true
    } else {
        eye.classList.replace('fa-eye', 'fa-eye-slash')
        eye.previousElementSibling.setAttribute('type', 'password');
        arg = false
    }
})

const remember = document.getElementById('remember')
remember.addEventListener('click', () => {
    if (!remember.previousElementSibling.checked) {
        remember.previousElementSibling.checked = true;
    } else {
        remember.previousElementSibling.checked = false;
    }
})

const sso = document.querySelectorAll('.sso');
sso.forEach(el => {
    el.addEventListener('mouseover', () => {
        el.lastElementChild.classList.replace('text-secondary', 'text-yellow-600')
    })
    el.addEventListener('mouseout', () => {
        el.lastElementChild.classList.replace('text-yellow-600', 'text-secondary')
    })
});
