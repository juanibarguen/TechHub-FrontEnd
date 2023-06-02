import { Component, OnInit } from '@angular/core';
import { Componente } from '../componente';
import { ComponenteService } from '../componente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  categoria: string;
  componentes: Componente[];
  componentesOriginales: Componente[]; // Variable para guardar la lista original de componentes
  filtro: string;

  constructor(
    private componenteService: ComponenteService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ){ }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoria = params['categoria'];
      this.obtenerComponentes();

      this.titleService.setTitle('Productos');

    });

    this.filtro = 'Todos'; // Asignar valor por defecto a la propiedad filtro
    this.obtenerComponentesCarrito();
  }

  obtenerComponentesCarrito() {
    const componentesCarrito = this.componenteService.obtenerComponentesCarrito();
  }

  obtenerComponentes() {
    if (this.categoria) {
      this.componenteService.obtenerListaDeComponentes().subscribe(data => {
        this.componentesOriginales = data; // Guardar la lista original de componentes
        this.componentes = data.filter(componente => componente.categoria === this.categoria);
        console.log(this.componentes);

          this.titleService.setTitle(this.transformarUpper(this.categoria));


        this.aplicarFiltro(); // Aplicar filtro a la lista de componentes específica de la categoría seleccionada
      });
    } else {
      this.componenteService.obtenerListaDeComponentes().subscribe(data => {
        this.componentesOriginales = data; // Guardar la lista original de componentes
        this.componentes = data;
        console.log(this.componentes);
        this.aplicarFiltro(); // Aplicar filtro a la lista completa de componentes
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
      this.componentes = this.componentes.slice().sort((a, b) => b.precio - a.precio);
    } else if (this.filtro === 'MenorPrecio') {
      this.componentes = this.componentes.slice().sort((a, b) => a.precio - b.precio);
    }
  }

  nombreFormateado(nombre: string): string {
    return nombre.toLowerCase().replace(/\s+/g, '-');
  }

  transformarUpper(categoria: string): string {
    return categoria.replace(/-/g, ' ').toUpperCase();
  }
}
