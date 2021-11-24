const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarlink = document.getElementsByClassName('navbar-link')[0]

togglebutton.addEventListener('click', () => {

    navbarlink.classList.toggle('active')

})

function myFunction() {
    var x = document.getElementById("mylink");
    if (x.className === "navbar-link") {
      x.className += " responsive";
    } else {
      x.className = "mylink";
    }
  }