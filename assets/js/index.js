let img1 = document.querySelector(".nutria");
img1.style.borderRadius = "30px";
img1.style.border = "none";

img1.addEventListener("click", () => {
  if (img1.style.border == "none") img1.style.border = "2px solid  #ff0000";
  else img1.style.border = "none";
});


const btn = document.querySelector(".btn");
const select1 = document.querySelector("#primero");
const select2 = document.querySelector("#segundo");
const select3 = document.querySelector("#tercero");
const input = document.querySelector(".mensaje");
const btn2 = document.querySelector('.btn2')
const parrafo = document.querySelector('#parrafo')
const pass1 = document.querySelector('#pass1')
const pass2 = document.querySelector('#pass2')
const pass3 = document.querySelector('#pass3')
const inicio = document.querySelector ('.text')
texto = 'Hola soy una nutria, haz click sobre mi';

function efectoTextTyping (elemento, texto, i = 0) {
  elemento.textContent += texto [i];

  if (i === texto.length-1) return;

  setTimeout(() => efectoTextTyping(inicio,texto, i +1), 100);
}

efectoTextTyping(inicio,texto)


btn.addEventListener("click", () => {
  
  const resultado = Number(select1.value) + Number(select2.value) + Number(select3.value);
  if (resultado >= 10)
    { input.value = 'Llevas demasiados stickers'
  }
  else {
    input.value = 'Llevas ' + resultado + ' stickers'
  }
 
})


btn2.addEventListener("click", () => {
  
  const resultado = pass1.value + pass2.value + pass3.value;
 console.log(resultado)
  if (resultado === '911') {
    parrafo.innerHTML = 'Password 1 correcto'
  }
  else if 
  (resultado === '714') {
    parrafo.innerHTML = 'Password 2 correcto'
  }
  else {
    parrafo.innerHTML = 'Password incorrecto'
  }
 
})
