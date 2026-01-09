import { create } from "zustand";
import api from "../api/api";
import io from "socket.io-client"

const Authcontrol = create((set,get)=>({
    authUser: null ,
    ischeckingauth: false,
    isloggingin: false,
    issigningup: false,
    isupdatingprofile: false,
    onlineusers: [],
    socket: null,


    check: async()=>{
        try{
            set({ischeckingauth: true});
            const res = await api.get("/auth/checkroute");
            set({authUser: res.data})
            console.log(res);
             get().connectSocket()

        }catch(err){
            console.log("the error is "+err)
        }finally{
            set({ischeckingauth: false});

        }
    },
    login: async (data)=>{
        try{
            set({isloggingin: true});
            const res = await api.post("/auth/login", data);
            set({authUser: res.data});
            console.log(res);
            get().connectSocket()

        }catch(err){
            console.log("the error is "+err)
        }finally{
            set({isloggingin: false});
        }
    },

    signup: async (data)=>{
        try{
            set({issigningup: true});
            const res = await api.post("/auth/register", data);
            set({authUser: res.data});
            console.log(res);
             get().connectSocket()

        }catch(err){
            console.log("the error is "+err)
        }finally{
            set({issigningup: false});
        }
    },
    connectSocket: async()=>{
        const {authUser} = get()

        if(!authUser || get().socket?.connected) return;

       const socket = io("http://localhost:8000", {
        query:{
            userId: authUser.id,
        }
       });
       socket.connect();
      set({socket: socket})
       
      socket.on("getonlineusers" ,(userId)=>{
        set({onlineusers: userId})
      })

    },
    disconnectSocket: async()=>{

        if(get().socket?.connected) get().socket.disconnect();
        
    },

}));
export default Authcontrol;