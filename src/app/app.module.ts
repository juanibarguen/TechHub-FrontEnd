import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasComponent } from './categorias/categorias.component';
import { CarritoComponent } from './carrito/carrito.component';
import { SeccionHomeComponent } from './seccion-home/seccion-home.component';
import { SeccionCarritoComponent } from './seccion-carrito/seccion-carrito.component';
import { SeccionAdministradorComponent } from './seccion-administrador/seccion-administrador.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
  {path:'',component:SeccionHomeComponent},
  {path:'carrito',component:SeccionCarritoComponent},
  {path:'administrador',component:SeccionAdministradorComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    DestacadosComponent,
    CategoriasComponent,
    CarritoComponent,
    SeccionHomeComponent,
    SeccionCarritoComponent,
    SeccionAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
