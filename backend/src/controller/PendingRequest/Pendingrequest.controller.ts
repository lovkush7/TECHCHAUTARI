import type { Request, Response } from "express";
import PendignrequestService from "../../services/PendingRequest/Pendignrequest.service.ts";

class PendignRequestController {
    async getPendingRequests(
        req: Request,
        
    ){
      try{
        const userId = req.user?.id;
        console.log(userId);
        if(!userId){
            throw new Error("User not found");
        
        }
       return await PendignrequestService.getpendingrequests(userId);
        

      }catch(err){
        console.log( "the error is"+err);
        throw err;
      }
    }
}

export default new PendignRequestController();