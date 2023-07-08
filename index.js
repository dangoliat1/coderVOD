"use strict";

let vJugadores = [];

let bJug = document.getElementById("btnJugadores");
let bEqu = document.getElementById("btnEquipos");

let bRegJug = document.getElementById("btnRegreJug");
let bRegEqu = document.getElementById("btnRegreEqu");

let bRamaFem = document.getElementById("btnRamaFem");
let bRamaVar = document.getElementById("btnRamaVar");

let bConPadron = document.getElementById("btnConPadron");
let bSinPadron = document.getElementById("btnSinPadron");

let btnGuardaJ = document.getElementById("btnGuardaJ");

//Empieza con seccion para preguntar si desea jugadores predefinidos si es que no hay en localstorage
document.addEventListener("DOMContentLoaded", () => {
  console.log("acabo de entrar");
  let lsarr = localStorage.getItem("key");
  if (lsarr == null) {
    document.getElementById("deseaPadron").style.display = "block";
    document.getElementById("cuerpo").style.display = "none";
  } else {
    vJugadores = JSON.parse(lsarr);
    showTable();
  }
});

//Boton; si Empezar con Padron predefinido
bConPadron.addEventListener("click", function () {
  document.getElementById("deseaPadron").style.display = "none";
  document.getElementById("cuerpo").style.display = "block";
  vJugadores = [
    {
      nombre: "SAMUEL GARCIA",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "ANGEL NIETO",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "ADRIANA MENDOZA",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "JESSICA SUAREZ",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "ARTURO PEREZ",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "DANILO ORTIZ",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "MARA GONZALEZ",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "LINDA ORTEGA",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "MIRANDA RIOS",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "MANUEL FERNANDEZ",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "MISAEL GUTIERREZ",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "IKER GARCIA",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "REGINA SARABIA",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "VALERIA MENDEZ",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "ERNESTO BARRERA",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "ITZEL ARROYO",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "PABLO SOSA",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "EMILIO LEON",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "FATIMA HERNANDEZ",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "NANCY BUENDIA",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "SINUE MORALES",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "VALENTINA JIMENEZ",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "CAMILA URRIETA",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "MARIANA FERNANDEZ",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "URIEL VALENZUELA",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "MARTIN OROZCO",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "MONICA MONREAL",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "EMIR SOLORZANO",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "HUGO NIETO",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "MICHAEL BUENROSTRO",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "ANDREA HUERTA",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "BENITO TORRES",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "JULIETA MENDEZ",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "DIANA RODRIGUEZ",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "NURIA MARTINEZ",
      rama: "F",
      enEquipo: "🚫",
    },
    {
      nombre: "ALBERTO FUENTES",
      rama: "V",
      enEquipo: "🚫",
    },
    {
      nombre: "CARLOS DEL RIO",
      rama: "V",
      enEquipo: "🚫",
    },
  ];
  localStorage.setItem("key", JSON.stringify(vJugadores));
  showTable();
});

//Boton; No empezar con Padron, ingresar registro de jugadores desde un arreglo vacio
bSinPadron.addEventListener("click", function () {
  document.getElementById("deseaPadron").style.display = "none";
  document.getElementById("cuerpo").style.display = "block";
});

//Botones opciones Jugadores o Equipo
bJug.addEventListener("click", function () {
  document.getElementById("opciones").style.display = "none";
  document.getElementById("cJugadores").style.display = "block";
});

bEqu.addEventListener("click", function () {
  document.getElementById("opciones").style.display = "none";
  document.getElementById("cEquipos").style.display = "block";
});

//Botones regresar
bRegJug.addEventListener("click", function () {
  document.getElementById("opciones").style.display = "block";
  document.getElementById("cJugadores").style.display = "none";
});

bRegEqu.addEventListener("click", function () {
  document.getElementById("opciones").style.display = "block";
  document.getElementById("cEquipos").style.display = "none";
});

//Boton Guardar Nuevo Jugador
document.getElementById("nombre").addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    document.getElementById("btnGuardaJ").click();
  }
});
btnGuardaJ.addEventListener("click", function () {
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
        break;
      } else {
        //alert("No puede borrar un jugador estando en el equipo");
        document.getElementById("avisoBorrar").style.display = "block";
      }
    }
  }
}

//Botones para escoger equipo Femenil o Varonil
bRamaFem.addEventListener("click", function () {
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

bRamaVar.addEventListener("click", function () {
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
      '<a href="#" onclick="selecJug(' +
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
    c1.innerHTML = eJug["nombre"];
    c2.innerHTML =
      '<a href="#" onclick="bajaJug(' +
      "'" +
      eJug["nombre"] +
      "'" +
      ')" style="text-decoration: none;">❌</a>';
  });
}

//Funcion que selecciona jugador al equipo - modifica la propiedad enEquipo a S del vector vJugadores
function selecJug(pNombre) {
  for (let index = 0; index < vJugadores.length; index++) {
    if (vJugadores[index].nombre == pNombre) {
      vJugadores[index].enEquipo = "S";
      localStorage.setItem("key", JSON.stringify(vJugadores));
      showTableFilter(vJugadores[index].rama);
      break;
    }
  }
}

//Funcion que da de baja al jugador del equipo - modifica la propiedad enEquipo a "🚫" del vector vJugadores
function bajaJug(pNombre) {
  for (let index = 0; index < vJugadores.length; index++) {
    if (vJugadores[index].nombre == pNombre) {
      vJugadores[index].enEquipo = "🚫";
      localStorage.setItem("key", JSON.stringify(vJugadores));
      showTableFilter(vJugadores[index].rama);
      break;
    }
  }
}
