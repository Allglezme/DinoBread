const botonReiniciar          = document.getElementById('botonReiniciar')
const botonAnimaciones        = document.getElementById('buttonAnimat')
const botonSeleccion          = document.getElementById('botonSeleccion')
const sectionreiniciar        = document.getElementById("reiniciar")
const empezarSeleccion        = document.getElementById('empezarSeleccion')
const sectionAnimations       = document.getElementById('animations')
const sectionButtonAnimations = document.getElementById("buttonAnimations")
const sectionVerMapa          = document.getElementById("sectionVerMapa")
const ContenerdorpaginaExp    =  document.getElementById("ContenerdorpaginaExplicacion") 

let charaJugador
let charaplays = []

class CharaPlayable {
    constructor(name, hp,picture){
        this.name    = name
        this.hp      = hp 
        this.picture = picture
    }
}
// //class CharaPlayable {
//     constructor(name, picture, hp){
//         this.name = name
//         this.picture = picture esto faltsa por agragar si no da error
//         this.hp = hp 
//     }
// }*//
let Tyra = new CharaPlayable("Tyra",5,"./assets/female/kira/egg/crack.png")
let Steg = new CharaPlayable("Steg",5,"./assets/female/mono/egg/crack.png")
let Axel = new CharaPlayable("Axel",5,"./assets/female/doux/egg/crack.png")


charaplays.push(Tyra,Steg,Axel)

function iniciarJuego(){
    empezarSeleccion.addEventListener("click",iniciarSeleccion)
    botonAnimaciones.addEventListener("click",iniciarSectionAnimations)
    
    paginaSeleccionPersonaje.style.display = "none"
    sectionreiniciar.style.display = "none"
    sectionAnimations.style.display = "none"
    sectionVerMapa.style.display = "none"
    
}

function iniciarSeleccion() {
    //para invocar otras secciones   sectionSeleccionarAtaque.style.display = "none"
    paginaSeleccionPersonaje.style.display = "flex"
    sectionreiniciar.style.display = "flex"

    sectionButtonAnimations.style.display = "none"
    paginaExplicacion.style.display       = "none"
    ContenerdorpaginaExp.style.display    = "none"

    charaplays.forEach((CharaPlayable) => {
        opcionDeCharaPlay = `
        <input type="radio" name="character" id=${CharaPlayable.name} />
        <label class = "tarjetadecharaplay" for=${CharaPlayable.name}>
            <p>${CharaPlayable.name}</p><img src=${CharaPlayable.picture} alt=${CharaPlayable.name}>
        </label>
        `
        contenedorOpciones.innerHTML += opcionDeCharaPlay

        inputTyra = document.getElementById("Tyra")
        inputSteg = document.getElementById("Steg")
        inputAxel = document.getElementById("Axel")
    })

    botonSeleccion.addEventListener('click', charaSelecionado)
    botonReiniciar.addEventListener("click",reiniciarJuego)
}
function charaSelecionado() {
    if (inputTyra.checked){  
        charaJugador = inputTyra.id
    }
    else if(inputSteg.checked){  
        charaJugador = inputSteg.id
    }
    else if(inputAxel.checked){  
        charaJugador = inputAxel.id
    }
    else {
        alert("Debes seleccionar un dinosaurio 👈")
    }//Cambio de pantalla
    if (charaJugador.innerHTML != ""){
        paginaSeleccionPersonaje.style.display = "none"

        sectionVerMapa.style.display = "flex"
        Iniciarcanvas()
    }
}
function Iniciarcanvas(){
     pintarCanva()
    console.log("Se inicio el canvas")
}    
function pintarCanvas(){
    /* Esto da la velocidada del jugador
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY**/
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height

    )
    mascotaJugadorObjeto.pintarMiMokepon()
}
function iniciarSectionAnimations(){
    sectionreiniciar.style.display = "flex"
    sectionAnimations.style.display = "flex"
    
    paginaSeleccionPersonaje.style.display = "none"
    paginaExplicacion.style.display = "none"
    sectionButtonAnimations.style.display = "none"

    botonReiniciar.addEventListener("click",reiniciarJuego)
}
function reiniciarJuego (){
    location.reload()
}
window.addEventListener ('load', iniciarJuego)
