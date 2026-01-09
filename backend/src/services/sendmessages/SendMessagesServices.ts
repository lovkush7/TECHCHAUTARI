import type { Request, Response } from "express";
import cloudinary from "../../config/Cloudnary.config.ts";
import { Messages } from "../../entities/messages.entities.ts";
import type { User } from "../../entities/User.entities.ts";
import { getReciverSocketId, io } from "../../config/socket.config.ts";

class SendmessagesServices {
   async sendmessages(
        req: Request,
        res: Response
    ){
        try{
            const {text , images} = req.body;

            const {id: reciverid} = req.params;

            const logedinuser = req.user?.id;

            if(!logedinuser){
                return {status: 401 , messages: "unauthorized user"}
            }
            let imageurl;
            if(images){
                const uploadres = await cloudinary.uploader.upload(images);
                imageurl = uploadres.secure_url;
            }

            const message = new Messages();
            message.sender = {id: logedinuser} as unknown as User;
            message.reciver = {id: reciverid} as unknown as User;
            message.text= text;
            if(imageurl){
                message.image = imageurl;
            }
            await message.save();
            
            const reciverSocketid = getReciverSocketId(reciverid as string );
            if(reciverSocketid){
             io.to(reciverSocketid).emit("newmessage", message);
            }

            return message;

        }catch(err){
            console.log("the error is "+err);
            return {success: false, messsages: "internal server error"}
        }

    }
}

export default new SendmessagesServices();