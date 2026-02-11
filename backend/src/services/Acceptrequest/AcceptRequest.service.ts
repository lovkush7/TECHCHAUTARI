import FriendRequest, { FriendRequestStatus } from "../../entities/Friendrequest.entities.ts";

class AcceptRequestService {
    async acceptfr(
        userId: string,
        requestId: string
    ){
        try{

            const request = await FriendRequest.findOne({
                where:{
                    id: requestId,
                },
                relations: ["reciver"]
            });
            if(!request){
                throw new Error("Friend request not found");
            }

            if(request.reciver.id !== userId){
                throw new Error("You are not authorized to accept this request");
            }
            request.status= FriendRequestStatus.ACCEPTED;
            await request.save()

            return {
                success: true,
                message: "Friend request accepted successfully",
                request: request.status
            }

        }catch(err){
            console.log("the error is "+err);
            throw err;
        }

    }
}
export default new AcceptRequestService();