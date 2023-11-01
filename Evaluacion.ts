// Clase para cada Nodo
export class Node {
  nombrePiloto: any;
  modeloAuto: any;
  puntos: any;

  siguiente: Node | null;

  // @Contructor
  constructor(nombrePiloto: any, modeloAuto: any, puntos: any) {
    this.nombrePiloto = nombrePiloto;
    this.modeloAuto = modeloAuto;
    this.puntos = puntos;

    this.siguiente = null;
  }
}

class LinkedList {
  inicio: Node | null;
  // @Constructor
  constructor() {
    this.inicio = null;
  }

  // Insertar
  add(nombrePiloto, modeloAuto, puntos): void {
    console.log("Insertando al final...");

    // Instanciar un nuevo nodo
    const nodo = new Node(nombrePiloto, modeloAuto, puntos);
    // Evaluar si el nodo inicio ya existe
    if (!this.inicio) {
      // Establecer que inicio es igual al nuevo nodo
      this.inicio = nodo;
    } else {
      // Iterar la lista hasta llegar a final porque current es !current
      let current = this.inicio;
      while (current.siguiente) {
        current = current.siguiente;
      }
      // Establecer el nodo en el ultimo disponible
      current.siguiente = nodo;
    }
  }
  // Insertar al Inicio
  addFirst(nombrePiloto, modeloAuto, puntos): void {
    console.log("Insertando al inicio...");

    // Se crea el nodo con las caracteristicas pasadas
    const nodo = new Node(nombrePiloto, modeloAuto, puntos);
    // Movemos el siguiente al inicio y vicebersa
    nodo.siguiente = this.inicio;
    this.inicio = nodo;
  }

  // Eliminar Primero
  deleteFirst(): boolean {
    console.log("Eliminando al inicio...");

    // Evaluar que no este vacía
    if (!this.inicio) {
      return false;
    }
    // Se elimina el primero
    this.inicio = this.inicio.siguiente;
    return true;
  }
  // Buscar ganador
  winner(): boolean {
    console.log("Buscando al ganador");

    // Evaluar que no este vacía
    if (!this.inicio) {
      // Si no hay nada en inicio, significa que esta vacia y por ende se retorna el mensaje
      console.log("No hay pilotos corriendo, la lista esta vacía.");
      return false;
    }

    let current = this.inicio;
    let max = this.inicio.puntos;
    // Iterar la lista
    let i = 1;
    while (current.siguiente) {
      current = current.siguiente;
      // Ir almacenando el mayor valor y seguir recorriendo
      if (current.puntos > max) {
        max = current.puntos;
        i += 1;
      }
    }
    // Evaluar que no este al inicio
    if (i === 1) {
      console.log(`El ganador se encuentra al inicio `);
    } else {
      console.log(
        `El ganador se encuentra en el index: ${i}, con ${max} puntos.`
      );
    }
    return true;
  }

  // Buscar ganador
  deleteWinner(): boolean {
    console.log("Buscando eliminar al ganador");

    // Evaluar que no este vacía
    if (!this.inicio) {
      // Si no hay nada en inicio, significa que esta vacia y por ende se retorna el mensaje
      console.log("No hay pilotos corriendo, la lista esta vacía.");
      return false;
    }

    let winner = this.inicio;
    let current = this.inicio;
    let max = this.inicio.puntos;
    // Iterar la lista
    let i = 1;
    while (current.siguiente) {
      current = current.siguiente;
      // Ir almacenando el mayor valor y seguir recorriendo
      if (current.puntos > max) {
        winner = current;
        max = current.puntos;
        i += 1;
      }
    }

    // Verificar que el siguiente del ganador exista
    if (winner.siguiente) {
      console.log(
        `El ganador es ${winner.nombrePiloto}, quitandole un punto al de la derecha: ${winner.siguiente.nombrePiloto}`
      );
      // Quitarle un punto al de la derecha del winner
      winner.siguiente.puntos -= 1;
    } else {
      console.log(
        `No existe nadie a la derehca del ganador: ${winner.nombrePiloto}`
      );
    }
    return true;
  }

