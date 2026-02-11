import FriendRequest, { FriendRequestStatus } from "../../entities/Friendrequest.entities.ts";

class RejectRequestService {
    async rejectRequest(
        userId: string,
        reciverId: string,
    ){
        try{
            const request = await FriendRequest.findOne({
                where:{
                    id: reciverId,
                },
                relations: ["reciver"]
            });

            if(!request){
                throw new Error("Friend request not found");
            }
            if(request.reciver.id !== userId){
                throw new Error("You are not authorized to reject this request");

            }
            request.status = FriendRequestStatus.REJECTED;
            await request.save();

            return {
                success: true,
                 message: "Friend request rejected successfully", 
                 request: request.status};

        }catch(err){
            console.log(err)
        }

    }
}
export default new RejectRequestService();