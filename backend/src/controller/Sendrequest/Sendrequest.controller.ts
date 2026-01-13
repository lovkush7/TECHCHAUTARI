import type { Request, Response } from "express";
import SendrequestService from "../../services/Sendrequest/Sendrequest.service.ts";

class SendrequestController {
    async sendFriendRequest(
        req: Request,
        res: Response
    ){
        try{
            const senderId = req.user?.id;

            const {receiverId} = req.body;
            if(!receiverId)
                 throw new Error("Receiver ID is required");

            if(!senderId){
                throw new Error("Sender ID is required");
            }
        return await SendrequestService.sendFriendRequest(senderId, receiverId);
        }catch(err){
            throw err;
        }
    }
}
export default new SendrequestController();