import { Router } from "express"
import signupController from "../controller/register/signup.controller.ts";
import loginController from "../controller/login/login.controller.ts";
import protectedroute from "../middleware/protectedroute.ts";
// import CheckController from "../controller/check/Check.controller.ts";
import profileController from "../controller/profile/profile.controller.ts";

import GetuserControllers from "../controller/getusers/Getuser.controllers.ts";
import SendmessageControllers from "../controller/sendmessage/Sendmessage.controllers.ts";
import GetmessagesControllers from "../controller/getmessages/Getmessages.controllers.ts";
import CheckController from "../controller/check/Check.controller.ts";
import SendrequestController from "../controller/Sendrequest/Sendrequest.controller.ts";
import AcceptRequestController from "../controller/AcceptRequest/AcceptRequest.controller.ts";
import RejectrequestController from "../controller/RejectRequest/Rejectrequest.controller.ts";
import PendingrequestController from "../controller/PendingRequest/Pendingrequest.controller.ts";
import GetSendRequstController from "../controller/GetsendRequest/GetSendRequst.controller.ts";
import PostController from "../controller/Post/Post.controller.ts";
import LogoutController from "../controller/logout/Logout.controller.ts";


const router = Router();

router.post("/register",async(req,res)=>{

const user = await signupController.signup(req,res);
res.json({data: user})
});

router.post("/login",loginController.login);

router.post("/logout",protectedroute,LogoutController.logout)

// router.get("/check",protectedroute,CheckController.checkuser);



router.put("/update",protectedroute,async(req,res)=>{
    const user = await profileController.Profile(req,res);

    res.status(200).json({ data: user});
})

router.get("/getuser",protectedroute,async(req,res)=>{
  const user = await GetuserControllers.getuser(req,res);
  res.json({data: user})
// =======
//     res.status(200).json({ data: user})
// >>>>>>> a3c04943124ba8f65b6a82a433557a6c782a1abb
})

router.post("/sendmessages/:id",protectedroute,async(req,res)=>{
const user = await SendmessageControllers.sendmessages(req,res);
// return {success: true, data: user}
res.json({data: user})
})
   
router.get("/messagesget/:id",protectedroute,async(req,res)=>{
const user = await GetmessagesControllers.getmessages(req,res);
res.json({data: user})
});

router.get("/checkroute",protectedroute,CheckController.checkuser);


router.post("/sendfriendrequest",protectedroute, async(req,res)=>{
 const user = await SendrequestController.sendFriendRequest(req,res)
  res.json({user});
})

router.patch("/acceptfriendrequest/:requestId",protectedroute,async (req,res)=>{
const user = await AcceptRequestController.acceptfr(req,res);
res.json({user})
}   
)
   
router.patch("/rejectfriendrequest/:reciverId",protectedroute, async(req,res)=>{
  const user = await RejectrequestController.rejectRequest(req,res);
  res.json({user})
});

router.get("/pendingrequests", protectedroute, async(req,res)=>{
  const user = await PendingrequestController.getPendingRequests(req);
  res.json({
    success:true,
    data:user})
});

router.get("/getsendrequests",protectedroute,async(req,res)=>{
  const user = await GetSendRequstController.getsendrequest(req);
  res.json({
    success: true,
    data: user
  })
})

router.post("/posts",protectedroute,async(req,res)=>{
  const user = await PostController.createPost(req,res);
  res.json({
    success: true,
    data: user
  })
 
})
export default router;