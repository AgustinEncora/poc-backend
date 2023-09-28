"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoas_1 = require("../models/Pessoas");
const PessoasRepo_1 = require("../repository/PessoasRepo");
class PessoaController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPessoa = new Pessoas_1.Pessoa();
                newPessoa.firstName = req.body.firstName;
                newPessoa.lastName = req.body.lastName;
                newPessoa.age = req.body.age;
                newPessoa.email = req.body.email;
                yield new PessoasRepo_1.PessoasRepo().save(newPessoa);
                res.status(201).json({
                    status: "Created",
                    message: "Successfully created person!"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error",
                    message: "Internal server error!"
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                yield new PessoasRepo_1.PessoasRepo().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted user"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error",
                    message: "Internal server error"
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pessoas = yield new PessoasRepo_1.PessoasRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all users",
                    data: pessoas
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error",
                    message: "Internal server error"
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const pessoa = yield new PessoasRepo_1.PessoasRepo().retrieveById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched user",
                    data: pessoa
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error",
                    message: "Internal server error"
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const newPessoa = new Pessoas_1.Pessoa();
                newPessoa.id = id;
                newPessoa.firstName = req.body.firstName;
                newPessoa.lastName = req.body.lastName;
                newPessoa.age = req.body.age;
                newPessoa.email = req.body.email;
                yield new PessoasRepo_1.PessoasRepo().update(newPessoa);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated user"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error",
                    message: "Internal server error"
                });
            }
        });
    }
}
exports.default = new PessoaController();
