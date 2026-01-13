import FriendRequest, { FriendRequestStatus } from "../../entities/Friendrequest.entities.ts";

class PendingrequestService {
    async getpendingrequests(
        userId: string
    ){
        try{
            const pending = await FriendRequest.findOne({
                where:{
                    Reciver: {id: userId},
                    status: FriendRequestStatus.PENDING
                },
                relations: ["sender"],
                order: {createdat: "DESC"}
            })
            return pending;

        }catch(err){
            console.log("error is "+err)
        }

    }
}
export default new PendingrequestService();