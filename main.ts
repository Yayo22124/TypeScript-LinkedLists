// ------------------------------------------------ Estructura de Datos : Lista Enlazada  -------------------------------------------------
//
// LinkedList: Es una estructura de datos que consiste en una secuencia de elementos, donde cada elemento es un nodo que contiene
//  un valor y una referencia (enlace) al siguiente elemento en la secuencia. Cada nodo de la lista enlazada puede ser accedido
//  individualmente a tráves de sus referencias, lo que permite una  flexibilidad y eficiencia en la inserción y eliminación de elementos.
//
// ----------------------------------------------------------------------------------------------------------------------------------------

export class Node {
  valor: any; // valor/value
  next: Node | null; // Nodo o nulll cuando es el final y no tiene siguiente

  //@constructor
  // @param valor (any) el dato que quieres que el nodo contenga
  constructor(valor: any) {
    this.valor = valor;
    this.next = null;
  }
}

class LinkedList {
  inicio: Node | null;

  constructor() {
    this.inicio = null;
  }

  add(valor: any): void {
    const nodo = new Node(valor);
    if (!this.inicio) {
      this.inicio = nodo;
    } else {
      let current = this.inicio;
      while (current.next) {
        current = current.next;
      }
      current.next = nodo;
    }
  }

  // Insertar un nodo al inicio de la lista
  addFirst(valor: any): void {
    const nodo = new Node(valor);
    nodo.next = this.inicio;
    this.inicio = nodo;
  }

  // Eliminar el primer nodo de la lista
  deleteFirst(): boolean {
    if (!this.inicio) {
      return false;
    }
    this.inicio = this.inicio.next;
    return true;
  }

  // Eliminar el último nodo de la lista
  deleteLast(): boolean {
    if (!this.inicio) {
      return false;
    }
    if (!this.inicio.next) {
      this.inicio = null;
      return true;
    }
    let current = this.inicio;
    while (current.next && current.next.next) {
      current = current.next;
    }
    current.next = null;
    return true;
  }

  delete(valor: any): boolean {
    // Pasos
    // Objetivo: Eliminar un valor de la lista determinado (pasado como parametro)
    // 1.- Verificar que la lista no este vacia
    // 2.- Verificar que el valor al inicio no es el valor buscado
    // 3.- Buscar el valor dentro de la lista

    // Saber si la lista no esta vacia (inicio != null)
    if (!this.inicio) {
      return false;
    }
    // Saber si el valor a buscar se encuentra en el Inicio o cabecera de Inicio
    if (this.inicio.valor === valor) {
      this.inicio = this.inicio.next;
      return true;
    }

    let current = this.inicio;
    // Buscar el nodo a eliminar manteniendo en cada ciclo el nodo anterior
    while (current.next && current.next.valor !== valor) {
      current = current.next;
    }
    // Verificar que el nodo a eliminar exista
    if (current.next) {
      current.next = current.next.next;
      return true;
    }

    return false;
  }

  search(valor: any): boolean {
    console.log(`Buscando el valor: ${valor}`);
    // Pasos
    // 1.- Saber si la lista no esta vacia
    // 2.- Saber si el valor buscado se encuentra al inicio
    // 3.- Iterar al siguiente hasta encontrar el valor
    // 4.- Devolver el resultado

    if (!this.inicio) {
      console.log("La lista está vacía, no se puede buscar.");
      return false;
    }

    if (this.inicio.valor === valor) {
      console.log(`El valor ${valor} se encuentra al Inicio`);
      return true;
    }

    // Iterar hasta encontrar el valor
    let current = this.inicio;
    let index = 1;
    while (current.next && current.next.valor === valor) {
      index += 1;
      console.log(`El valor existe en la lista con el índice: ${index}`);
      return true;
    }
    console.log("El valor no existe en la lista");

    return false;
  }

  getAverage(): number | null {
    if (!this.inicio) {
      console.log("La lista está vacía, no se puede calcular el promedio.");
      return null;
    }

    let current = this.inicio;
    let sum = 0;
    let count = 0;

    while (current) {
      sum += current.valor;
      count += 1;
      current = current.next;
    }

    const average = sum / count;
    console.log(`El promedio de la lista es: ${average}`);
    return average;
  }

  deleteMax(): boolean {
    if (!this.inicio) {
      console.log(
        "La lista está vacía, no se puede eliminar el elemento de mayor valor."
      );
      return false;
    }

    let current = this.inicio;
    let maxNode = this.inicio;
    let max = this.inicio.valor;

    while (current.next) {
      if (current.next.valor > max) {
        max = current.next.valor;
        maxNode = current;
      }
      current = current.next;
    }

    // Si el elemento de mayor valor está al principio de la lista
    if (maxNode === this.inicio) {
      this.inicio = this.inicio.next;
    } else {
      maxNode.next = maxNode.next.next;
    }

    console.log(`Se eliminó el elemento de mayor valor: ${max}`);
    return true;
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

console.log("Lista inicial:");
console.log(list.inicio);

// list.addFirst(0); // Insertar al principio
// console.log("Después de insertar al principio:");
// console.log(list.inicio);

// list.deleteFirst(); // Eliminar el primero
// console.log("Después de eliminar el primero:");
// console.log(list.inicio);

// list.deleteLast(); // Eliminar el último
// console.log("Después de eliminar el último:");
// console.log(list.inicio);
// list.delete(1);
// console.log("Después de eliminar el 7");
// console.log(list.inicio);

list.search(2);
console.log(`Promedio de la lista: ${list.getAverage()}`);
console.log(list.inicio);
console.log("Eliminando el valor máximo:");
list.deleteMax();
console.log(list.inicio);

