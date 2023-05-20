import { Component, OnInit } from '@angular/core';
import { Componente } from '../componente';
import { ComponenteService } from '../componente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {

  componentes:Componente[];
  componentesCarrito: any[] = [];
  cantidad: number = 0;

  constructor(private componenteService:ComponenteService, private router:Router){  }

  ngOnInit(): void {
    this.obtenerComponente()
  }

   obtenerComponente() {

    this.componenteService.obtenerListaDeComponentes().subscribe(data => {
      this.componentes = data
      // console.log(typeof data);
    })
   }

   agregarAlCarrito(componente: any) {
    this.componenteService.agregarAlCarrito(componente);

  }
  
  
  nombreFormateado(nombre: string): string {
    return nombre.toLowerCase().replace(/\s+/g, '-');
  }

}
