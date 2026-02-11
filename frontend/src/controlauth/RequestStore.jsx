import { create } from "zustand";
import api from "../api/api";

const RequestStore = create((set)=>({
    requests: [],
    isSendingRequest: false,
    isgettingRequests: false,
    PendingRequests: [],
    GetsendRequests: [],







 sendRequest: async (requestdata) => {
  try {
    set({ isSendingRequest: true });

    const res = await api.post("/auth/sendfriendrequest", requestdata);

    set(state => ({
      GetsendRequests: [...state.GetsendRequests, res.data]
    }));

  } catch (err) {
    console.log("Error sending request:", err);
  } finally {
    set({ isSendingRequest: false });
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
   getSendRequests: async () => {
  try {
    const res = await api.get("/auth/getsendrequests");
    set({ GetsendRequests: [...res.data.data] }); //  IMPORTANT
  } catch (err) {
    console.log("the error is " + err);
  }
},

acceptreq: async(requestId)=>{
  try{
    const res = await api.patch(`/auth/acceptfriendrequest/${requestId}`)
     set(
      state => ({
        PendingRequests: state.PendingRequests.filter(req => req.id !== requestId)
      })
     )

  }catch(err){
    console.log("the error is "+err)
  }
},
rejectreq: async(requestId)=>{
  try{
   const res = await api.patch(`/auth/rejectfriendrequest/${requestId}`)
     set( state => ({
      PendingRequests: state.PendingRequests.filter(req => req.id !== requestId  )
     }))
  }catch(err  ){
    console.log("the error is "+err)
  }
}

}))
export default RequestStore;