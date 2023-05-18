
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

  constructor(private componenteService:ComponenteService, private router:Router,private http: HttpClient ){ }

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
    this.http.delete(`http://localhost:8080/api/v1/componentes/${id}`).subscribe(
      (response) => {
        console.log('Componente eliminado con éxito:', response);
        // actualizar la lista de componentes después de eliminar

      },
      (error) => {
        console.error('Error al eliminar componente:', error);
      }
    );
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