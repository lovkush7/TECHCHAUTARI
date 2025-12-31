import React, { useRef, useState } from 'react'
import { Image, SendIcon } from "lucide-react"
import "./Chatinput.css"

const Chatinput = () => {

const [Message, setMessage] = useState("");
const [image,setimage] = useState(null);
const fileinputref = useRef();


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

    }
    const handlemessages =(e)=>{
      e.preventDefault();
      console.log(Message,image);

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
              <button type='submit' 
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
