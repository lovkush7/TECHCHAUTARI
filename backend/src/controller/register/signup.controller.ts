import type { Request, Response } from "express";
import SignupService from "../../services/Signup.service.ts";


class SignupController {
    async signup(
        req: Request,
        res: Response
    ){
           return await SignupService.signup(req,res)

    }
}

export default new SignupController();