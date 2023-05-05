import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './componente';

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {
  //url que obtiene el lista de todos los componentes en el backend
  private baseURL = "http://localhost:8080/api/v1/componentes";

  constructor(private httpClient: HttpClient) { }

  // metodo que nos sirve para obtener los componentes
  obtenerListaDeComponentes():Observable<Componente[]> {
    return this.httpClient.get<Componente[]>(`${this.baseURL}`)
  }
}
