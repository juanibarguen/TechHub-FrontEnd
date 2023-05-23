import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Componente } from '../componente';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponenteService } from '../componente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) { }

  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['id'];
  //   this.componenteService.obtenerComponentePorId(this.id).subscribe(dato => {
  //     this.componente = dato;
      
  //   }, error => console.log(error));
  // }

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

  // guardarCambios() {
  //   this.componenteService.actualizarComponente(this.componente.id, this.componente).subscribe(
  //     (response: any) => {
  //       console.log('Elemento actualizado exitosamente');
  //       this.router.navigate(['/administrador']);
  //       console.log(this.componente);
        
  //       Swal.fire('Componente actualizado',`El componente ${this.componente.nombre} ha sido actualizado con exito`,`success`);
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }

  guardarCambios() {
    this.componenteService.actualizarComponente(this.componente.id, this.componente).subscribe(
      (response: any) => {
        console.log('Elemento actualizado exitosamente');
        this.router.navigate(['/administrador']);
        console.log(this.componente);
  
        Swal.fire('Componente actualizado', `El componente ${this.componente.nombre} ha sido actualizado con éxito`, `success`);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  

  
  
  


  
  
  

  
  

  
  

  
  
  
}
