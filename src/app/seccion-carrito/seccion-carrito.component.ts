import { Component } from '@angular/core';
import { ComponenteService } from '../componente.service';

@Component({
  selector: 'app-seccion-carrito',
  templateUrl: './seccion-carrito.component.html',
  styleUrls: ['./seccion-carrito.component.css']
})
export class SeccionCarritoComponent {
  componentesCarrito: any[] = [];

  constructor(private componenteService: ComponenteService) {}

  ngOnInit() {
    this.componentesCarrito = this.componenteService.obtenerComponentesCarrito();
    console.log(this.componentesCarrito);
    
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

  verificarCantidad(componente: any): boolean {
    return componente.cantidad >= componente.stock;
  }  
  
  sumarCantidad(componente: any): void {
    if (this.verificarCantidad(componente)) {
      console.log('La cantidad seleccionada supera el stock disponible.');
      alert('No hay suficiente stock')
    } else {
      componente.cantidad++;
      componente.precioAc = componente.precio * componente.cantidad;
    }
  }

  calcularPrecioTotal(): number {
    let total = 0;
    for (let i = 0; i < this.componentesCarrito.length; i++) {
      total += this.componentesCarrito[i].precioAc;
    }
    return total;
  }
}
