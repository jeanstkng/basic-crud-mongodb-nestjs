"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ObraSchema = new mongoose_1.Schema({
    nombre: String,
    fechaCreacion: Date,
    arquitectos: []
});
//# sourceMappingURL=obra.schema.js.map