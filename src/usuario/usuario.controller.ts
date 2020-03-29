import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, Header } from '@nestjs/common';

import { CreateUsuarioDTO } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';
@Controller('usuario')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) {}

    @Post('/crear')
    async crearPost(@Res() res, @Body() createUsuarioDTO: CreateUsuarioDTO) {
        const usuario = await this.usuarioService.createUsuario(createUsuarioDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Usuario creado satisfactoriamente',
            usuario
        });
    }

    @Get('/')
    async getUsuarios(@Res() res) {
        const usuarios = await this.usuarioService.getUsuarios();
        return res.status(HttpStatus.OK).json({
            usuarios
        });
    }

    @Get('/:usuarioID')
    async getUsuario(@Res() res, @Param('usuarioID') usuarioID ) {
        const usuario = await this.usuarioService.getUsuario(usuarioID);
        if(!usuario) throw new NotFoundException('Usuario no existe');
        return res.status(HttpStatus.OK).json(
            usuario
        );
    }

    @Delete('/borrar')
    async deleteUsuario(@Res() res, @Query('usuarioID') usuarioID) {
        const usuarioDeleted = await this.usuarioService.deleteUsuario(usuarioID);
        if(!usuarioDeleted) throw new NotFoundException('Usuario Inexistente');
        return res.status(HttpStatus.OK).json({
            message: "Borrado exitoso.",
            usuarioDeleted
        });
    }

    @Put('/actualizar')
    async updateUsuario(@Res() res, @Query('usuarioID') usuarioID, @Body() createUsuarioDTO: CreateUsuarioDTO ){
        const updatedUsuario = await this.usuarioService.updateUsuario(usuarioID, createUsuarioDTO);
        if(!updatedUsuario) throw new NotFoundException('Usuario Inexistente');
        return res.status(HttpStatus.OK).json({
            message: "Actualizado correcto.",
            updatedUsuario
        });
    }

}
