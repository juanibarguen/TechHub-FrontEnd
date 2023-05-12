import { Component, OnInit } from '@angular/core';
import { Componente } from '../componente';

@Component({
  selector: 'app-agregar-componente',
  templateUrl: './agregar-componente.component.html',
  styleUrls: ['./agregar-componente.component.css']
})
export class AgregarComponenteComponent implements OnInit {

  componente: Componente = new Componente()

  constructor() {  }

  ngOnInit(): void {
    
  }
  
  onSubmit() {
    console.log(this.componente);

  }
}
