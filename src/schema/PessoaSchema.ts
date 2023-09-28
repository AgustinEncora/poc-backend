import { z } from "zod"

export const createPessoaSchema = z.object({
    body: z.object({
        firstName: z.string().min(1, { message: "First Name must be greater than 1 characters!"}),
        lastName: z.string().min(1, { message: "First Name must be greater than 1 characters!"}),
        age: z.number().min(1, { message: "Age must be at least 1 character!"}),
        email: z.string().min(1, { message: "Email must be at least 1 character!"})
    })
});

export const updatePessoaSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z.object({
        firstName: z.string().min(1, { message: "First Name must be greater than 1 characters!"}),
        lastName: z.string().min(1, { message: "First Name must be greater than 1 characters!"}),
        age: z.number().min(1, { message: "Age must be at least 1 character!"}),
        email: z.string().min(1, { message: "Email must be at least 1 character!"})
    }).partial()
})