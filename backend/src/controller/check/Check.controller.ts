import type { Request, Response } from "express";
import checkServices from "../../services/check.services.ts";

class CheckController {
    async checkuser(
        req: Request,
        res: Response,
    ){
       
       try{
        return res.json(req.user);

       } catch(err){
        console.log("the error is "+err)
       }
       // return await checkServices.check(req,res);

    }
}

export default new CheckController();