import { LocateIcon } from 'lucide-react'
import React, { useState } from 'react'
import { CiLocationOff, CiLocationOn } from 'react-icons/ci'

const Most = () => {
  const [isexplained , setIsexplained] = useState(false)
  const jobs = [
    {
      id:"1",
      time: "today",
      Title: "web developer needed for startup project ",
      Description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste h adipisicing elit. Explicabo iste h adipisicing elit. Explicabo iste hadipisicing elit. Explicabo iste hharum tempora accusamus repudiandae rerum nostrum, accusantium fugit vero dolore perferendis. Eos fugiat recusandae ex ullam voluptatibus reiciendis repellendus error?,",
      skills: [
        {
          lebel: "nodejs"
        },
        {lebel: "react"},
        {lebel: "tailwind"}
      ],
      proposals: '10',
      locations: "kathmandu"
      
    },
      {
      id:"2",
      time: "today",
      Title: "web developer needed for startup project ",
      Description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste h adipisicing elit. Explicabo iste h adipisicing elit. Explicabo iste hadipisicing elit. Explicabo iste hharum tempora accusamus repudiandae rerum nostrum, accusantium fugit vero dolore perferendis. Eos fugiat recusandae ex ullam voluptatibus reiciendis repellendus error?,",
      skills: [
        {
          lebel: "nodejs"
        },
        {lebel: "react"},
        {lebel: "tailwind"}
      ],
      proposals: '10',
      locations: "kathmandu"
      
    },
      {
      id:"1",
      time: "today",
      Title: "web developer needed for startup project ",
      Description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste h adipisicing elit. Explicabo iste h adipisicing elit. Explicabo iste hadipisicing elit. Explicabo iste hharum tempora accusamus repudiandae rerum nostrum, accusantium fugit vero dolore perferendis. Eos fugiat recusandae ex ullam voluptatibus reiciendis repellendus error?,",
      skills: [
        {
          lebel: "nodejs"
        },
        {lebel: "react"},
        {lebel: "tailwind"}
      ],
      proposals: '10',
      locations: "kathmandu"
      
    },
  ]
  const toogle =()=>{
    setIsexplained(!isexplained)
  }
  return (
    <div className='flex flex-col flex-wrap w-full space-y-4 '>
       {jobs.map((job)=>(
        <div key={job.id} className='group p-1 mt-3  ml-5 mr-5 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
          <div className='p-3 flex flex-col gap-1.5'>
              <p className='text-gray-600 text-sm'>{job.time}</p>
              <h2 className='pt-3.5 font-bold text-xl group-hover:text-green-600'>
  <span className='inline-block group-hover:border-b-2 border-green-600'>
    {job.Title}
  </span>
</h2>
          </div>
          <div className='m-3 text-30 '>
          <p style={{
            marginLeft: "14px",
            marginRight:"14px",
          display: "-webkit-box",
          fontFamily: "sans-serif",
          color:"#49557e",
          fontWeight:"560",
          WebkitLineClamp: isexplained ? "unset" : 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
            {job.Description}
          </p>
          <span className='text-blue-500 cursor-pointer ml-5' onClick={toogle}>
            {isexplained ? "show less" : "show more"}
          </span>
          </div>
          <div className='ml-4 mt-4'>
            {job.skills.map((skill)=>(
           <span className='px-3 py-1 ml-1 rounded-full text-xs font-medium border bg-amber-200'>
             {skill.lebel}
            </span>
            ))}
            
          </div>
          <div className='mt-4 ml-6 flex gap-2 items-center '>
            <CiLocationOn size={22} className='text-black'/> 
           <p style={{color:"#49557e"}}>  {job.locations}</p>
          </div>
          <br />
           <p  className='ml-6 mb-3' style={{color:"#49557e"}}> proposals:{job.proposals}</p>
        </div>
       ))}
    </div>
  )
}

export default Most
