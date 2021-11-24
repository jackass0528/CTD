const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarlink = document.getElementsByClassName('navbar-link')[0]

togglebutton.addEventListener('click', () => {

    navbarlink.classList.toggle('active')

})

function myFunction() {
    var x = document.getElementsByClassName("navbar-link");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
