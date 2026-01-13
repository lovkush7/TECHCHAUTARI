import FriendRequest, { FriendRequestStatus } from "../../entities/Friendrequest.entities.ts";
import { User } from "../../entities/User.entities.ts";

class SendRequestService {
async sendFriendRequest(senderId: string, receiverId: string) {
    
    try{
    if(senderId === receiverId){
        throw new Error("Cannot send friend request to yourself");
    }

        const user = await User.findOne({
            where:{
                id: receiverId
            }
        })
        if(!user){
            throw new Error("Receiver user not found");
        }

        const existingRequest = await FriendRequest.findOne({
            where:{
                sender: {id: senderId},
                Reciver: {id: receiverId}

            },
            relations: ["sender", "Reciver"] 
        })
        if(existingRequest){
            throw new Error("Friend request already sent");
        }

        const fr = new FriendRequest()
        fr.sender = {id: senderId} as unknown as User;
        fr.Reciver = {id: receiverId} as unknown as User;
        fr.status = FriendRequestStatus.PENDING;

        await fr.save();

       return {
        success: true,
        message: "Friend request sent successfully",
        fr
       }

    }catch(err){
        throw new Error("Failed to send friend request");
    }
}
}export default new SendRequestService();