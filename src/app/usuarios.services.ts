import { Injectable } from "@angular/core";
import { Usuario } from "./usuario";


@Injectable()
export class UsuariosServices {


    usuarios: Usuario[] = [
        new Usuario()
    ]
}