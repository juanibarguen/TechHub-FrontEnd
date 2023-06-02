import { Component, OnInit } from '@angular/core';
import { Componente } from '../componente';
import { ComponenteService } from '../componente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-componente',
  templateUrl: './agregar-componente.component.html',
  styleUrls: ['./agregar-componente.component.css']
})
export class AgregarComponenteComponent implements OnInit {

  componente: Componente = new Componente()

  constructor(private componenteService: ComponenteService , private router: Router) {  }

  ngOnInit(): void {
    
  }

  guardarComponente(){
    this.componenteService.registrarComponente(this.componente).subscribe(dato => {
      console.log(dato);
      this.volverListaComponentes();
      
    });
  }

  
  volverListaComponentes() {
    this.router.navigate(['/administrador'])
  }


  onSubmit() {
    this.guardarComponente();

  }
}
