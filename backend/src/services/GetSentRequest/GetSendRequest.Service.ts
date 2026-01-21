import FriendRequest, { FriendRequestStatus } from "../../entities/Friendrequest.entities.ts";

class GetSendRequestService {
    async getsendrequest(
        userId: string
    ) {
        try {
            const req = await FriendRequest.find({
                where: {
                    sender: { id: userId },
                    status: FriendRequestStatus.PENDING
                },
                relations: ["reciver"],
                select: {
                    id: true,
                    createdat: true,
                    status: true,
                    reciver: {
                        id: true,
                        Fullname: true,
                        email: true,
                        Role: true
                    },
                },
                    order: { createdat: 'DESC' }
                })
            return req;

        } catch (err) {
            throw err;
        }

    }
}
export default new GetSendRequestService();