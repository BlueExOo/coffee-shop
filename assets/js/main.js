let navBar = document.querySelector(".navbar");

document.getElementById("menu-btn").onclick = () => {
  navBar.classList.toggle("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.getElementById("cart-btn").onclick = () => {
  cartItem.classList.toggle("show");
  navBar.classList.remove("active");
  searchBox.classList.remove("show");
};

let searchBox = document.querySelector(".search-form");

document.getElementById("search-btn").onclick = () => {
  searchBox.classList.toggle("show");
  navBar.classList.remove("active");
  cartItem.classList.remove("show");
};

window.onscroll = () => {
  navBar.classList.remove("active");
  cartItem.classList.remove("show");
  searchBox.classList.remove("show");
};
