import  convertToRoman from './NumRomConverter';

let vidas = 3,
    totalIntentos = 10,
    puntos = 0,
    intentos = document.getElementById("intentos");

intentos.innerHTML = `Intentos: ${totalIntentos} - Puntos: ${puntos}`

const startgame = () => {console.log("hola")};
document.getElementById("prueba").onclick = () => { startgame()}


const check = () => {
// start game
if(document.getElementById("game").innerHTML === "Start Game"){
  document.getElementById("NumReal").innerHTML = Math.floor(Math.random() * 40) + 1;
  return document.getElementById("game").innerHTML = `Enter! ${vidas} lifes in this number`
} 

numUserText = document.getElementById("NumText").value.toUpperCase();
numToCheck  = document.getElementById("NumReal").innerHTML;

if(convertToRoman(numToCheck) === numUserText) {
  document.getElementById("NumReal").innerHTML = Math.floor(Math.random() * 40) + 1;
  const numRom = document.createElement("h2") ;
  numRom.innerHTML = `${convertToRoman(numToCheck)} = ${numToCheck} -- ✓` ;
  document.getElementById("tabla").appendChild(numRom);
  vidas = 3;
  document.getElementById("NumText").value = "";
  puntos++;
  totalIntentos--;
  intentos.innerHTML = `Intentos: ${totalIntentos} - Puntos: ${puntos}`
} else {
    if(vidas === 1){
        vidas = 3;
        document.getElementById("NumReal").innerHTML = Math.floor(Math.random() * 40) + 1;
        const numRom = document.createElement("h2") ;
        numRom.innerHTML = `${convertToRoman(numToCheck)} = ${numToCheck} -- X` ;
        document.getElementById("tabla").appendChild(numRom);
        totalIntentos--;
        intentos.innerHTML = `Intentos: ${totalIntentos} - Puntos: ${puntos}`
        } else {  vidas = vidas - 1 }
      //alert(`${vidas} lifes left`}
  }
document.getElementById("game").innerHTML = `Enter! ${vidas} lifes in this number`;
}







