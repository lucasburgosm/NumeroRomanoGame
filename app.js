// Ocultar mostrar contenido
const ocultar = () => {
div1 = document.getElementById("primerB");
botton = document.getElementById("show");
if(botton.innerHTML !== "Mostrar"){ 
    div1.style.display = "none";
    botton.innerHTML = "Mostrar";
} else { 
  div1.style.display = "";
  botton.innerHTML = "Ocultar";
  }
}

const myFunction = () => {
let demo = document.getElementById("demo");
if(typeof count === "undefined") { count = 0 };
//
if (count < 5) { 
    demo.innerHTML = "Contador" + " " + count;
    document.getElementById("reset").innerHTML = "Add 1";
    count ++;
    if (count === 5) {
         document.getElementById("reset").innerHTML = "Reset";
       }
} else {
    document.getElementById("demo").innerHTML = "Start";
    document.getElementById("reset").innerHTML = "Add 1"
    count = 0
}
}

const lista = () => {
const valor = document.getElementById("id1").value;    
const para = document.createElement("p");
document.getElementById("id1").value = "";
//
para.setAttribute("class", `seleccion ${valor}`);
para.innerHTML = para.className;

//
const bottonDelete = document.createElement("button");
bottonDelete.innerHTML = "Delete";  
// bottonDelete.value = count;
document.getElementById("link")
        .appendChild(para)
        .appendChild(bottonDelete);
console.log(para.attributes);

bottonDelete.onclick = () => { 
   para.remove();
   bottonDelete.remove()
   } 
} 
/////

const borrarLista = () => {
parag = document.getElementById("link");
while (parag.hasChildNodes()) {
  parag.removeChild(parag.firstChild);
}
}
//document.getElementById("link").innerHTML = Math.random(0,1000);
//const y = document.getElementsByTagName("p");
//document.getElementById("final").innerHTML = y[0].textContent  ;

