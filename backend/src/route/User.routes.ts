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


const router = Router();

router.post("/register",async(req,res)=>{

const user = await signupController.signup(req,res);
res.json({data: user})
});

router.post("/login",loginController.login);

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

router.get("/checkroute",protectedroute,CheckController.checkuser)
   

export default router;