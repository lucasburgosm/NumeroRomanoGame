
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





function convertToRoman(num) {
  if(isFinite(num) == false) { return "Number Is not an Integer"  ;}   
  const numString = `${num}`;
  let finalNumber = [],
      cases = 1;
  for(let i = numString.length - 1; i >= 0 ; i--) {
  finalNumber = switchLetter(cases, numeroR(numString[i])) + finalNumber;  
  cases = cases + 1;
  }
  return finalNumber;
  function numeroR(a)  {  
      if(a == 0){ return ""
      ;}
      if(a > 0 && a < 4){ return "I".repeat(a)
      ;} 
      else if(a == 4) { return "IV"
      ;} 
      else if(a > 4 && a < 9) {
      return "V" + "I".repeat(a - 5)
      ;}
      else if(a == 9) {
      return "IX"
      ;}
      }    
  function  switchLetter(position,a) { 
      switch(position) {
      case 1:
      break;
      case 2:
      a = a.replace(/x/gi,"C");
      a = a.replace(/i/gi,"X");
      a = a.replace(/v/gi,"L");
      break;
      case 3:
      a = a.replace(/x/gi,"M");
      a = a.replace(/i/gi,"C");
      a = a.replace(/v/gi,"D");
      break;
      case 4:
      a = a.replace(/i/gi,"M");
      }
      return a
      }
  
  }






