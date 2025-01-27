var sidenavbar=document.querySelector(".side-navbar-content");
var menuicon=document.querySelector(".navbar-menu");
function showNavbar(){
    if(sidenavbar.style.display=="none"){
    sidenavbar.style.display ="block";
    }
    else{
        sidenavbar.style.display ="none";
    }
}
showNavbar();

window.addEventListener('scroll',function reveal(){
    let reveals = this.document.querySelectorAll('.reavel');
    for(let i = 0; i< reveals.length; i++){
        let windowHeigth = this.window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100;
        if(revealtop < windowHeigth-revealPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
});
const section2 = document.querySelector('.section2')
if(window.innerWidth <= 526){
    section2.classList.remove('reavel')
}