  searchPilot(nombre: any): boolean {
    console.log(`Buscando al piloto ${nombre}`);

    // Evaluar que la lista no este vacía
    if (!this.inicio) {
      console.log(
        "No hay pilotos corriendo, la busqueda no se puede realizar.0"
      );
      return false;
    }
    // Iniciar la búsqueda al inicio
    let current = this.inicio;
    // Verificar que no este al inicio
    if (current.nombrePiloto === nombre) {
      console.log(
        `El piloto ${current.nombrePiloto} se encuentra al inicio de la lista.`
      );
      return true;
    }

    // Iterar la lista
    let i = 1;
    // mientras el siguiente no sea null (final)
    while (current.siguiente) {
      i += 1;
      current = current.siguiente;
      if (current.nombrePiloto === nombre) {
        console.log(
          `El piloto ${current.nombrePiloto} se encuentra en el index: ${i}`
        );
      }
    }

    return true;
  }

  showData(): boolean {
    console.log("\n");

    // Validar que la lista no esté vacía
    if (!this.inicio) {
      console.log(`[list null]`);
      return false;
    }

    let current = this.inicio;
    // Iterar la lista
    console.log(
      `[${current.nombrePiloto}, ${current.modeloAuto}, ${current.puntos}]->`
    );
    while (current.siguiente) {
      current = current.siguiente;
      console.log(
        `[${current.nombrePiloto}, ${current.modeloAuto}, ${current.puntos}]->`
      );
    }
    return true;
  }

  addOn(
    piloto: any,
    nombrePiloto: any,
    modeloAuto: any,
    puntos: any = 0
  ): boolean {
    console.log(`Insertando después del piloto: ${piloto}`);

    if (!this.inicio) {
      console.log(
        `No se puede insertar después de un piloto ya que la lista está vacía`
      );
      return false;
    }

    let current = this.inicio;
    let pilotoBuscado;

    // Iterar la lista
    while (current) {
      if (current.nombrePiloto === piloto) {
        pilotoBuscado = current;
        break; // Detener la búsqueda una vez que se encuentre el piloto
      }
      current = current.siguiente;
    }

    // Validar que se encontró al piloto
    if (pilotoBuscado) {
      console.log(`Insertando después de: ${pilotoBuscado.nombrePiloto}`);
      // Crear el nodo con las características pasadas
      const nodo = new Node(nombrePiloto, modeloAuto, puntos);

      if (pilotoBuscado.siguiente) {
        // Obtener el nodo siguiente al pilotoBuscado
        const siguienteNodo = pilotoBuscado.siguiente;
        // Asignar el nuevo nodo como el siguiente del pilotoBuscado
        pilotoBuscado.siguiente = nodo;
        // Conectar el nuevo nodo con el siguiente nodo
        nodo.siguiente = siguienteNodo;
      } else {
        // Si no existe un elemento después, simplemente asignar el nuevo nodo
        pilotoBuscado.siguiente = nodo;
      }
    } else {
      console.log(`No se encontró al piloto: ${piloto}`);
    }

    return true;
  }
}

// Instanciar la lista
const list = new LinkedList();

// Lista Vacía
console.log(list);
// Agrear al inicio
list.addFirst("Ayrton Senna", "Alfa Romeo Giulia", 10);

// Imprimir Lista
console.log(list);

// Llenar lista
list.add("Tsuchiya", "Honda Spoon S2000", 1);
list.add("Niko Rosberg", "Mercedes AMG ONE", 3);
list.add("Nikita", "Ferrari 250GTO", 2);
console.log(list);

list.deleteFirst();
console.log(list);
// Buscar Ganador
list.winner();
// Buscar por nombre
list.searchPilot("Niko Rosberg");
list.searchPilot("Nikita");
list.searchPilot("Tsuchiya");

list.showData();

list.deleteWinner();
list.showData();

list.addOn("Niko Rosberg", "Max Verstappen", "Porsche 1911", 10);
list.showData();
