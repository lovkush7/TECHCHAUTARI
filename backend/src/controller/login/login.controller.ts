import type { Request, Response } from "express";
import loginServices from "../../services/login.services.ts";
// import loginController from "../../services/login.services.ts";

class Logincontroller {
    async login(
        req: Request,
        res: Response
    ){
     return await loginServices.login(req,res)

    }
}
export default new Logincontroller();