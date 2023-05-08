import { Component, OnInit } from '@angular/core';
import { ComponenteService } from '../componente.service';

@Component({
  selector: 'app-seccion-carrito',
  templateUrl: './seccion-carrito.component.html',
  styleUrls: ['./seccion-carrito.component.css']
})
export class SeccionCarritoComponent implements OnInit {
  componentesCarrito: any[] = [];

  constructor(private componenteService: ComponenteService) { }

  ngOnInit(): void {

    // Suscribirse al evento componenteAgregado del servicio
    this.componenteService.componenteAgregado.subscribe(
      (componentesCarrito: any[]) => {
        this.componentesCarrito = componentesCarrito;
      }
    );
    
    
    console.log(this.componentesCarrito);
    
  }
}
