import type { Request, Response } from "express";
import AcceptRequestService from "../../services/Acceptrequest/AcceptRequest.service.ts";


class AcceptRequestCotroller{
    async acceptfr(
        req: Request,
        res: Response
    ){
        try{
            const userId = req.user?.id;

           const { requestId} = req.params;

           if(!userId){
            throw new Error("User not authenticated");
           }

           if(!requestId){
            throw new Error("Invalid request ID");
           }

        return await AcceptRequestService.acceptfr(userId,requestId)
        }catch(err){
            console.log("the error is "+err);
        }
    }
}
export default new AcceptRequestCotroller();