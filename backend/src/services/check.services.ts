import type { Request, Response } from "express";

class CheckServices {
    async check(
        req: Request,
        res: Response
    ){
        try{
            return req.user;

        }catch(err){
            console.log("the error is "+err)
        }

    }
}
export default new  CheckServices();