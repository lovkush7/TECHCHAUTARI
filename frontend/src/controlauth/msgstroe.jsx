import { create } from "zustand";
import api from "../api/api";
import { Socket } from "socket.io-client";
import Authcontrol from "./authcontrol";
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
 sendmessages: async (messagedata) => {
  try {
    const { messages, selectedUsers } = get();
    const { authUser } = Authcontrol.getState();

    const response = await api.post(`/auth/sendmessages/${selectedUsers.id}`, messagedata);
    
    // Extract the actual message (nested in response.data.data)
    const messageData = response.data.data ?? response.data; 

    // Normalize sender/receiver
    const newMessage = {
      id: messageData.id,
      text: messageData.text || "",              // ensure text exists
      image: messageData.image || null,
      createdat: messageData.createdat || new Date().toISOString(),
      sender: {
        id: messageData.sender?.id || authUser.id,
        profile: messageData.sender?.profile || authUser.profile || "./profile.jpg",
      },
      reciver: {
        id: messageData.reciver?.id || selectedUsers.id,
        profile: messageData.reciver?.profile || selectedUsers.profile || "./profile.jpg",
      },
    };

    set({ messages: [...messages, newMessage] });

  } catch (err) {
    console.log("the error is " + err);
  }
},
    setselectedUsers: async(selectedUsers)=>{
        set({selectedUsers})

    },

    listenTomessages: ()=>{
        const {selectedUsers} = get();
        if(!selectedUsers){
            return;
        }
        const socket = Authcontrol.getState().socket;
        socket.on("newmessage",(newmessage)=>{
          set({messages: [...get().messages, newmessage]})
        })
    },
    nonlistenTomessages: ()=>{
        const socket = Authcontrol.getState().socket;
        socket.off("newmessage")
    }


}))

export default Usemessages;