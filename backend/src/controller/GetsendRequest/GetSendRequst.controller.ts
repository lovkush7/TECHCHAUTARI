import type { Request } from "express";
import GetSendRequestService from "../../services/GetSentRequest/GetSendRequest.Service.ts";

class GetSendRequestController {
    async getsendrequest(
        req: Request
    ){
      try{
        const userId = req.user?.id;

        if(!userId){
            throw new Error("unauthorized")
        }
        return await GetSendRequestService.getsendrequest(userId);

      }catch(err){
        console.log("the error is ",err)
        throw err;
      }
    }

}
export default new GetSendRequestController();