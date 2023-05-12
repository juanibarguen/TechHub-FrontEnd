import { Component, OnInit } from '@angular/core';
import { ComponenteService } from '../componente.service';
import { Componente } from '../componente';

@Component({
  selector: 'app-seccion-administrador',
  templateUrl: './seccion-administrador.component.html',
  styleUrls: ['./seccion-administrador.component.css']
})
export class SeccionAdministradorComponent implements OnInit {

  componentes: Componente[];
  componentesFiltrados: Componente[];

  selectedCategory: string = '';

  constructor(private componenteService:ComponenteService ){ }

  ngOnInit(): void {
    this.obtenerComponente()
    
    this.componenteService.obtenerListaDeComponentes().subscribe(respuesta => {
      this.componentes = respuesta;
    })
    
  }

  obtenerComponente() {
    this.componenteService.obtenerListaDeComponentes().subscribe(data => {
      this.componentes = data;
      this.filtrarPorCategoria(); // filtra los componentes cuando se obtienen del servicio
    });
  }


  filtrarPorCategoria() {
    if (this.selectedCategory === '') {
      this.componentesFiltrados = this.componentes;
    } else {
      this.componentesFiltrados = this.componentes.filter(componente => componente.categoria === this.selectedCategory);
    }
  }

  onCategorySelected() {
    this.filtrarPorCategoria(); // filtra los componentes cuando se selecciona una categoría
  }
  

}
