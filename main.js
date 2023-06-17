let vRama = {
  V: "Varonil",
  F: "Femenil",
};
let vPlanPago = [
  { tipo: "M", desc: "Mensual", costoMensual: 1500, factor: 1 },
  { tipo: "T", desc: "Trimestral", costoMensual: 1400, factor: 3 },
  { tipo: "S", desc: "Semestral", costoMensual: 1250, factor: 6 },
  { tipo: "A", desc: "Anual", costoMensual: 1100, factor: 12 },
];

let vCategoria = {
  "J>": "Juvenil Mayor",
  "J<": "Juvenil Menor",
  "I>": "Infantil Mayor",
  "I<": "Infantil Menor",
  LB: "Libre",
};

let vEquipos = [
  { clave: "J>V", rama: "V", categoria: "J>", armado: "N" },
  { clave: "J<V", rama: "V", categoria: "J<", armado: "N" },
  { clave: "J>F", rama: "F", categoria: "J>", armado: "N" },
  { clave: "J<F", rama: "F", categoria: "J<", armado: "N" },
  { clave: "I>V", rama: "V", categoria: "I>", armado: "N" },
  { clave: "I<V", rama: "V", categoria: "I<", armado: "N" },
  { clave: "I>F", rama: "F", categoria: "I>", armado: "N" },
  { clave: "I<F", rama: "F", categoria: "I<", armado: "N" },
];

let vJugadoresParaEquipo = [];

