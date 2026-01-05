import React, { useRef, useState } from 'react'
import { Image, SendIcon } from "lucide-react"
import "./Chatinput.css"
import Usemessages from '../../../controlauth/msgstroe';

const Chatinput = () => {

const [Message, setMessage] = useState("");
const [image,setimage] = useState(null);
const fileinputref = useRef();

const {sendmessages} = Usemessages()


const handleimage =(e)=>{
   
    const file = e.target.files[0];
    if(!file.type.startsWith("image/")){
            console.log("not an image file");

        return;
    }
       
     const reader = new FileReader()
     reader.onload=()=>{
         setimage(reader.result)
     }
     reader.readAsDataURL(file);



    }
    const removeimages =(e)=>{
      setimage(null);
      if(fileinputref.current){
        fileinputref.current.value="";
      }

    }
    // const callmessage = (e)=>{
    //    console.log(e.target.value)
    // }
    const handlemessages =(e)=>{
      e.preventDefault();
      if(!Message && !image)
        return;

      try{
        sendmessages({
          text: Message.trim(),
          images: image
        })
        setMessage("");
        setimage(null);
        if(fileinputref.current){
          fileinputref.current.value="";
        }

      }catch(err){
        console.log("the error is "+err)
      }
      

    }

  return (
    <div className='message-input'>
       {image && (
        <div className="preview-wrapper">
          <div className="preview-box">
            <img src={image} alt="img" className='preview-image' />
            <button type='submit' className='remove-btn' >
              <span onClick={removeimages} className='remove-icons'>X</span>

            </button>
          </div>
        </div>
       )}
       <form  onSubmit={handlemessages}action="" className="from-row">
         <div className="grow">
          <input type="text" 
          placeholder="Type a message..."
          className='input-text'
           value={Message}
           onChange={
             (e)=>setMessage(e.target.value)
            } />

            <input type="file"
            accept='image/*'
            ref={fileinputref}  
            className='hidden' 
             onChange={handleimage}
             />
              <button type='button' 
              className={`btnn btn-circle btn-sm-hidden ${image ? 'text-emerald-500' : 'text-zinc-500'}`}
               onClick={()=>{fileinputref.current?.click()}}>
               <Image size={22} />
              </button>
       
         </div>
         <button type='submit'className='bttn btn-sm btn-circle' 
         disabled={!Message.trim() && !image}   >
          <SendIcon size={22}/>
         </button>

       </form>
    
    </div>
  )
}

export default Chatinput;
