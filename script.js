const projectBox = document.querySelectorAll(".project-box");

projectBox.forEach(function (parent) {
  parent.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#40643d";
    const children = this.querySelectorAll("*");
    children.forEach(function (child) {
      child.style.color = "white";
      child.style.transition = "color 0.5s";
      child.style.cursor = "pointer";
    });
    this.style.transition = "background-color 0.5s";
    this.style.cursor = "pointer";
  });

  parent.addEventListener("mouseout", function () {
    this.style.backgroundColor = "#f6f1ea";
    const children = this.querySelectorAll("*");
    children.forEach(function (child) {
      child.style.color = "black";
      child.style.transition = "color 0.5s";
    });
    this.style.transition = "background-color 0.5s";
  });
});
