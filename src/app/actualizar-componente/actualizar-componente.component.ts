import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Componente } from '../componente';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponenteService } from '../componente.service';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { DestacadosComponent } from '../destacados/destacados.component';


@Component({
  selector: 'app-actualizar-componente',
  templateUrl: './actualizar-componente.component.html',
  styleUrls: ['./actualizar-componente.component.css']
})
export class ActualizarComponenteComponent implements OnInit {

  id: number;
  componente: Componente = new Componente();
  componenteForm: FormGroup; // Agrega esta línea para definir el FormGroup

  constructor(
    private componenteService: ComponenteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.obtenerElemento();
    });
  }

  obtenerElemento() {
    this.componenteService.obtenerComponentePorId(this.id).subscribe(
      (response: any) => {
        this.componente = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


  guardarCambios() {
    this.componenteService.actualizarComponente(this.componente.id, this.componente).subscribe(
      (response: any) => {
        // Guardar cambios exitosos
        console.log('Elemento actualizado exitosamente');
  
        Swal.fire('Componente actualizado', `El componente ${this.componente.nombre} ha sido actualizado con éxito`, `success`);
  
        this.router.navigate([`administrador/`])


      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  
  
  

  
  
  


  
  
  

  
  

  
  

  
  
  
}
