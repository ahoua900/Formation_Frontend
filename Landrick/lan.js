
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("img-dark").style.display = "flex";

    document.getElementById("img-light").style.display = "none";
    document.getElementById("mynav").style.backgroundColor = "White";
    document.getElementById("mynav").style.transition = ".6s";
    document.getElementById("menu").classList.remove("menu");
    document.getElementById("menu").classList.add("menus");
    document.getElementById("buy").style.backgroundColor = "rgba(50, 194, 236)";
    document.getElementById('buy').style.color = "White";
    document.getElementById("actif").style.color = "rgba(50, 194, 236)";
  } else{
    document.getElementById("img-light").style.display = "flex";
    document.getElementById("img-dark").style.display = "none"
    document.getElementById("mynav").style.backgroundColor = "transparent";
    document.getElementById("mynav").style.transition = ".6s";
    document.getElementById("menu").classList.remove("menus");
    document.getElementById("menu").classList.add("menu");
    document.getElementById("buy").style.backgroundColor = "White";
    document.getElementById("buy").style.color = "Black";
    document.getElementById("actif").style.color = "White";
  }
}