let vJugadores = [
  {
    nombre: "SAMUEL GARCIA",
    aNac: "2006",
    rama: "V",
    planPago: "M",
    categoria: "J<",
    equipo: "",
  },
  {
    nombre: "ANGEL NIETO",
    aNac: "2004",
    rama: "V",
    planPago: "T",
    categoria: "J>",
    equipo: "",
  },
  {
    nombre: "ADRIANA MENDOZA",
    aNac: "2009",
    rama: "F",
    planPago: "T",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "JESSICA SUAREZ",
    aNac: "2011",
    rama: "F",
    planPago: "M",
    categoria: "I<",
    equipo: "",
  },
  {
    nombre: "ARTURO PEREZ",
    aNac: "2005",
    rama: "V",
    planPago: "A",
    categoria: "J>",
    equipo: "",
  },
  {
    nombre: "DANILO ORTIZ",
    aNac: "2007",
    rama: "V",
    planPago: "A",
    categoria: "J<",
    equipo: "",
  },
  {
    nombre: "MARA GONZALEZ",
    aNac: "2004",
    rama: "F",
    planPago: "A",
    categoria: "J>",
    equipo: "",
  },
  {
    nombre: "LINDA ORTEGA",
    aNac: "2009",
    rama: "F",
    planPago: "S",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "MIRANDA RIOS",
    aNac: "2004",
    rama: "F",
    planPago: "M",
    categoria: "J>",
    equipo: "",
  },
  {
    nombre: "MANUEL FERNANDEZ",
    aNac: "2010",
    rama: "V",
    planPago: "M",
    categoria: "I<",
    equipo: "",
  },
  {
    nombre: "MISAEL GUTIERREZ",
    aNac: "2005",
    rama: "V",
    planPago: "S",
    categoria: "J>",
    equipo: "",
  },
  {
    nombre: "IKER GARCIA",
    aNac: "2005",
    rama: "V",
    planPago: "T",
    categoria: "J>",
    equipo: "",
  },
  {
    nombre: "REGINA SARABIA",
    aNac: "2004",
    rama: "F",
    planPago: "M",
    categoria: "J>",
    equipo: "",
  },
  {
    nombre: "VALERIA MENDEZ",
    aNac: "2008",
    rama: "F",
    planPago: "M",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "ERNESTO BARRERA",
    aNac: "2005",
    rama: "V",
    planPago: "S",
    categoria: "J>",
    equipo: "",
  },
  {
    nombre: "ITZEL ARROYO",
    aNac: "2007",
    rama: "F",
    planPago: "A",
    categoria: "J<",
    equipo: "",
  },
  {
    nombre: "PABLO SOSA",
    aNac: "2007",
    rama: "V",
    planPago: "M",
    categoria: "J<",
    equipo: "",
  },
  {
    nombre: "EMILIO LEON",
    aNac: "2008",
    rama: "V",
    planPago: "M",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "FATIMA HERNANDEZ",
    aNac: "2005",
    rama: "F",
    planPago: "M",
    categoria: "J>",
    equipo: "",
  },
  {
    nombre: "NANCY BUENDIA",
    aNac: "2008",
    rama: "F",
    planPago: "S",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "SINUE MORALES",
    aNac: "2009",
    rama: "V",
    planPago: "S",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "VALENTINA JIMENEZ",
    aNac: "2011",
    rama: "F",
    planPago: "M",
    categoria: "I<",
    equipo: "",
  },
  {
    nombre: "CAMILA URRIETA",
    aNac: "2008",
    rama: "F",
    planPago: "A",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "MARIANA FERNANDEZ",
    aNac: "2005",
    rama: "F",
    planPago: "T",
    categoria: "J>",
    equipo: "",
  },
  {
    nombre: "URIEL VALENZUELA",
    aNac: "2008",
    rama: "V",
    planPago: "T",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "MARTIN OROZCO",
    aNac: "2009",
    rama: "V",
    planPago: "M",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "MONICA MONREAL",
    aNac: "2007",
    rama: "F",
    planPago: "M",
    categoria: "J<",
    equipo: "",
  },
  {
    nombre: "EMIR SOLORZANO",
    aNac: "2008",
    rama: "V",
    planPago: "M",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "HUGO NIETO",
    aNac: "2005",
    rama: "V",
    planPago: "S",
    categoria: "J>",
    equipo: "",
  },
  {
    nombre: "MICHAEL BUENROSTRO",
    aNac: "2008",
    rama: "V",
    planPago: "S",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "ANDREA HUERTA",
    aNac: "2009",
    rama: "F",
    planPago: "M",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "BENITO TORRES",
    aNac: "2007",
    rama: "V",
    planPago: "A",
    categoria: "J<",
    equipo: "",
  },
  {
    nombre: "JULIETA MENDEZ",
    aNac: "2008",
    rama: "F",
    planPago: "T",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "DIANA RODRIGUEZ",
    aNac: "2010",
    rama: "F",
    planPago: "M",
    categoria: "I<",
    equipo: "",
  },
  {
    nombre: "NURIA MARTINEZ",
    aNac: "2008",
    rama: "F",
    planPago: "A",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "ALBERTO FUENTES",
    aNac: "2009",
    rama: "V",
    planPago: "M",
    categoria: "I>",
    equipo: "",
  },
  {
    nombre: "CARLOS DEL RIO",
    aNac: "2007",
    rama: "V",
    planPago: "S",
    categoria: "J<",
    equipo: "",
  },
];

let menuP;
while (menuP !== "S") {
  menuP = prompt(
    "Academia de Voleibol Taurus \nElija una opcion (S para Salir y ver instrucciones en pantalla)\n \n1.- Registrar nuevo Jugador \n2.- Armar Equipo \n3.- Consultar Padron de Jugadores\n4.- Proyeccion Mensual $"
  );
  menuP = menuP.toUpperCase();
  switch (menuP) {
    case "1":
      registrarJugador();
      break;
    case "2":
      armarEquipo();
      break;
    case "3":
      consultarPadron();
      break;
    case "4":
      determinarIngreso();
      break;
    case "S":
      break;
    default:
      alert("Opcion no valida");
      break;
  }
}


