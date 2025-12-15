import { create } from "zustand";
import api from "../api/api";

const Usemessages = create((set,get)=>({
    messages:[],
    Users:[],
    selectedUsers: null,
    ismessageloading: false,
    isuserloading: false,

    getusers: async()=>{
        try{
            set({isuserloading: true})
            const res = await api.get("/auth/getusers");
            set({Users: res.data});
            console.log(res.data);

        }catch(err){
            console.log("the error is"+err);

        }finally{
            set({isuserloading: false})
        }
    },

    getmessages: async(userid)=>{
        try{
            set({ismessageloading: true})
            const res= await api.get(`/auth/getmessages/${userid}`);
            set({messages: res.data});

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
    setselectedusers: async(selectedUsers)=>{
        set({selectedUsers})

    }


}))

export default Usemessages;