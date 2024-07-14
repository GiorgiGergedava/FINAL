let burger = document.querySelector(".burger");
let xmark = document.querySelector(".xmark");
let mobilemenu = document.querySelector(".header_nav");

burger.addEventListener("click", () => {
    mobilemenu.classList.add("show")
    burger.style.display = "none"
    xmark.style.display = "block";

})


xmark.addEventListener("click", () => {
    mobilemenu.classList.remove("show")
    burger.style.display = "block"
    xmark.style.display = "none";

})
