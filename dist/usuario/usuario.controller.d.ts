import { CreateUsuarioDTO } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private usuarioService;
    constructor(usuarioService: UsuarioService);
    crearPost(res: any, createUsuarioDTO: CreateUsuarioDTO): Promise<any>;
    getUsuarios(res: any): Promise<any>;
    getUsuario(res: any, usuarioID: any): Promise<any>;
    deleteUsuario(res: any, usuarioID: any): Promise<any>;
    updateUsuario(res: any, usuarioID: any, createUsuarioDTO: CreateUsuarioDTO): Promise<any>;
}
