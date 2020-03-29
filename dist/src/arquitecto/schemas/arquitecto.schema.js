"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ArquitectoSchema = new mongoose_1.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    fechaNac: Date,
    obras: []
});
//# sourceMappingURL=arquitecto.schema.js.map