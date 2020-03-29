import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { Usuario } from './interfaces/usuario.interface';
import { CreateUsuarioDTO } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {

    constructor(@InjectModel('Usuario') private readonly usuarioModel: Model<Usuario>) {}

    async getUsuarios(): Promise<Usuario[]> {
        const usuarios = await this.usuarioModel.find();
        return usuarios;
    }

    async getUsuario(usuarioID: string): Promise<Usuario> {
        const usuario = await this.usuarioModel.findById(usuarioID);
        return usuario;
    }

    async createUsuario(createUsuarioDTO: CreateUsuarioDTO): Promise<Usuario> {
        const usuario = new this.usuarioModel(createUsuarioDTO);
        return await usuario.save();
    }

    async deleteUsuario(usuarioID: string): Promise<Usuario> {
        const deletedUsuario = await this.usuarioModel.findByIdAndDelete(usuarioID);
        return  deletedUsuario;
    }

    async updateUsuario(usuarioID: string, createUsuarioDTO: CreateUsuarioDTO): Promise<Usuario> {
        const updatedUsuario = await this.usuarioModel.findByIdAndUpdate(usuarioID, createUsuarioDTO, {new: true});
        return updatedUsuario;
    }

}
