import { Component, OnInit } from '@angular/core';
import { Componente } from '../componente';
import { ComponenteService } from '../componente.service';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {

  componentes:Componente[];

  constructor(private componenteService:ComponenteService){  }

  ngOnInit(): void {
    this.obtenerComponente()
  }

  private obtenerComponente() {
    this.componenteService.obtenerListaDeComponentes().subscribe(data => {
      this.componentes = data
    })
  }
}
