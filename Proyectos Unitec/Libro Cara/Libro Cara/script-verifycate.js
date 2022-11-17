const form = document.querySelector(".user-form");
const main = document.querySelector("main");
const btn = document.querySelector("#btn-register")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  login();
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  window.location.href = "index-register.html"
});
 
function login() {
  const inputs = [...document.querySelectorAll("input")];
  console.log(inputs);
  let usuario = inputs[0].value;
  let Contraseña = inputs[1].value;

  if (!(usuario = "infotec" && Contraseña == "2022"))
    return alert("Verifique sus credenciales");
    
  const userName = document.querySelector(".userName");
  userName.innerHTML = "Juan Perez";
  main.classList.remove("oculto");
}

let datos = [];
const form2 = document.querySelector("form");
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("enter");

  Send();
});

function Send() {
  const input = document.getElementById("texto");
  let dato = input.value;
  let resultado = document.getElementById("resultado");

  if (!dato) return;

  datos.push([dato, false]);

  input.value = "";

  refresh(datos, resultado);
}


const refresh = (arr, parent) => {
  resultado.innerHTML = "";

  datos.forEach(([dato]) => {
    resultado.innerHTML += plantilla(dato);
  });

  const btnsDelete = [...document.querySelectorAll(".btn-delete")];

  btnsDelete.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      const datoDelete = e.target.parentElement.querySelector("span").textContent;

      datos.splice(i, 1);

      refresh(datos, parent);
    });
  });


  const tareas = [...document.querySelectorAll(".tarea")];

  tareas.forEach((p, i) => {
    p.addEventListener("click", (e) => {

      datos[i][1] = datos[i][1] ? false : true;
      refresh(datos, parent);
    });
  });
};

const plantilla = (dato, tachado) => {
  return `<div class="tarea"><span class="${
    tachado ? "tachado" : ""
  }">${dato}</span><button class="btn-delete">✘</div>`;
};


[1, 2, 3].forEach((elemento, posicion, arreglo) => {
  console.log(elemento, posicion);
});


const variable = false ? "es true" : "es false";
console.log(variable);


