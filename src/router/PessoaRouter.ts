import validate from "../helper/validate";
import { createPessoaSchema, updatePessoaSchema } from "../schema/PessoaSchema";
import BaseRoutes from "./base/BaseRouter";
import PessoaController from '../controller/PessoaController';

class PessoaRoutes extends BaseRoutes {
    routes(): void{
        this.router.post("",validate(createPessoaSchema), PessoaController.create);
        this.router.patch("/:id",validate(updatePessoaSchema), PessoaController.update);
        this.router.delete("/:id", PessoaController.delete);
        this.router.get("", PessoaController.findAll);
        this.router.get("/:id", PessoaController.findById);
    }
}

export default new PessoaRoutes().router;