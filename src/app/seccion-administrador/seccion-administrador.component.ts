
import { Component, OnInit } from '@angular/core';
import { ComponenteService } from '../componente.service';
import { Componente } from '../componente';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seccion-administrador',
  templateUrl: './seccion-administrador.component.html',
  styleUrls: ['./seccion-administrador.component.css']
})
export class SeccionAdministradorComponent implements OnInit {

  componentes: Componente[];
  componentesFiltrados: Componente[];

  selectedCategory: string = '';

  constructor(
    private componenteService:ComponenteService,
     private router:Router,
     private http: HttpClient
     ){}

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

  eliminarComponente(id: number) {
    if (confirm('¿Desea eliminar el componente de la base de datos?')) {
      this.componenteService.eliminarComponente(id).subscribe(dato => {
        // console.log(dato);
        this.obtenerComponente()
      })
    }
  } 

  actualizarComponente(id:number) {
    this.router.navigate([`administrador/actualizar-componente`, id])
  }
  
  filtrarPorCategoria() {
    if (this.selectedCategory === '') {
      this.componentesFiltrados = this.componentes;
    } else {
      this.componentesFiltrados = this.componentes.filter(componente => componente.categoria === this.selectedCategory);
      this.componentesFiltrados = this.componentes.filter(componente => componente.categoria === this.selectedCategory);

    }
  }

  onCategorySelected() {
    this.filtrarPorCategoria(); // filtra los componentes cuando se selecciona una categoría
  }

  transformarUpper(categoria: string): string {
    return categoria.replace(/-/g, ' ').toUpperCase();
  }

}