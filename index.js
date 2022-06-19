const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const body = document.body;

const currentTheme = localStorage.getItem('theme')

if(currentTheme){
    body.classList.add(currentTheme);
}

darkBtn.onclick = () => {
body.classList.replace('light','dark');
localStorage.setItem('theme','dark');
const currentTheme = localStorage.getItem('theme')
console.log(currentTheme)
}   
lightBtn.onclick = () => {
    body.classList.replace('dark','light');
    localStorage.setItem('theme','light');
    const currentTheme = localStorage.getItem('theme')
console.log(currentTheme)
}