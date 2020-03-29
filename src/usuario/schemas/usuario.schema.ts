import { Schema } from "mongoose";

export const UsuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number
});