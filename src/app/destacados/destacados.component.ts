

import { Component, ElementRef, OnInit } from '@angular/core';
import { Componente } from '../componente';
import { ComponenteService } from '../componente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {

  componentes: Componente[];
  componentesCarrito: any[] = [];
  cantidad: number = 0;

  constructor(
    private componenteService: ComponenteService,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.obtenerComponente();
    this.componenteService.componenteAgregado.subscribe(() => {
      this.obtenerComponente();
    });
  }
  


  filtrarDestacados(): Componente[] {
    return this.componenteService.filtrarDestacados();
  }

  // movilidad del carrousel con las flechas
  moverCarousel(direccion: number) {
    const carouselElement = this.elementRef.nativeElement.querySelector('#carrousel');
    carouselElement.scrollLeft += direccion * 200; // Ajusta el valor de desplazamiento
  }

  // obtenerComponente() {
  //   this.componenteService.obtenerListaDeComponentes().subscribe(data => {
  //     this.componentes = data;
  //   });
  // }


  obtenerComponente() {
    this.componentes = this.componenteService.obtenerComponentesDestacados();
  }

  
     agregarAlCarrito(componente: any) {
    this.componenteService.agregarAlCarrito(componente);

  }

  
  nombreFormateado(nombre: string): string {
    return nombre.toLowerCase().replace(/\s+/g, '-');
  }
}
