import { Model } from 'mongoose';
import { Usuario } from './interfaces/usuario.interface';
import { CreateUsuarioDTO } from './dto/usuario.dto';
export declare class UsuarioService {
    private readonly usuarioModel;
    constructor(usuarioModel: Model<Usuario>);
    getUsuarios(): Promise<Usuario[]>;
    getUsuario(usuarioID: string): Promise<Usuario>;
    createUsuario(createUsuarioDTO: CreateUsuarioDTO): Promise<Usuario>;
    deleteUsuario(usuarioID: string): Promise<Usuario>;
    updateUsuario(usuarioID: string, createUsuarioDTO: CreateUsuarioDTO): Promise<Usuario>;
}
