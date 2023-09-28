"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePessoaSchema = exports.createPessoaSchema = void 0;
const zod_1 = require("zod");
exports.createPessoaSchema = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string().min(1, { message: "First Name must be greater than 1 characters!" }),
        lastName: zod_1.z.string().min(1, { message: "First Name must be greater than 1 characters!" }),
        age: zod_1.z.number().min(1, { message: "Age must be at least 1 character!" }),
        email: zod_1.z.string().min(1, { message: "Email must be at least 1 character!" })
    })
});
exports.updatePessoaSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z.object({
        firstName: zod_1.z.string().min(1, { message: "First Name must be greater than 1 characters!" }),
        lastName: zod_1.z.string().min(1, { message: "First Name must be greater than 1 characters!" }),
        age: zod_1.z.number().min(1, { message: "Age must be at least 1 character!" }),
        email: zod_1.z.string().min(1, { message: "Email must be at least 1 character!" })
    }).partial()
});
