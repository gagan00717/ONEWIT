const coll = document.getElementsByClassName("collapsible__button");
for(i=0;i<coll.length;i++){
  coll[i].addEventListener("click", function () {
    this.classList.toggle("content--active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = "700px";
    }
  });
}
