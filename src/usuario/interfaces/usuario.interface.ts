import { Document } from "mongoose";

export interface Usuario extends Document {
    readonly nombre: string;
    readonly apellido: string;
    readonly edad: number;
}