// window.onload = function () {
//   window.datos = [];
// };
let datos = [];
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
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

///////////////////////////////////////////////
const clrBtn = document.querySelector(".clrbtn");

const reset = () => {
  datos = [];

  refresh(datos, resultado);
};
clrBtn.addEventListener("click", reset);

const refresh = (arr, parent) => {
  resultado.innerHTML = "";

  datos.forEach(([dato, tachado]) => {
    resultado.innerHTML += plantilla(dato, tachado);
  });

  const btnsDelete = [...document.querySelectorAll(".btn-delete")];
  //   console.log(btnsDelete);

  btnsDelete.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      const datoDelete = e.target.parentElement.querySelector("p").textContent;

      datos.splice(i, 1);

      refresh(datos, parent);
    });
  });

  //   for (const btn of btnsDelete) {
  //     btn.addEventListener("click", (e) => {
  //       const datoDelete = e.target.parentElement.querySelector("p").textContent;

  //       let i = 0,
  //         iDelete;
  //       for (const dato of datos) {
  //         if (dato == datoDelete) iDelete = i;
  //         i++;
  //       }

  //       datos.splice(iDelete, 1);
  //       //   datos = datos.filter((elemento) => elemento != dato);

  //       refresh(datos, parent);
  //     });
  //   }

  const tareas = [...document.querySelectorAll(".tarea")];
  //   console.log(btnsDelete);

  tareas.forEach((p, i) => {
    p.addEventListener("click", (e) => {
      //   console.log(e.target.classList);

      datos[i][1] = datos[i][1] ? false : true;
      //   e.target.classList.add("tachado");
      refresh(datos, parent);
    });
  });
};

const plantilla = (dato, tachado) => {
  return `<div class="tarea"><p class="${
    tachado ? "tachado" : ""
  }">${dato}</p><button class="btn-delete">✘</div>`;
};

//////////////////////////////
// forEach

[1, 2, 3].forEach((elemento, posicion, arreglo) => {
  console.log(elemento, posicion);
});

///////////////////////////////
// ?
const variable = false ? "es true" : "es false";
console.log(variable);
