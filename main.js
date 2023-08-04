//Menu desplegable del feature
let desplegable_Features = document.querySelectorAll(".selector_Features")
desplegable_Features.forEach(seleccion => {
    seleccion.addEventListener("click", () => {
        seleccion.nextElementSibling.classList.toggle("activar")
    })
})

//Menu desplegable del Company
let desplegable_Company = document.querySelectorAll(".selector_Company")
desplegable_Company.forEach(seleccion => {
    seleccion.addEventListener("click", () => {
        seleccion.nextElementSibling.classList.toggle("activar")
    })
})

//menu hamburguesa desplasable
let menu_hamburguesa = document.querySelector(".hamburguesa");
let menu = document.querySelector(".menu");

menu_hamburguesa.addEventListener("click",  () => {
    menu.classList.toggle("habilitar");
    if(menu.classList.contains("habilitar")){
        menu_hamburguesa.src= "images/icon-close-menu.svg";
    }
    else{
        menu_hamburguesa.src= "images/icon-menu.svg"
    }
})