const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarlink = document.getElementsByClassName('navbar-link')[0]

togglebutton.addEventListener('click', () => {

    navbarlink.classList.toggle('active')

})

$('.toggle-button').click(function () {
    $('.navbar-links').toggle();
}); 

if ($(window).width() > 600) {
    $('.navbar-links').show();
}; 
