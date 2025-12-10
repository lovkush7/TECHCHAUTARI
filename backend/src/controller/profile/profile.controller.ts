import type { Response } from "express";
import UserprofileServices from "../../services/porfileService/Userprofile.services.ts";
import type { AuthenticateRequest } from "../../Type/Authenticatereq.ts";

class Profilecontroller {
    async Profile(
        req: AuthenticateRequest,
        res: Response
    ){
        return await UserprofileServices.Profile(req,res);
    }
}
export default new Profilecontroller();