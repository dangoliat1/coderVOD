async function posicionJugador(index, pNombre, pRama) {
  const { value: position } = await Swal.fire({
    title: "Ingresa datos adicionales",
    input: "select",
    inputLabel: "Ingresa la Posición",
    inputOptions: {
      Posición: {
        banda: "Banda - Outside Hitter (OH)",
        opuesto: "Opuesto - Opposite (OP)",
        central: "Central - Middle Blocker (MB)",
        colocador: "Colocador - Setter (ST)",
        libero: "Libero (LB)",
      },
    },
    inputPlaceholder: "Selecciona una opción",
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value !== "") {
          resolve();
        } else {
          resolve("Selecciona una posición :)");
        }
      });
    },
  });

  if (position) {
    numeroJugador(index, pNombre, position, pRama);
  }
}

async function numeroJugador(index, pNombre, position, pRama) {
  const { value: numero } = await Swal.fire({
    title: "Escoge un Numero",
    input: "number",
    inputLabel: "Número",
    inputPlaceholder: "Un numero del 1 al 99",
    inputAttributes: {
      maxlength: 2,
      min: 1,
      max: 99,
    },
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value > 0 && value < 100) {
          const searchIndex = vJugadores.findIndex(
            (jugador) => jugador.numEquipo == value && jugador.rama == pRama
          );
          if (searchIndex < 0) {
            resolve();
          } else {
            resolve("Ya ha sido elegido este número!");
          }
        } else {
          resolve("Selecciona un numero del 1 al 99");
        }
      });
    },
  });

  if (numero) {
    vJugadores[index].enEquipo = "✔️";
    vJugadores[index].posicion = `${position}`;
    vJugadores[index].numEquipo = `${numero}`;

    localStorage.setItem("key", JSON.stringify(vJugadores));
    showTableFilter(vJugadores[index].rama);
    Swal.fire(
      `${pNombre} \n\nIngresa al equipo \n\nCon el número: ${numero} \nEn la posición de: ${position.toUpperCase()}`
    );
  }
}

async function borrarNopermitido() {
  Swal.fire({
    icon: "warning",
    title: "Jugador en Equipo",
    text: "Para borrar un jugador se debe dar de baja del equipo",
  });
}
