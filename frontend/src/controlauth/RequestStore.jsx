import { create } from "zustand";
import api from "../api/api";

const RequestStore = create((set)=>({
    requests: [],
    isSendingRequest: false,
    isgettingRequests: false,
    PendingRequests: [],
    GetsendRequests: [],






    sendRequest: async(requestdata)=>{
        try{
            set({isSendingRequest: true});
            const request = await api.post("/auth/sendfriendrequest", requestdata);
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
        set({PendingRequests: res.data.data})
        }catch(err){
            console.log("the error is "+err)
        }

    },
    getSendRequests: async ()=>
        {
            try{
                const res = await api.get("/auth/getsendrequests");
                set({GetsendRequests: res.data.data})

            }catch(err){
                console.log("the error is "+err)
            }
        },

}))
export default RequestStore;