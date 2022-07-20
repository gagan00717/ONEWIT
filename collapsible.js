let coll = document.getElementsByClassName("collapsible__button")[0];

coll.addEventListener("click", function () {
  this.classList.toggle("content--active");
  var content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = "700px";
  }
});
