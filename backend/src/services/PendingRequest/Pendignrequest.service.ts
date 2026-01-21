import FriendRequest, { FriendRequestStatus } from "../../entities/Friendrequest.entities.ts";

class PendingrequestService {
    async getpendingrequests(
        userId: string
    ){
        try{
            // const pending = await FriendRequest.find({
            //     where:{
            //         Reciver: {id: userId},
            //         status: FriendRequestStatus.PENDING
            //     },
            //     relations: ["sender"],
            //     order: {createdat: "DESC"}
            // })

           const pending = await FriendRequest.createQueryBuilder("fr")
           .leftJoinAndSelect("fr.sender", "sender")
            .where("fr.reciverId = :userId", {userId})
            .andWhere("fr.status = :status", {status: FriendRequestStatus.PENDING})
            .orderBy("fr.createdat", "DESC")
            .getMany();


            return pending;

        }catch(err){
            console.log("error is "+err)
        }

    }
}
export default new PendingrequestService();