//OPCION 1; REGISTRAR JUGADOR
function registrarJugador() {
  console.log("Entró a registarJugador");
  let opcion;
  while (opcion !== "S") {
    opcion = prompt(
      "Indique datos del jugador (S para Salir)\n \n Utilice el siguiente formato\n nombre|año Nac|rama (V/F)|Plan de pago(M/T/S/A)"
    );
    opcion = opcion.toUpperCase()
    if (opcion !== "S") {
      vDatos = opcion.split("|")

      let y = new Date().getFullYear()
      
      let iANac = parseInt(vDatos[1])
      
      let wCategoria = ""
      if (iANac === y-19 || iANac === y-18) wCategoria = 'J>'
      else if (iANac === y-17 || iANac === y-16) wCategoria = 'J<'
      else if (iANac === y-15 || iANac === y-14) wCategoria = 'I>'
      else if (iANac === y-13 || iANac === y-12) wCategoria = 'I<'
      else if (iANac < y-12 || iANac > y-19) wCategoria = ''
              
      accion = prompt("Procede Registro? (S=Si, N=No)");
      accion = accion.toUpperCase()
      if (accion == "S") {      
        let oJug = {
          "nombre": vDatos[0],
          "aNac": vDatos[1],
          "rama": vDatos[2],
          "planPago": vDatos[3],
          "categoria": wCategoria,
          "equipo": ""

         }
         vJugadores.push(oJug)

         console.log(vJugadores)
      }
    } 
  }
}


//OPCION 2 ARMAR UN EQUIPO CON PADRON
function armarEquipo() {
  console.log("Entró a armarEquipo");
  let opcion;
  while (opcion !== "S") {
    opcion = prompt(
      "Elija el equipo por armar (S para Regresar)\n \nJ>V = Juvenil Mayor Varonil, \nJ<V = Juvenil Menor Varonil, \nJ>F = Juvenil Mayor Femenil, \nJ<F = Juvenil Menor Femenil, \nI>V = Infantil Mayor Varonil, \nI<V = Infantil Menor Varonil, \nI>F = Infantil Mayor Femenil, \nI<F = Infantil Menor Femenil"
    );
    opcion = opcion.toUpperCase();
    const set1 = new Set([
      "J>V",
      "J<V",
      "J>F",
      "J<F",
      "I>V",
      "I<V",
      "I>F",
      "I<F",
    ]);
    if (set1.has(opcion)) {
      eqX = vEquipos.filter((vEquipos) => vEquipos.clave === opcion);
      vJugadoresParaEquipo = vJugadores.filter(function (el) {
        return el.rama == eqX[0].rama && el.categoria == eqX[0].categoria;
      });
      incluirJugadores(opcion);
      eqX = vJugadores.filter((vJugadores) => vJugadores.equipo === opcion);
      console.log(eqX);
      //console.log(vJugadores);

      break;
    }
  }
}

function incluirJugadores(eqp) {
  let opcion;
  while (opcion !== "S") {
    opcion = prompt(
      "Indique el nombre del Jugador o Jugadora a incluir en el equipo  " +
        eqp +
        "  (S para regresar)"
    );
    opcion = opcion.toUpperCase();
    if (opcion !== "S") {
      let seleccionado = vJugadoresParaEquipo.find(
        (vJugadoresParaEquipo) => vJugadoresParaEquipo.nombre === opcion
      );
      if (seleccionado == undefined) {
        console.log("Nombre no elegible");
      } else {
        asignaEquipo("nombre", seleccionado.nombre, "equipo", eqp)
        console.log(seleccionado.nombre);

      }
    }
  }
}

function asignaEquipo(datoJugABuscar, valNomABuscar, datoJugAModif, valEqAModif) {
  vJugadores.forEach(function (eJug) { // recorremos el array
    eJug[datoJugAModif] = eJug[datoJugABuscar] == valNomABuscar ? valEqAModif : eJug[datoJugAModif]
  })
}



//OPCION 3 CONSULTAR PADRON
function consultarPadron() {
  console.log("Entró a consultarPadron");
  let opcion;
  while (opcion !== "S") {
    opcion = prompt(
      "Elija una opcion (S para Regresar)\n \nR = Por Rama  \nC = Por Categoría \nP = Plan de Pago \nT = Padron Completo"
    );
    opcion = opcion.toUpperCase()
    switch (opcion) {
      case "R":
        porRama()
        break;
      case "C":
        porCategoria()
        break;
      case "P":
        porPlan()
        break;
      case "T":
        console.log(vJugadores)
        break;
      case "S":
        break;
      default:
        alert("Opcion no valida");
        break;
    }
  }
}


