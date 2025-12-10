import { create } from "zustand"
import api from "../api/api";

const Useauthstore = create((set,get)=>({
    authstore: null,
    ischeckingauth: true,
    isLoggingup: false,
    isSiginingup: false,
    isupdatingprofile: false,
  



    check: async()=>{
        try{

            const res = await api.get("/auth/check");
            set({authstore: res.data})
            console.log(res);
            

        }catch(err){
            set({authstore:null})
            console.log(err);
        }finally{
            set({ischeckingauth: false})
        }
    },

    signup: async(data)=>{
        try{
            set({isSiginingup: true});

            const res = await api.post("/auth/register",data);
            set({authstore: res.data})
            console.log(res.data);
            
        }catch(err){
            console.log("the error is "+err);
        }finally{
            set({isSiginingup: false});

        }

    },

    login: async(data)=>{
        try{
            set({isLoggingupa: true});
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