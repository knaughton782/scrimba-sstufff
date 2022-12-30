const body = document.getElementById('body')
const toggle = document.getElementById('theme-toggle')
toggle.addEventListener('click', toggleTheme)

function toggleTheme() {
    body.classList.toggle('dark');
}