import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './componente';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {

  componenteAgregado = new EventEmitter<any>();

  //url que obtiene el lista de todos los componentes en el backend
  private baseURL = "http://localhost:8080/api/v1/componentes";

  componentesCarrito: any[] = [];


  constructor(private httpClient: HttpClient, private router:Router) { }

  // metodo que nos sirve para obtener los componentes
  obtenerListaDeComponentes():Observable<Componente[]> {
    return this.httpClient.get<Componente[]>(`${this.baseURL}`)

  }

// agregarAlCarrito(componente: any) {
//   this.componentesCarrito.push(componente);
// }

obtenerComponentesCarrito() {
  return this.componentesCarrito;
}

agregarAlCarrito(componente: any) {
  let index = this.componentesCarrito.findIndex(c => c.id === componente.id);

  if (index !== -1) {
    // Si el componente ya está en el carrito, incrementar su cantidad y actualizar su precio
    this.componentesCarrito[index].cantidad++;
    this.componentesCarrito[index].precioAc = this.componentesCarrito[index].precio * this.componentesCarrito[index].cantidad;
  } else {
    // Si el componente no está en el carrito, agregarlo con una cantidad de 1 y su precio actual
    componente.cantidad = 1;
    componente.precioAc = componente.precio;
    this.componentesCarrito.push(componente);
    
  }

  // Emitir el evento con el array actualizado
  this.componenteAgregado.emit(this.componentesCarrito);
    
}

}
