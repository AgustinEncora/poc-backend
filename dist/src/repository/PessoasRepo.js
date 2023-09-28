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
exports.PessoasRepo = void 0;
const Pessoas_1 = require("../models/Pessoas");
class PessoasRepo {
    save(pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                Pessoas_1.Pessoa.create({
                    firstName: pessoa.firstName,
                    lastName: pessoa.lastName,
                    age: pessoa.age,
                    email: pessoa.email
                });
            }
            catch (err) {
                throw new Error("Failed to add new person");
            }
        });
    }
    update(pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPessoa = yield Pessoas_1.Pessoa.findOne({
                    where: {
                        id: pessoa.id
                    }
                });
                if (!newPessoa) {
                    throw new Error("Could not find specified person");
                }
                newPessoa.firstName = pessoa.firstName;
                newPessoa.lastName = pessoa.lastName;
                newPessoa.age = pessoa.age;
                newPessoa.email = pessoa.email;
                newPessoa.save();
            }
            catch (err) {
                throw new Error("Failed to update person");
            }
        });
    }
    delete(pessoaId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPessoa = yield Pessoas_1.Pessoa.findOne({
                    where: {
                        id: pessoaId
                    }
                });
                if (!newPessoa) {
                    throw new Error("Could not find specified person");
                }
                newPessoa.destroy();
            }
            catch (err) {
                throw new Error("Failed to delete person");
            }
        });
    }
    retrieveById(pessoaId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPessoa = yield Pessoas_1.Pessoa.findOne({
                    where: {
                        id: pessoaId
                    }
                });
                if (!newPessoa) {
                    throw new Error("Could not find specified person");
                }
                return newPessoa;
            }
            catch (err) {
                throw new Error("Failed to find person");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pessoas = yield Pessoas_1.Pessoa.findAll();
                if (!pessoas) {
                    throw new Error("Could not find people");
                }
                return pessoas;
            }
            catch (err) {
                throw new Error("Failed to find people");
            }
        });
    }
}
exports.PessoasRepo = PessoasRepo;
