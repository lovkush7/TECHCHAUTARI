import type { Request, Response } from "express";
import RejectRequestService from "../../services/Rejectrequest/RejectRequest.service.ts";

class RejectRequestController {
    async rejectRequest (
        req: Request,
        res: Response
    ){
     try{
        const userId = req.user?.id;

        const {reciverId} = req.params;

        if(!userId ){
            throw new Error("User not found");
        }
        if(!reciverId){
            throw new Error("Reciver not found");
        }
        
         await RejectRequestService.rejectRequest( userId, reciverId);

     }catch(err){
        console.log(err);
     }
    }
}
export default new RejectRequestController();