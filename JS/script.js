const text = document.querySelector(".profile__next");
const right = document.querySelector(".profile__mark");
text.addEventListener("mouseover", function () {
  right.classList.add("profile__delay");
});
text.addEventListener("mouseout", function () {
  right.classList.remove("profile__delay");
});

const text2 = document.querySelector(".card__next");
const right2 = document.querySelector(".card__mark");
text2.addEventListener("mouseover", function () {
  right2.classList.add("card__delay");
});
text2.addEventListener("mouseout", function () {
  right2.classList.remove("card__delay");
});
