import { Pessoa } from "../models/Pessoas";


interface IPessoasRepo {
    save(pessoa: Pessoa): Promise<void>;
    update(pessoa: Pessoa): Promise<void>;
    delete(pessoaId: number): Promise<void>;
    retrieveById(pessoaId: number): Promise<Pessoa>;
    retrieveAll(): Promise<Pessoa[]>;
}

export class PessoasRepo implements IPessoasRepo {
    async save(pessoa: Pessoa): Promise<void> {
        try{
            Pessoa.create({
                firstName: pessoa.firstName,
                lastName: pessoa.lastName,
                age: pessoa.age,
                email: pessoa.email
            });
        } catch (err) {
            throw new Error("Failed to add new person");
        }
    }
    async update(pessoa: Pessoa): Promise<void> {
        try{
            const newPessoa = await Pessoa.findOne({
                where:{
                    id: pessoa.id
                }
            });
            if(!newPessoa){
                throw new Error("Could not find specified person");

            }
            newPessoa.firstName = pessoa.firstName;
            newPessoa.lastName = pessoa.lastName;
            newPessoa.age = pessoa.age;
            newPessoa.email = pessoa.email;

            newPessoa.save()
        } catch (err) {
            throw new Error("Failed to update person");
        }
    }
    async delete(pessoaId: number): Promise<void> {
        try{
            const newPessoa = await Pessoa.findOne({
                where:{
                    id: pessoaId
                }
            });
            if(!newPessoa){
                throw new Error("Could not find specified person");

            }

            newPessoa.destroy()
        } catch (err) {
            throw new Error("Failed to delete person");
        }
    }
    async retrieveById(pessoaId: number): Promise<Pessoa> {
        try{
            const newPessoa = await Pessoa.findOne({
                where:{
                    id: pessoaId
                }
            });
            if(!newPessoa){
                throw new Error("Could not find specified person");
            }

            return newPessoa;
        } catch (err) {
            throw new Error("Failed to find person");
        }
    }
    async retrieveAll(): Promise<Pessoa[]> {
        try{
            const pessoas = await Pessoa.findAll();
            
            if(!pessoas){
                throw new Error("Could not find people");

            }

            return pessoas;
        } catch (err) {
            throw new Error("Failed to find people");
        }
    }
    
}