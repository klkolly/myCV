// the navlink in  index(get start ) page could limk to the price page or some thing 
// but now it's not use ,so make a alert to make visitors to see next page

navLink = document.querySelectorAll(".nav-link")
for (i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    alert("just click get start!!");
  })
}