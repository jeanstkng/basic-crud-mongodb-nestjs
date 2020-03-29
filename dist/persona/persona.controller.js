"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const usuario_dto_1 = require("./dto/usuario.dto");
const usuario_service_1 = require("./usuario.service");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async crearPost(res, createUsuarioDTO) {
        const usuario = await this.usuarioService.createUsuario(createUsuarioDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Usuario creado satisfactoriamente',
            usuario
        });
    }
    async login(res, createUsuarioDTO) {
        const usuario = createUsuarioDTO;
        const usuarios = await this.usuarioService.getUsuarios();
        if (usuario.nombre == usuarios.find(per => per.nombre === usuario.nombre).nombre &&
            usuario.pass == usuarios.find(per => per.nombre === usuario.nombre).pass) {
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Logeo correcto',
                token: 'ABCDEFG'
            });
        }
        else {
            throw new common_1.NotFoundException('Credenciales invalidas');
        }
    }
    async getUsuarios(res) {
        const usuarios = await this.usuarioService.getUsuarios();
        return res.status(common_1.HttpStatus.OK).json({
            usuarios
        });
    }
    async getUsuario(res, usuarioID, token) {
        const usuario = await this.usuarioService.getUsuario(usuarioID);
        if (!usuario)
            throw new common_1.NotFoundException('Usuario no existe');
        if (!token || token !== 'ABCDEFG')
            throw new common_1.NotFoundException('Token requerido');
        return res.status(common_1.HttpStatus.OK).json(usuario);
    }
    async deleteUsuario(res, usuarioID) {
        const usuarioDeleted = await this.usuarioService.deleteUsuario(usuarioID);
        if (!usuarioDeleted)
            throw new common_1.NotFoundException('Usuario Inexistente');
        return res.status(common_1.HttpStatus.OK).json({
            message: "Borrado exitoso.",
            usuarioDeleted
        });
    }
    async updateUsuario(res, usuarioID, createUsuarioDTO) {
        const updatedUsuario = await this.usuarioService.updateUsuario(usuarioID, createUsuarioDTO);
        if (!updatedUsuario)
            throw new common_1.NotFoundException('Usuario Inexistente');
        return res.status(common_1.HttpStatus.OK).json({
            message: "Actualizado correcto.",
            updatedUsuario
        });
    }
};
__decorate([
    common_1.Post('/crear'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, usuario_dto_1.CreateUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "crearPost", null);
__decorate([
    common_1.Post('/login'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, usuario_dto_1.CreateUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "login", null);
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getUsuarios", null);
__decorate([
    common_1.Get('/:usuarioID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('usuarioID')), __param(2, common_1.Query('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getUsuario", null);
__decorate([
    common_1.Delete('/borrar'),
    __param(0, common_1.Res()), __param(1, common_1.Query('usuarioID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "deleteUsuario", null);
__decorate([
    common_1.Put('/actualizar'),
    __param(0, common_1.Res()), __param(1, common_1.Query('usuarioID')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, usuario_dto_1.CreateUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "updateUsuario", null);
UsuarioController = __decorate([
    common_1.Controller('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map