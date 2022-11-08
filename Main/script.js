const botonReiniciar          = document.getElementById('botonReiniciar')
const botonAnimaciones        = document.getElementById('buttonAnimat')
const botonSeleccion          = document.getElementById('botonSeleccion')
const sectionreiniciar        = document.getElementById("reiniciar")
const empezarSeleccion        = document.getElementById('empezarSeleccion')
const sectionAnimations       = document.getElementById('animations')
const sectionButtonAnimations = document.getElementById("buttonAnimations")
const sectionVerMapa          = document.getElementById("sectionVerMapa")
const mapa                    = document.getElementById("mapa")
const ContenerdorpaginaExp    =  document.getElementById("ContenerdorpaginaExplicacion") 

let charaJugador
let charaJugadorObjeto
let charaplays = []

let lienzo = mapa.getContext("2d")
let intervaloMov
let mapaBackground = new Image()

mapaBackground.src = "./assets/backgroundgen.png"

let alturaDeseada
let anchoDelMapa = window.innerWidth -40
const anchoMaxMapa = 640
if (anchoDelMapa > anchoMaxMapa){
    anchoDelMapa = anchoMaxMapa -40
}

alturaDeseada = anchoDelMapa * 600/800
mapa.width = anchoDelMapa
mapa.height = alturaDeseada

class CharaPlayable {
    constructor(name, hp,picture,pictureMap){
        this.name    = name
        this.hp      = hp 
        this.picture = picture
        this.ancho = 80 
        this.alto= 80
        this.x = 50
        this.y = 100
        this.mapaFoto = new Image()
        this.mapaFoto.src = pictureMap
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMyChara(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}
// //class CharaPlayable {
//     constructor(name, picture, hp){
//         this.name = name
//         this.picture = picture esto faltsa por agragar si no da error
//         t/
//     }
// }*//
let Tyra = new CharaPlayable("Tyra",5,"./assets/Eggspace.png","./assets/dino.png")
let Steg = new CharaPlayable("Steg",5,"./assets/Eggspace.png","./assets/dino.png")
let Axel = new CharaPlayable("Axel",5,"./assets/Eggspace.png","./assets/dino.png")


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
        iniciarMapa()
    }
}

      
function pintarCanvas(){
    charaJugadorObjeto.x = charaJugadorObjeto.x + charaJugadorObjeto.velocidadX
    charaJugadorObjeto.y = charaJugadorObjeto.y + charaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    charaJugadorObjeto.pintarMyChara()
}
function iniciarMapa(){
        
    charaJugadorObjeto = obtenerObjetoChara(charaJugador)
    intervaloMov = setInterval(pintarCanvas,50)

    window.addEventListener("keydown", sePresionoTecla)
    window.addEventListener("keyup", detenerMovimiento)
}
function obtenerObjetoChara(){
for (let i = 0; i < charaplays.length; i++) {
    if (charaJugador === charaplays[i].name ) {
        return charaplays[i]
    }
}
}

/*inputs de movimiento*/
function moverDerecha(){
    charaJugadorObjeto.velocidadX = 5
}
function moverIzquierda(){
    charaJugadorObjeto.velocidadX = -5   
}
function moverAbajo(){
    charaJugadorObjeto.velocidadY = +5
}
function moverArriba(){
    charaJugadorObjeto.velocidadY =-5
    
}
function detenerMovimiento(){
    charaJugadorObjeto.velocidadX = 0
    charaJugadorObjeto.velocidadY = 0
}
function sePresionoTecla (event){
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break;
        case "ArrowDown":
            moverAbajo()
            break;
        case "ArrowRight":
            moverDerecha()
                break;
        case "ArrowLeft":
            moverIzquierda()
                break;
        default:
            break;
    }
}
/*colisiones detector*/
function checkCollisions(){
    detenerMovimiento()
    clearInterval(intervaloMov)
    console.log("colisionaste")
}
/*Otras animaciones*/
function iniciarSectionAnimations(){
    sectionreiniciar.style.display = "flex"
    sectionAnimations.style.display = "flex"
    
    paginaSeleccionPersonaje.style.display = "none"
    paginaExplicacion.style.display = "none"
    sectionButtonAnimations.style.display = "none"

    botonReiniciar.addEventListener("click",reiniciarJuego)
}
function checkCollisions(enemigo){
    const arribaEnemigo   = enemigo.y
    const abajoEnemigo     = enemigo.y + enemigo.alto
    const derechaEnemigo   = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 
   
    const superiorObjetoMascota  = mascotaJugadorObjeto.y
    const inferiorObjetoMascota  = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaObjetoMascota   = mascotaJugadorObjeto.x +  mascotaJugadorObjeto.ancho
    const izquierdaObjetoMascota  = mascotaJugadorObjeto.x 

    if(
        inferiorObjetoMascota < arribaEnemigo   ||
        superiorObjetoMascota > abajoEnemigo     ||
        derechaObjetoMascota  < izquierdaEnemigo ||
        izquierdaObjetoMascota  > derechaEnemigo
    ){
        return 
    }
    detenerMovimiento()
    clearInterval(intervaloMov)
    console.log("colisionaste")
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
   // alert("Colisionaste con "+ enemigo.name)
}
function reiniciarJuego (){
    location.reload()
}
window.addEventListener ('load', iniciarJuego)
