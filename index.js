
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.menu').addClass("sticky");
        }
        else
        {
            $('.menu').removeClass("sticky");
        }

    })
   
});

const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
// const body = document.body;


const currentTheme = localStorage.getItem('theme')

if(currentTheme){
    console.log(currentTheme)
    // body.classList.add(currentTheme);
    $("body").addClass(currentTheme);
    
      
}
else{
    $("body").addClass(currentTheme);
}

darkBtn.onclick = () => {
    $("body").removeClass('light');
    $("body").addClass('dark');
//     localStorage.setItem('theme','light');
// body.classList.replace('light','dark');
localStorage.setItem('theme','dark');

}   
lightBtn.onclick = () => {
    // body.classList.replace('dark','light');
    $("body").removeClass('dark');
    $("body").addClass('light');
    localStorage.setItem('theme','light');
    
}