"use strict";

let vJugadores = [];

let botonJugadores = document.getElementById("btnJugadores"); 
let botonEquipos = document.getElementById("btnEquipos");

let botonRegresarJugador = document.getElementById("btnRegreJug");
let botonRegresarEquipo = document.getElementById("btnRegreEqu");

let botonRamaFemenil = document.getElementById("btnRamaFem");
let botonRamaVaronil = document.getElementById("btnRamaVar");

let botonConPadron = document.getElementById("btnConPadron");
let botonSinPadron = document.getElementById("btnSinPadron");

let botonGuardaJugador = document.getElementById("btnGuardaJ");

const toastGuardaJugador = document.getElementById("nuevoJugadorToast");
const toastEliminaJugador = document.getElementById("eliminaJugadorToast");
const toastAltaEquipo = document.getElementById("altaEquipoToast");
const toastBajaEquipo = document.getElementById("bajaEquipoToast");

//Empieza con seccion para preguntar si desea jugadores predefinidos si es que no hay en localstorage
document.addEventListener("DOMContentLoaded", () => {
  //console.log("acabo de entrar");
  let localStgeArray = localStorage.getItem("key");
  if (localStgeArray == null) {
    document.getElementById("deseaPadron").style.display = "block";
    document.getElementById("cuerpo").style.display = "none";
  } else {
    vJugadores = JSON.parse(localStgeArray);
    showTable();
  }
});

//Boton; si Empezar con Padron predefinido
botonConPadron.addEventListener("click", function () {
  document.getElementById("deseaPadron").style.display = "none";
  document.getElementById("cuerpo").style.display = "block";
  definePadron();
});

async function definePadron() {
  const respuesta = await fetch("jugadores.json");
  const data = await respuesta.json();
  //console.log(data);
  vJugadores = data;
  localStorage.setItem("key", JSON.stringify(vJugadores));
  showTable();
}

/* function definePadron() {
	fetch("jugadores.json")
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			vJugadores = data;
			localStorage.setItem("key", JSON.stringify(vJugadores));
			showTable();
		});
} */

//Boton; No empezar con Padron, ingresar registro de jugadores desde un arreglo vacio
botonSinPadron.addEventListener("click", function () {
  document.getElementById("deseaPadron").style.display = "none";
  document.getElementById("cuerpo").style.display = "block";
});

//Botones opciones Jugadores o Equipo
botonJugadores.addEventListener("click", function () {
  document.getElementById("opciones").style.display = "none";
  document.getElementById("cJugadores").style.display = "block";
});

botonEquipos.addEventListener("click", function () {
  document.getElementById("opciones").style.display = "none";
  document.getElementById("cEquipos").style.display = "block";
});

//Botones regresar
botonRegresarJugador.addEventListener("click", function () {
  document.getElementById("opciones").style.display = "block";
  document.getElementById("cJugadores").style.display = "none";
});

botonRegresarEquipo.addEventListener("click", function () {
  document.getElementById("opciones").style.display = "block";
  document.getElementById("cEquipos").style.display = "none";
});

//Boton Guardar Nuevo Jugador
document.getElementById("nombre").addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    document.getElementById("btnGuardaJ").click();
  }
});
botonGuardaJugador.addEventListener("click", function () {
  //alert("Entra a guardar jugador");
  //agregar al arreglo de jugadores
  //agregar el jugador al local storage
  let wRama = "";
  if (document.getElementById("ramaF").checked) {
    wRama = "F";
  } else {
    wRama = "V";
  }
  let wNombre = document.getElementById("nombre").value.toUpperCase();
  let oJug = {
    nombre: wNombre,
    rama: wRama,
    enEquipo: "🚫",
    posicion: "",
    numEquipo: "",
  };
  let wMsg = document.getElementById("msg");
  if (oJug.nombre == "") {
    wMsg.textContent = "... indique nombre";
  } else {
    wMsg.innerHTML = "&nbsp;";
    vJugadores.push(oJug);
    //let xValue = JSON.stringify(vJugadores);
    localStorage.setItem("key", JSON.stringify(vJugadores));
    showTable();
    const toast = new bootstrap.Toast(toastGuardaJugador);
    toast.show();
  }
});

//Dibuja tabla del Padron de Jugadores completo (Femenil y Varonil)
function showTable() {
  let xx = document.getElementById("bodyJug");
  xx.innerHTML = "";
  vJugadores.forEach(function (eJug) {
    // recorremos el array
    let rowCount = xx.rows.length;
    let x = xx.insertRow(rowCount);
    let c1 = x.insertCell(0);
    let c2 = x.insertCell(1);
    let c3 = x.insertCell(2);
    c1.innerHTML = eJug["nombre"];
    c2.innerHTML = eJug["rama"] == "V" ? "Varonil" : "Femenil";
    c3.innerHTML =
      '<a href="#" onclick="delJug(' +
      "'" +
      eJug["nombre"] +
      "'" +
      ')" style="text-decoration: none;">❌</a>';
  });
}

