import { Column, Entity, ManyToOne } from "typeorm/browser";
import Commonentities from "./Common.entities.ts";
import { User } from "./User.entities.ts";

export enum FriendRequestStatus {
    PENDING = "PENDING",
    ACCEPTED= "ACCEPTED",
    REJECTED= "REJECTED"
}

@Entity()
class FriendRequest extends Commonentities {

@ManyToOne(()=>User, (user)=>user.sendFriendRequest,{onDelete:"CASCADE"})
sender: User;

@ManyToOne(()=>User, (user)=>user.reciveFriendRequest)
Reciver: User;

@Column({type: "enum", enum: FriendRequestStatus, default: FriendRequestStatus.PENDING})
status: FriendRequestStatus;

}
export default FriendRequest;