import type { Request } from "express";
import PendignrequestService from "../../services/PendingRequest/Pendignrequest.service.ts";

class PendignRequestController {
    async getPendingRequests(
        req: Request
    ){
      try{
        const userId = req.user?.id;
        if(!userId){
            throw new Error("User not found");
        
        }
        return await PendignrequestService.getpendingrequests(userId);

      }catch(err){
        console.log(err);
      }
    }
}

export default new PendignRequestController();