import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ComponenteService } from './componente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ecommerce-v2';
  searchTerm: string; // Variable para almacenar el término de búsqueda
  resultados: any[]; // Variable para almacenar los resultados de la búsqueda

  constructor(private titleService:Title, private componenteService: ComponenteService ) {}


    ngOnInit() {
      this.titleService.setTitle('Inicio');

    }

    buscar(): void {
      this.resultados = this.componenteService.buscarComponentes(this.searchTerm);
    }
    
  }
  
