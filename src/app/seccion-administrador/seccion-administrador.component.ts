import Swal from 'sweetalert2';
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

  

  eliminarComponente(id: number, nombre: string) {

    Swal.fire({
      title: 'Deseas eliminar el componente '+nombre+ '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.componenteService.eliminarComponente(id).subscribe(dato => {
          // console.log(dato);
          this.obtenerComponente()
        })
        Swal.fire('Eliminado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se ha eliminado el componente', '', 'info')
      }
    })
  } 

  actualizarComponente(id:number) {
    this.router.navigate([`administrador/actualizar-componente`, id])
  }
  
  filtrarPorCategoria() {
    if (this.selectedCategory === '') {
      this.componentesFiltrados = this.componentes;
    } else {
      this.componentesFiltrados = this.componentes.filter(componente => componente.categoria === this.selectedCategory);
      
      // this.componentesFiltrados = this.componentes.filter(componente => this.transformarUpper(componente.categoria)  === this.selectedCategory);

    }
  }

  onCategorySelected() {
    this.filtrarPorCategoria(); // filtra los componentes cuando se selecciona una categoría
  }

  transformarUpper(categoria: string): string {
    
    const palabras = categoria.split('-');
    const palabrasMayusculas = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1));
    return palabrasMayusculas.join(' ');
  }
  


}