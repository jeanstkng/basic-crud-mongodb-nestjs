import { Document } from "mongoose";
export interface Arquitecto extends Document {
    readonly nombre: string;
    readonly apellido: string;
    readonly edad: number;
    readonly fechaNac: Date;
    readonly obras: [];
}
