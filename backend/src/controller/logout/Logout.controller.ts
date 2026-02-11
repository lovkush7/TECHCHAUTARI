import type { Request, Response } from "express";

class logoutController {
    async logout( 
        req:Request,
        res: Response
    ){
        try{
             res.cookie("jwt","",{maxAge:0})
            res.json({success: true, message:'Logged out successfully'})

        }catch(err){
            throw err;
        }
    }
}
export default new logoutController();