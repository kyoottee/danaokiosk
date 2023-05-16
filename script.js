var header = document.getElementById("selector");
var btns = header.getElementsByClassName("locs");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function changeBackground(imagePath) {
  document.body.style.backgroundImage =
    "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.85)), url('" +
    imagePath +
    "')";
  document.body.style.transition = "all 2.5s";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}
