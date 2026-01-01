import type { Request, Response } from "express";
import { Messages } from "../../entities/messages.entities.ts";

class GetmessagesServices {
    async getmessage(
        req: Request,
        res: Response
    ){
        try{
            const {id:usertosend}  = req.params;
            const myid = req.user?.id;

            if(!myid){
                return {success: false, status:301, messages: "unautorized user"}
            }
            if(!usertosend){
                return {success: false, status:301, messages: "unautorized user"}
            }
            const messages = await Messages.createQueryBuilder("mess")
            .where("(mess.senderId = :myid AND mess.reciverId = :usertosend) OR (mess.senderId = :usertosend AND mess.reciverId = :myid)",{myid,usertosend})
            .orderBy("mess.createdAt","ASC")
            .getMany()

            return messages

        }catch(err){
            console.log("the error is "+err);
            return {status: 301, success: false, messages: "intrnal server error"}
        }

    }
}
export default new GetmessagesServices();