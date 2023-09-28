"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("../helper/validate"));
const PessoaSchema_1 = require("../schema/PessoaSchema");
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const PessoaController_1 = __importDefault(require("../controller/PessoaController"));
class PessoaRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(PessoaSchema_1.createPessoaSchema), PessoaController_1.default.create);
        this.router.patch("/:id", (0, validate_1.default)(PessoaSchema_1.updatePessoaSchema), PessoaController_1.default.update);
        this.router.delete("/:id", PessoaController_1.default.delete);
        this.router.get("", PessoaController_1.default.findAll);
        this.router.get("/:id", PessoaController_1.default.findById);
    }
}
exports.default = new PessoaRoutes().router;
