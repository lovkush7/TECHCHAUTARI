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
import GetLikesController from "../controller/getlikes/GetLikes.controller.ts";
import PostComment from "../entities/Postcomment.entities.ts";
import PostCommentController from "../controller/PostComment/PostComment.controller.ts";
import GetPostController from "../controller/Post/GetPost/GetPost.controller.ts";
import LikepostController from "../controller/Post/likedpost/Likepost.controller.ts";
import chatbotController from "../controller/chatbot/chatbot.controller.ts";
import SkillController from "../controller/skills/Skill.controller.ts";
import projectControllers from "../controller/project/project.controllers.ts";
import proposalController from "../controller/proposal/proposal.controller.ts";
import ContractController from "../controller/contract/Contract.controller.ts";
import MilestoneController from "../controller/milestone/Milestone.controller.ts";
import ProfileinfoController from "../profileInfo/Profileinfo.controller.ts";


const router = Router();

router.post("/register",async(req,res)=>{

const user = await signupController.signup(req,res);
res.json({data: user})
});

router.post("/login",loginController.login);

router.post("/logout",protectedroute,LogoutController.logout)

// router.get("/check",protectedroute,CheckController.checkuser);



router.post("/profile",protectedroute,async(req,res)=>{
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
  router.get("/getpost",protectedroute,async(req,res)=>{
  const user = await GetPostController.getPost();
  res.json({
    success:true,
    data: user
  })
  })
router.post("/post/comments/:postId", protectedroute, async(req,res)=>{
  const user = await PostCommentController.PostComment(req,res)
  res.json({
    success: true,
    data: user
  })
})   
 
router.post("/getlikes", protectedroute, async(req,res)=>{
const user = await LikepostController.likepost(req,res)
res.json({
  success: true, 
  data: user
})
});

router.post("/prompt",protectedroute,async(req,res)=>{
  const user = await chatbotController.prompt(req,res)
  res.json({
    success: true,
    data: user
  })
})


router.post("/skills",protectedroute, async(req,res)=>{
  const user = await SkillController.addSkills(req,res)
  res.json({
    success: true,
    data: user
  })
})

router.get("/getskills", protectedroute, async (req,res)=>{
 const user = await SkillController.getSkills(req,res);
 res.json({
  success: true,
  data: user
 })
})

  router.post("/projet",protectedroute,async (req,res)=>{
    const user = await projectControllers.project(req,res)
    res.json({
      success: true,
      data: user
    })
    
  })

  router.get("/getproject", protectedroute, async(req,res)=>{
   const user = await projectControllers.getproject(req,res)
   res.json({
    sucess: true,
    data: user
   })
  })
 

  router.get("/getproject/:projectId",protectedroute, async(req,res)=>{
    const user = await projectControllers.GetSingleProject(req,res)
    res.json({
      success: true,
      data: user
    })
  })

  router.put("/updateproject/:projectId", protectedroute, async(req,res)=>{
  const user = await projectControllers.updateProject(req,res)
  res.json({
    success: true,
    data: user
  })
  })

  router.delete("/deleteProject/:projectId",protectedroute, async(req,res)=>{
 const user = await projectControllers.DeleteProject(req,res)
 res.json({
  success: true,
  data: user
 })
  })

  router.put("/changeStatus/:ProjectId",protectedroute, async(req,res)=>{
   const user = await projectControllers.changeStatus(req,res)
   res.json({
    success: true,
    data: user
   })
  })

  router.post("/submitProposal/:projectId",protectedroute, async(req,res)=>{
  const user = await proposalController.submitProposal(req,res);
  res.json({
    success: true,
    data: user
  })
  })

  router.get("/proposal/:projectId", protectedroute, async(req,res)=>{
    const user = await proposalController.getproposal(req,res);
    res.json({
      success: true,
      data: user
    })
  })

  router.put("/acceptProposal/:proposalId", protectedroute, async(req,res)=>{
   const user = await proposalController.acceptProposal(req,res)
   res.json({
    success: true,
    data: user
   })
  })

  router.put("/rejectProposal/:proposalId", protectedroute, async(req,res)=>{
    const user = await proposalController.rejectProposal(req,res)
    res.json({
      success: true,
      data: user
    })
  })

router.post("/createContract", protectedroute, async(req,res)=>
{
 const user = await ContractController.createContract(req,res);
 res.json({
  success: true,
  data: user
 })
})

router.get("/getcontract", protectedroute , async(req,res)=>{
 const user = await ContractController.getContract(req,res)
 res.json({
  success: true,
  data: user
 })
})

router.post("/createmilestones", protectedroute, async (req,res)=>{
  const user = await ContractController.createmilestone(req,res)
  res.json({
    success: true,
    data: user
  })
})

router.patch("/completeContract/:contractId", protectedroute, async(req,res)=>{
  const user = await ContractController.completecontract(req,res)
  res.json({
    success: true,
    data: user
  })
})

router.get("/getmilestone/:contractId",protectedroute, async (req,res)=>{
  const user = await MilestoneController.getMilestone(req,res)
  res.json({
    success: true,
    data: user
  })
})

router.patch("/submitmilestone/:milestoneId", protectedroute , async (req,res)=>{
const user = await MilestoneController.submitMilestone(req,res);
res.json({
  success: true,
  data: user
})
})
router.post("/createProfile",protectedroute,async(req,res)=>{
  const user = await ProfileinfoController.createProfile(req,res);
  res.json({
    success: true,
    data: user
  })

})

export default router;