//Borra del padron de jugador (No se puede borrar si se le ha seleccionado para el equipo)
function delJug(pNombre) {
  for (let index = 0; index < vJugadores.length; index++) {
    if (vJugadores[index].nombre == pNombre) {
      if (vJugadores[index].enEquipo == "🚫") {
        vJugadores.splice(index, 1);
        localStorage.setItem("key", JSON.stringify(vJugadores));
        document.getElementById("avisoBorrar").style.display = "none";
        showTable();
        const toast = new bootstrap.Toast(toastEliminaJugador);
        toast.show();
        break;
      } else {
        //alert("No puede borrar un jugador estando en el equipo");
        //document.getElementById("avisoBorrar").style.display = "block";
        borrarNopermitido();
      }
    }
  }
}

//Botones para escoger equipo Femenil o Varonil
botonRamaFemenil.addEventListener("click", function () {
  //  filtraJugFem();
  document.getElementById("titEq").textContent =
    "Seleccionar Jugadores del Padrón";
  document.getElementById("colEq").style.display = "block";
  document.getElementById("eqDisp").style.display = "block";
  document.getElementById("eqTaurus").textContent = "Equipo Taurus Femenil";
  document.getElementById("btnRamaFem").className =
    "btn btn-outline-primary btn-sm active";
  document.getElementById("btnRamaVar").className =
    "btn btn-outline-primary btn-sm";
  showTableFilter("F");
});

botonRamaVaronil.addEventListener("click", function () {
  document.getElementById("titEq").textContent =
    "Seleccionar Jugadores del Padrón";
  document.getElementById("colEq").style.display = "block";
  document.getElementById("eqDisp").style.display = "block";
  document.getElementById("eqTaurus").textContent = "Equipo Taurus Varonil";
  document.getElementById("btnRamaVar").className =
    "btn btn-outline-primary btn-sm active";
  document.getElementById("btnRamaFem").className =
    "btn btn-outline-primary btn-sm";
  showTableFilter("V");
});

//Dibuja tabla para armar equipo y tabla de equipo armado - dependiendo de la porpiedad "enEquipo" del vector global de jugadores "vJugadores"
function showTableFilter(pRama) {
  let vDispo = [];
  let vEquip = [];
  if (pRama == "F") {
    vDispo = vJugadores.filter((el) => el.rama == "F" && el.enEquipo == "🚫");
    vEquip = vJugadores.filter((el) => el.rama == "F" && el.enEquipo != "🚫");
  } else {
    vDispo = vJugadores.filter((el) => el.rama == "V" && el.enEquipo == "🚫");
    vEquip = vJugadores.filter((el) => el.rama == "V" && el.enEquipo != "🚫");
  }

  let xx = document.getElementById("bodyEligeJug");
  xx.innerHTML = "";
  vDispo.forEach(function (eJug) {
    // recorremos el array
    let rowCount = xx.rows.length;
    let x = xx.insertRow(rowCount);
    let c1 = x.insertCell(0);
    let c2 = x.insertCell(1);
    c1.innerHTML = eJug["nombre"];
    c2.innerHTML =
      '<a href="#" onclick="seleccionDeJugador(' +
      "'" +
      eJug["nombre"] +
      "'" +
      ')" style="text-decoration: none;">➡️</a>';
  });
  //----------
  let zz = document.getElementById("bodyJugEqu");
  zz.innerHTML = "";
  vEquip.forEach(function (eJug) {
    // recorremos el array
    let rowCount = zz.rows.length;
    let x = zz.insertRow(rowCount);
    let c1 = x.insertCell(0);
    let c2 = x.insertCell(1);
    let c3 = x.insertCell(2);
    let c4 = x.insertCell(3);
    c1.innerHTML = eJug["nombre"];
    c2.innerHTML = eJug["posicion"];
    c3.innerHTML = eJug["numEquipo"];
    c4.innerHTML =
      '<a href="#" onclick="bajaDeJugador(' +
      "'" +
      eJug["nombre"] +
      "'" +
      ')" style="text-decoration: none;">❌</a>';
  });
}

//Funcion que selecciona jugador al equipo - modifica la propiedad enEquipo a S del vector vJugadores
function seleccionDeJugador(pNombre) {
  for (let index = 0; index < vJugadores.length; index++) {
    if (vJugadores[index].nombre == pNombre) {
      posicionJugador(index, pNombre,vJugadores[index].rama);
      /* vJugadores[index].enEquipo = "S";
			localStorage.setItem("key", JSON.stringify(vJugadores));
			showTableFilter(vJugadores[index].rama);
			const toast = new bootstrap.Toast(toastAltaEquipo);
			toast.show(); */
      break;
    }
  }
}

//Funcion que da de baja al jugador del equipo - modifica la propiedad enEquipo a "🚫" del vector vJugadores
function bajaDeJugador(pNombre) {
  for (let index = 0; index < vJugadores.length; index++) {
    if (vJugadores[index].nombre == pNombre) {
      vJugadores[index].enEquipo = "🚫";
      localStorage.setItem("key", JSON.stringify(vJugadores));
      showTableFilter(vJugadores[index].rama);
      const toast = new bootstrap.Toast(toastBajaEquipo);
      toast.show();
      break;
    }
  }
}
