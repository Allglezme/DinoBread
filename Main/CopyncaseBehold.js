//Variables
const botonReiniciar          = document.getElementById('botonReiniciar')
const botonSeleccion          = document.getElementById('botonSeleccion')
const sectionreiniciar        = document.getElementById("reiniciar")
const empezarSeleccion        = document.getElementById('empezarSeleccion')
const sectionVerMapa          = document.getElementById("sectionVerMapa")

const spanScore               = document.getElementById("spanScore")
const ContenerdorpaginaExp    = document.getElementById("ContenerdorpaginaExplicacion") 
var canvas = document.getElementById("mapa");
var context = canvas.getContext("2d");



let charaplays   = []



//Objetos
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
}

let Tyra = new CharaPlayable("Tyra",5,"./assets/Eggspace.png","./assets/dino.png")
let Steg = new CharaPlayable("Steg",5,"./assets/Eggspace3.png","./assets/dino.png")
let Axel = new CharaPlayable("Axel",5,"./assets/Eggspace2.png","./assets/dino.png")

charaplays.push(Tyra,Steg,Axel)

//Canvas
function Player(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
}
Player.prototype.draw = function () {
    context.fillStyle = "blue";
    context.fillRect(this.x, this.y, this.width, this.height);
};

function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
}
Enemy.prototype.draw = function () {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
};

var player = new Player(100, 175);
var enemy1 = new Enemy(20, 25);
var enemy2 = new Enemy(80, 25);
var enemy3 = new Enemy(160, 25);

context.fillStyle = "gray";
context.fillRect(0, 0, canvas.width, canvas.height);

player.draw();
enemy1.draw();
enemy2.draw();
enemy3.draw();

//Funciones
function iniciarJuego(){
    empezarSeleccion.addEventListener("click",iniciarSeleccion)
    
    paginaSeleccionPersonaje.style.display = "none"
    sectionreiniciar.style.display = "none"
    sectionVerMapa.style.display = "none"
    
}
function iniciarSeleccion() {
    //para invocar otras secciones   sectionSeleccionarAtaque.style.display = "none"
    paginaSeleccionPersonaje.style.display = "flex"
    sectionreiniciar.style.display = "flex"

    paginaExplicacion.style.display       = "none"
    ContenerdorpaginaExp.style.display    = "none"

    botonSeleccion.addEventListener('click', charaSelecionado)
    botonReiniciar.addEventListener("click",reiniciarJuego)

	charaplays.forEach((CharaPlayable) => {
        opcionDeCharaPlay = `
        <input type="radio" name="character" class= "inputChara"id=${CharaPlayable.name} />
        <label class = "tarjetadecharaplay" for=${CharaPlayable.name}>
            <p>${CharaPlayable.name}</p><img src=${CharaPlayable.picture} alt=${CharaPlayable.name}>
        </label>
        `
        contenedorOpciones.innerHTML += opcionDeCharaPlay

        inputTyra = document.getElementById("Tyra")
        inputSteg = document.getElementById("Steg")
        inputAxel = document.getElementById("Axel")
    })
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
    }
}
function reiniciarJuego (){
    location.reload()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener ('load', iniciarJuego)