import { create } from "zustand";
import api from "../api/api";

const RequestStore = create((set)=>({
    requests: [],
    isSendingRequest: false,
    isgettingRequests: false,




    sendRequest: async(requestdata)=>{
        try{
            set({isSendingRequest: true});
            const request = await api.post("/auth/sendrequest", requestdata);
            set((state)=>({
                requests: [...state.requests, request.data]
            }));

        }catch(err){
            console.log("Error sending request:", err);
        }
        finally{
            set({isSendingRequest: false});
        }

    },

    getRequests: async ()=>{
        try{
            set({isgettingRequests: true})
        const res = await api.get("/auth/pendingrequests");
        set({requests: res.data})
        }catch(err){
            console.log("the error is "+err)
        }

    }

}))
export default RequestStore;