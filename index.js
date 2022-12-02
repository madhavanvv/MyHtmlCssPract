//transform: translateX(100px);

const items = document.querySelectorAll(".item");
const circle = document.querySelector(".circle");
items.forEach((item) => {
  item.addEventListener("click", () => {
    circle.style = "transform:rotate(180deg)";
    //circle.style = "transform: translateX(100px)";
    //console.log(circle);

    setTimeout(() => {
      circle.style = "transform:rotate(0deg)";
    }, 3000);
  });
});
