import { Component, OnInit } from '@angular/core';
import { ComponenteService } from '../componente.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

//    this.componentesCarrito = this.carritoService.obtenerComponentesCarrito();

  constructor(private componenteService: ComponenteService) { 
    this.componentesCarrito = this.componenteService.obtenerComponentesCarrito();
  }
  
  componentes: ComponenteService[] = [];
  componentesCarrito: any[] = [];
  

  ngOnInit(): void {
    this.componenteService.obtenerComponentesCarrito()
  }

  agregarAlCarrito(componente: any) {
    this.componenteService.agregarAlCarrito(componente);
  }


  restarCantidad(componente: any): void {
    if (componente.cantidad > 1) {
      componente.cantidad--;
      componente.precioAc = componente.precio * componente.cantidad;
    } else {
      if (confirm('¿Desea eliminar el componente del carrito de compras?')) {
        const index = this.componentesCarrito.indexOf(componente);
        this.componentesCarrito.splice(index, 1);
      }
    }
  }
  
  sumarCantidad(componente: any): void {
    componente.cantidad++;
    componente.precioAc = componente.precio * componente.cantidad;
  }

  calcularPrecioTotal(): number {
    let total = 0;
    for (let i = 0; i < this.componentesCarrito.length; i++) {
      total += this.componentesCarrito[i].precioAc;
    }
    return total;
  }

   
  }


