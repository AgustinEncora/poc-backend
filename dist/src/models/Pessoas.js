"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Pessoa = class Pessoa extends sequelize_typescript_1.Model {
};
exports.Pessoa = Pessoa;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'ID'
    }),
    __metadata("design:type", Number)
], Pessoa.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        field: 'first_name'
    }),
    __metadata("design:type", String)
], Pessoa.prototype, "firstName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        field: 'last_name'
    }),
    __metadata("design:type", String)
], Pessoa.prototype, "lastName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: 'age'
    }),
    __metadata("design:type", Number)
], Pessoa.prototype, "age", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        field: 'email'
    }),
    __metadata("design:type", String)
], Pessoa.prototype, "email", void 0);
exports.Pessoa = Pessoa = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'pessoas'
    })
], Pessoa);
