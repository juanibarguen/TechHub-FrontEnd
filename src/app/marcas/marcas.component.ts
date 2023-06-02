import { Component, OnInit } from '@angular/core';
import { ComponenteService } from '../componente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  



  constructor(private componenteService: ComponenteService, private router: Router) { }
    
  ngOnInit() {
    console.log();
  }

}
