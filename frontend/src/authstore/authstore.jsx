import { create } from "zustand"
import api from "../api/api";

const Useauthstore = create((set)=>({
    authstore: null,
    isLoggingup: false,
    isSiginingup: false,
    isupdatingprofile: false,
    ischeckingauth: true,



    check: async()=>{
        try{
            // set({ischeckingauth: true});

            const res = await api.get("/auth/check");
            set({authstore: res.data})

        }catch(err){
            console.log(err)
        }finally{
            set({ischeckingauth: false});

        }

    },

    signup: async(data)=>{
        try{
            set({isSiginingup: true});

            const res = await api.post("/auth/signup",data);
            set({authstore: res.data})
            
        }catch(err){
            console.log("the error is "+err);
        }finally{
            set({isSiginingup: false});

        }

    },

    login: async(data)=>{
        try{
            set({isLoggingup});
            const res = await api.post("/auth/login",data);
            set({authstore: res.data})
         

        }catch(err){
            console.log(err);

        }finally{
            set({isLoggingup: false});

        }
    }
}));

export default Useauthstore;