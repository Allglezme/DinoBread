const botonReiniciar = document.getElementById('botonReiniciar')
const empezarSeleccion = document.getElementById('empezarSeleccion')

let charaplays = []

class CharaPlayable {
    constructor(name, hp){
        this.name = name
        this.hp = hp 
    }
}
// //class CharaPlayable {
//     constructor(name, picture, hp){
//         this.name = name
//         this.picture = picture esto faltsa por agragar si no da error
//         this.hp = hp 
//     }
// }*//
let Tyra = new CharaPlayable("Tyra",5)
let Steg = new CharaPlayable("Steg",5)
let Axel = new CharaPlayable("Axel",5)


charaplays.push(Tyra,Steg,Axel)

function iniciarJuego(){
    empezarSeleccion.addEventListener("click",iniciarSeleccion)
    paginaSeleccionPersonaje.style.display = "none"
}

function iniciarSeleccion() {
    //para invocar otras secciones   sectionSeleccionarAtaque.style.display = "none"
    paginaSeleccionPersonaje.style.display = "flex"
    paginaExplicacion.style.display = "none"

    charaplays.forEach((CharaPlayable) => {
        opcionDeCharaPlay = `
        <input type="radio" name="character" id=${CharaPlayable.name} />
        <label class = "tarjetadecharaplay" for=${CharaPlayable.name}>
            <p>${CharaPlayable.name}</p>
        </label>
        `
        contenedorOpciones.innerHTML += opcionDeCharaPlay

        inputTyra = document.getElementById("Tyra")
        inputSteg = document.getElementById("Steg")
        inputAxel = document.getElementById("Axel")
    })

   
    botonReiniciar.addEventListener("click",reiniciarJuego)
}
function reiniciarJuego (){
    location.reload()
}
window.addEventListener ('load', iniciarJuego)