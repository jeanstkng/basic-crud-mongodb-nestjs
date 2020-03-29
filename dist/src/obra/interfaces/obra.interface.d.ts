import { Document } from "mongoose";
export interface Obra extends Document {
    readonly nombre: string;
    readonly fechaCreacion: Date;
    readonly arquitectos: [];
}
