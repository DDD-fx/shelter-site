
let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let menu__link = document.querySelectorAll(".menu__link");

function burgerToggleClass() {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("menu--burger");
    document.body.classList.toggle("body-burger");
}
function burgerRemoveClass() {
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--burger");
    document.body.classList.remove("body-burger");
}


burger.addEventListener("click", function () {
    burgerToggleClass()
})

document.addEventListener( 'click', (e) => {
    if (!e.target.closest('header')){
        burgerRemoveClass()
    }
})

menu__link.forEach(el => el.addEventListener("click", function () {
    let bodyWidth = document.body.clientWidth;
    if (bodyWidth < 768) {
        burgerToggleClass()
    }
})
)

window.addEventListener('resize', function() {
    let bodyWidth = document.body.clientWidth;
    if (bodyWidth >= 768) {
        burgerRemoveClass()
    }
})



