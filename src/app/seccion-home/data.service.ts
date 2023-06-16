import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../usuario";


@Injectable()
export class DataServices {

    constructor(private httpClient: HttpClient) { }

    guardarUsuario(usuarios:Usuario) {
        this.httpClient.post('https://usuarios-68f30-default-rtdb.firebaseio.com/datos.json', usuarios).subscribe (
            response => console.log('Se guardo el usuario'),
            error => console.log('Error:'+error)
            
        );

    }
}