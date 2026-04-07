import React from 'react'

const Avaibility = () => {
  return (
    <div className='bg-white rounded-2xl border border-stone-200 shadow p-5 '>
        <p className='text-[15px] font-bold tracking-[2px] uppercase text-stone-300 mb-3'>
           Avaibility
        </p>
        <div className=' flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
                <span className='w-3 h-3 rounded-full bg-green-500'/>
                <p className='text-sm text-stone-600'>Available</p>
            </div>
        </div>
         <div className="mt-4 bg-stone-50 border border-stone-200 rounded-xl p-4">
              <p className="text-[10px] uppercase tracking-widest text-stone-400">Hourly Rate</p>
              <p className="font-display text-2xl font-extrabold text-stone-900 mt-0.5">
                $65{" "}
                <span className="text-sm font-normal text-stone-400">/ hr</span>
              </p>
            </div>

    </div>
  )
}

export default Avaibility
