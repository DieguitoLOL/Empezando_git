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