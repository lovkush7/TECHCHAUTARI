import type { Request, Response } from "express";

class CheckServices {
    async check(
        req: Request,
        res: Response
    ){
        try{
            res.status(200).json(req.user) ;
            console.log(req.user);

        }catch(err){
            console.log("the error is "+err)
        }

    }
}
export default new  CheckServices();