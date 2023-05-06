import { Component, OnInit } from '@angular/core';
import { Componente } from '../componente';
import { ComponenteService } from '../componente.service';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {

  componentes:Componente[];
  componentesCarrito: any[] = [];

  constructor(private componenteService:ComponenteService){  }

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
  
  

}
