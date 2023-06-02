import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasComponent } from './categorias/categorias.component';
import { SeccionHomeComponent } from './seccion-home/seccion-home.component';
import { SeccionCarritoComponent } from './seccion-carrito/seccion-carrito.component';
import { SeccionAdministradorComponent } from './seccion-administrador/seccion-administrador.component';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponenteComponent } from './agregar-componente/agregar-componente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentesComponent } from './componentes/componentes.component';
import { ProductosComponent } from './productos/productos.component';
import { ProdComponent } from './prod/prod.component';
import { ActualizarComponenteComponent } from './actualizar-componente/actualizar-componente.component';
import { MarcasComponent } from './marcas/marcas.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  { path: '', component: SeccionHomeComponent },
  { path: 'finalizar-compra', component: SeccionCarritoComponent },
  { path: 'administrador', component: SeccionAdministradorComponent },
  { path: 'administrador/agregar-componente', component: AgregarComponenteComponent },
  { path: 'componentes', component: ComponentesComponent },
  { path: 'productos/:categoria', component: ProductosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:categoria/:id/:nombre', component: ProdComponent },
  { path: 'administrador/actualizar-componente/:id', component: ActualizarComponenteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DestacadosComponent,
    CategoriasComponent,
    SeccionHomeComponent,
    SeccionCarritoComponent,
    SeccionAdministradorComponent,
    AgregarComponenteComponent,
    ComponentesComponent,
    ProductosComponent,
    ProdComponent,
    ActualizarComponenteComponent,
    MarcasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
