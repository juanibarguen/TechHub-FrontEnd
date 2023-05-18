import { Component, OnInit } from '@angular/core';
import { Componente } from '../componente';
import { ComponenteService } from '../componente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  categoria: string;
  componentes: Componente[];
  filtro: string;

  constructor(
    private componenteService: ComponenteService,
    private route: ActivatedRoute
  ){ }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoria = params['categoria'];
      this.obtenerComponentes();
    });

    this.filtro = 'Todos'; // Asignar valor por defecto a la propiedad filtro
    this.aplicarFiltro(); // Aplicar filtro al cargar la página con el valor por defecto
    
    this.obtenerComponentesCarrito()
  }

  obtenerComponentesCarrito() {

      const a = this.componenteService.obtenerComponentesCarrito();
      
     
  }

  obtenerComponentes() {
    if (this.categoria) {
      this.componenteService.obtenerListaDeComponentes().subscribe(data => {
        this.componentes = data.filter(componente => componente.categoria === this.categoria);
        console.log(this.componentes);
      });
    } else {
      this.componenteService.obtenerListaDeComponentes().subscribe(data => {
        this.componentes = data;
        console.log(this.componentes);
      });
    }
  }

  agregarAlCarrito(componente: Componente) {
    this.componenteService.agregarAlCarrito(componente);
  }

  aplicarFiltro() {
    if (this.filtro === 'Destacados') {
      this.componentes = this.componentes.filter(componente => componente.destacado);
    } else if (this.filtro === 'MayorPrecio') {
      this.componentes = this.componentes.sort((a, b) => b.precio - a.precio);
    } else if (this.filtro === 'MenorPrecio') {
      this.componentes = this.componentes.sort((a, b) => a.precio - b.precio);
    }
  }
}
