import { create } from "zustand";
import api from "../api/api";
// import api from "../api/api";

const Usemessages = create((set,get)=>({
    messages:[],
    Users:[],
    selectedUsers: null,
    ismessageloading: false,
    isuserloading: false,

    getusers: async()=>{
        try{
            set({isuserloading: true})
            const res = await api.get("/auth/getuser");
            set({Users: res.data.data});
            // console.log("the users from backend",res.data);

        }catch(err){
            console.log("the error is"+err);

        }finally{
            set({isuserloading: false});
        }
    },

    getmessages: async(userid)=>{
        try{
            set({ismessageloading: true})
            const res= await api.get(`/auth/messagesget/${userid}`);
            set({messages: res.data.data});
            console.log("the message",res.data);

        }catch(err){
            console.log("the error is "+err)
        }finally{
            set({ismessageloading:false})
        }
    },
    sendmesage: async(messagedata)=>{
        try{
            const {messages,selectedUsers} = get();

            const response  = await api.post(`/auth/sendmessages/${selectedUsers}`,messagedata);
            set({messages: [...messages, response.data]})

        }catch(err){
            console.log("the error is "+err)
        }
    },
    setselectedUsers: async(selectedUsers)=>{
        set({selectedUsers})

    }


}))

export default Usemessages;