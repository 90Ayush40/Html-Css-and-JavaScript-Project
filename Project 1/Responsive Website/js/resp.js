console.log("reps")
burger = document.getElementById('burger')
navbar = document.getElementById('fullNav')
navList = document.getElementById('navbarList')
rightNav = document.getElementById('rightSideNav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp')
})