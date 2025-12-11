import { Router } from "express"
import signupController from "../controller/register/signup.controller.ts";
import loginController from "../controller/login/login.controller.ts";
import protectedroute from "../middleware/protectedroute.ts";
import CheckController from "../controller/check/Check.controller.ts";
import profileController from "../controller/profile/profile.controller.ts";

import GetuserControllers from "../controller/getusers/Getuser.controllers.ts";


const router = Router();

router.post("/register",async(req,res)=>{

const user = await signupController.signup(req,res);
res.json({data: user})
});

router.post("/login",async(req,res)=>{
    const user = await loginController.login(req,res);
    res.json({success: true, user});
})

router.get("/check",protectedroute,CheckController.checkuser);


router.put("/update",protectedroute,async(req,res)=>{
    const user = await profileController.Profile(req,res);

    res.status(200).json({ data: user});
})

router.get("/getusers",protectedroute,async(req,res)=>{
  const user = await GetuserControllers.getuser(req,res);
  res.json({data: user})
// =======
//     res.status(200).json({ data: user})
// >>>>>>> a3c04943124ba8f65b6a82a433557a6c782a1abb
})
   
   

export default router;