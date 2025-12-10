import { Router } from "express"
import signupController from "../controller/register/signup.controller.ts";
import loginController from "../controller/login/login.controller.ts";
import protectedroute from "../middleware/protectedroute.ts";
import CheckController from "../controller/check/Check.controller.ts";

const router = Router();

router.post("/register",async(req,res)=>{

const user = await signupController.signup(req,res);
res.json({data: user})
});

router.post("/login",async(req,res)=>{
    const user = await loginController.login(req,res);
    res.json({success: true, user});
})

router.get("/check",protectedroute,CheckController.checkuser)
   
   

export default router;