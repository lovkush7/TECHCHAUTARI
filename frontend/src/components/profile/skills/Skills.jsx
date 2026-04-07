import React, { useState } from 'react'

const Skills = () => {
    const [skills, setSkills] = useState([
  { label: "Figma", color: "bg-orange-100 text-orange-800 border-orange-200" },
  { label: "React", color: "bg-stone-100 text-stone-700 border-stone-200" },
  { label: "Node.js", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { label: "TypeScript", color: "bg-stone-100 text-stone-700 border-stone-200" },
  { label: "UI/UX", color: "bg-orange-100 text-orange-800 border-orange-200" },
  { label: "PostgreSQL", color: "bg-stone-100 text-stone-700 border-stone-200" },
  { label: "Tailwind", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { label: "Next.js", color: "bg-stone-100 text-stone-700 border-stone-200" },
  { label: "Framer", color: "bg-orange-100 text-orange-800 border-orange-200" },
]);
  return (
    <div className='bg-white rounded-2xl border border-stone-200 shadow p-5 '>
        <p className='text-[15px] font-bold tracking-[2px] uppercase text-stone-300 mb-3'>
           Skills
        </p>
        <div className=' flex flex-wrap gap-2'>
        {skills.map((skill)=>(
            <span key={skill.id} className={`px-3 py-1 rounded-full text-xs font-medium border bg-amber-200 `}>
                {skill.label}
            </span>
        ))}

        </div>
      
    </div>
  )
}

export default Skills
