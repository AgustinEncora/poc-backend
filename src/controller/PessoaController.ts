import { Request, Response } from "express";
import { Pessoa } from "../models/Pessoas";
import { PessoasRepo } from "../repository/PessoasRepo";

class PessoaController{
    async create( req: Request, res: Response){
        try{
            const newPessoa = new Pessoa();
            newPessoa.firstName = req.body.first_name;
            newPessoa.lastName = req.body.last_name;
            newPessoa.age = req.body.age;
            newPessoa.email = req.body.email;

            await new PessoasRepo().save(newPessoa);

            res.status(201).json({
                status: "Created",
                message: "Successfully created person!"
            });
        } catch (err){
            res.status(500).json({
                status: "Internal Server Error",
                message: "Internal server error!"
            });
        }
    }

    async delete(req: Request, res: Response){
        try{
            const id = parseInt(req.params["id"]);
            await new PessoasRepo().delete(id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully deleted user"
            });
        } catch (err){
            res.status(500).json({
                status: "Internal Server Error",
                message: "Internal server error"
            });
        }
    }

    async findAll(req: Request, res: Response){
        try{
            const pessoas = await new PessoasRepo().retrieveAll();

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched all users",
                data: pessoas
            });
        } catch (err){
            res.status(500).json({
                status: "Internal Server Error",
                message: "Internal server error"
            });
        }
    }

    async findById(req: Request, res: Response){
        try{
            const id = parseInt(req.params["id"]);
            const pessoa = await new PessoasRepo().retrieveById(id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched user",
                data: pessoa
            });
        } catch (err){
            res.status(500).json({
                status: "Internal Server Error",
                message: "Internal server error"
            });
        }
    }

    async update(req: Request, res: Response){
        try{
            const id = parseInt(req.params["id"]);
            
            const newPessoa = new Pessoa();
            newPessoa.firstName = req.body.first_name;
            newPessoa.lastName = req.body.last_name;
            newPessoa.age = req.body.age;
            newPessoa.email = req.body.email;

            await new PessoasRepo().update(newPessoa);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully updated user"
            });
        } catch (err){
            res.status(500).json({
                status: "Internal Server Error",
                message: "Internal server error"
            });
        }
    }
}

export default new PessoaController();