function porRama() {
  console.log("Entró a porRama");
  let opcion;
  while (opcion !== "S") {
    opcion = prompt(
      "Elija una opcion (S para Regresar)\n \nV = Varonil  \nF = Femenil"
    );
    opcion = opcion.toUpperCase();
    let seleccionados;
    switch (opcion) {
      case "V":
        seleccionados = vJugadores.filter(
          (vJugadores) => vJugadores.rama === "V"
        );
        break;
      case "F":
        seleccionados = vJugadores.filter(
          (vJugadores) => vJugadores.rama === "F"
        );
        break;
      case "S":
        break;
      default:
        alert("Opcion no valida");
        break;
    }
    const set1 = new Set(["V", "F"]);
    if (set1.has(opcion)) {
      seleccionados.forEach(function (item) {
        console.log(item);
      });
    }
  }
}


function porCategoria() {
  console.log("Entró a porCategoria");
  let opcion;
  while (opcion !== "S") {
    opcion = prompt(
      "Elija una opcion (S para Regresar)\n \nJ> = Juvenil Mayor  \nJ< = Juvenil Menor \nI> = Infantil Mayor \nI< = Infantil Menor"
    );
    opcion = opcion.toUpperCase();
    let seleccionados;
    switch (opcion) {
      case "J>":
        seleccionados = vJugadores.filter(
          (vJugadores) => vJugadores.categoria === "J>"
        );
        break;
      case "J<":
        seleccionados = vJugadores.filter(
          (vJugadores) => vJugadores.categoria === "J<"
        );
        break;
      case "I>":
        seleccionados = vJugadores.filter(
          (vJugadores) => vJugadores.categoria === "I>"
        );
        break;
      case "I<":
        seleccionados = vJugadores.filter(
          (vJugadores) => vJugadores.categoria === "I<"
        );
        break;
      case "S":
        break;
      default:
        alert("Opcion no valida");
        break;
    }
    const set1 = new Set(["J>", "J<", "I>", "I<"]);
    if (set1.has(opcion)) {
      seleccionados.forEach(function (item) {
        console.log(item);
      });
    }
  }

  /* 
    let seleccionados = vJugadores.filter(function (el) {
      return el.categoria == "J>" && el.rama == "F";
      }
    );
    console.log(seleccionados) */
}

function porPlan() {
  console.log("Entró a porPlan");
  let opcion;
  while (opcion !== "X") {
    opcion = prompt(
      "Elija una opcion (X para Regresar)\n \nM = Mensual \nT = Triestral \nS = Semestral \nA = Anual"
    );
    opcion = opcion.toUpperCase();
    let seleccionados;
    switch (opcion) {
      case "M":
        seleccionados = vJugadores.filter(
          (vJugadores) => vJugadores.planPago === "M"
        );
        break;
      case "T":
        seleccionados = vJugadores.filter(
          (vJugadores) => vJugadores.planPago === "T"
        );
        break;
      case "S":
        seleccionados = vJugadores.filter(
          (vJugadores) => vJugadores.planPago === "S"
        );
        break;
      case "A":
        seleccionados = vJugadores.filter(
          (vJugadores) => vJugadores.planPago === "A"
        );
        break;
      case "X":
        break;
      default:
        alert("Opcion no valida");
        break;
    }
    const set1 = new Set(["M", "T", "S", "A"]);
    if (set1.has(opcion)) {
      seleccionados.forEach(function (item) {
        console.log(item);
      });
    }
  }
}


//OPCION 4 DETERMINAR PROYECCION DE INGRESO MENSUAL
function determinarIngreso() {
  console.log("Entró a determinarIngreso");
  let total = 0;
  vJugadores.forEach(function (item) {
    planX = vPlanPago.filter((vPlanPago) => vPlanPago.tipo === item.planPago);
    total += planX[0].costoMensual;
  });
  console.log("Se espera un ingreso mensual de $" + total.toLocaleString());
}
