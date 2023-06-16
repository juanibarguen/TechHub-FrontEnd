

import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Componente } from './componente';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class ComponenteService {
  componenteAgregado = new EventEmitter<any>();
  cantidadActualizada = new EventEmitter<number>();

  private baseURL = "http://localhost:8080/api/v1/componentes";
  componentesCarrito: any[] = [];
  componentes: Componente[] = []; // Agrega esta línea para definir la propiedad 'componentes'

  constructor(private httpClient: HttpClient, private router: Router) {
    this.obtenerListaDeComponentes().subscribe(data => {
      this.componentes = data;
    });
  }

  obtenerComponentesDestacados(): Componente[] {
  return this.componentes.filter(componente => componente.destacado);
}

  obtenerListaDeComponentes(): Observable<Componente[]> {
    return this.httpClient.get<Componente[]>(`${this.baseURL}`);
  }

  eliminarComponente(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  obtenerComponentesCarrito() {
    return this.componentesCarrito;
  }

  obtenerComponentePorId(id: number): Observable<Componente> {
    return this.httpClient.get<Componente>(`${this.baseURL}/${id}`);
  }
  

  agregarAlCarrito(componente: any) {
    let index = this.componentesCarrito.findIndex(c => c.id === componente.id);
    
    if (index !== -1) {
      console.log(this.componentesCarrito[index]);

      // Si el componente ya está en el carrito
      if (this.componentesCarrito[index].cantidad < componente.stock) {
        // Incrementar la cantidad si no excede el stock
        this.componentesCarrito[index].cantidad++;
        this.componentesCarrito[index].precioAc = this.componentesCarrito[index].precio * this.componentesCarrito[index].cantidad;
      } else {
        // Mostrar una alerta o tomar alguna acción si la cantidad excede el stock disponible
        console.log('No se puede agregar más del stock disponible.');
      }
    } else {
      // Si el componente no está en el carrito, agregarlo con una cantidad de 1 y su precio actual
      componente.cantidad = 1;
      componente.precioAc = componente.precio;
      this.componentesCarrito.push(componente);
    }
  
    // Emitir el evento con el array actualizado
    this.componenteAgregado.emit(this.componentesCarrito);
  }

  registrarComponente(componente: Componente) : Observable <Object> {
    return this.httpClient.post(`${this.baseURL}`, componente)
  }

  filtrarDestacados(): Componente[] {
    return this.componentes.filter(componente => componente.destacado);
  }

  actualizarComponente(id: number, componente: Componente): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, componente)
      .pipe(
        tap(() => {
          // Emitir evento de actualización de componentes
          this.componenteAgregado.emit();
        })
      );
}

buscarComponentes(termino: string): Componente[] {
  // Utiliza el método filter() para buscar una relación entre el término de búsqueda y los nombres de los componentes
  return this.componentes.filter(componente => componente.nombre.toLowerCase().includes(termino.toLowerCase()));
}


}