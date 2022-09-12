const button = document.querySelector('button')

function toggle() {
    button.classList.toggle('altColor')
}

toggle.addEventListener('click', toggle)