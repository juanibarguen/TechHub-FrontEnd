import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ComponenteService } from './componente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ecommerce-v2';
  searchTerm: string = ''; // Variable para almacenar el término de búsqueda
  resultados: any[]; // Variable para almacenar los resultados de la búsqueda

  constructor(private titleService:Title, private componenteService: ComponenteService, private router: Router ) {}


    ngOnInit() {
      this.titleService.setTitle('Inicio');

    }

    buscar(): void {
      this.resultados = this.componenteService.buscarComponentes(this.searchTerm);
    }
    
    nombreFormateado(nombre: string): string {
      return nombre.toLowerCase().replace(/\s+/g, '-');
    }


    viewProduct(categoria: string, id: string, nombreFormateado: string) {
      const ruta = ['/producto', categoria, id, nombreFormateado];
      this.router.navigate(ruta);
      this.searchTerm = ''
    }

  }
  
