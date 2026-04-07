import React, { useState } from 'react'
import Authcontrol from '../../controlauth/authcontrol'

const Tabbar = () => {
    const {authUser} = Authcontrol();
    const tabs = [
        "About",
        "Experience",
        "Reviews"
    ]

    const [activeTab, SetActiveTab]= useState("About")
  return (
    <>
    <div className='bg-white rounded-2xl border border-stone-300 shadow px-2 py-2 flex gap-2 mb-5'>
        {tabs.map((tab)=>(
            <button key={tab} onClick={()=>SetActiveTab(tab)} 
            className={`flex-1 capitalize font-medium  px-4 py-2 rounded-lg transistion-all ${activeTab === tab ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}>
                {tab}

            </button>
        ))}
        
    
    </div>
      {activeTab === "About" && (
        <div className='bg-white p-7 border border-stone-200 rounded-xl shadow  '>
            <h3 className='text-base font-bold text-stone-900 mb-4'>AboutMe</h3>
            <p className='text-sm text-stone-600 leading-relaxed'>{authUser?.About || "no info availaable"}</p>

        </div>
      )}

        {activeTab === "Experience" && (
        <div className='bg-white p-7 border border-stone-200 rounded-xl shadow  '>
            <h3 className='text-base font-bold text-stone-900 mb-4'>Experience</h3>
            <p className='text-sm text-stone-600 leading-relaxed'>{authUser?.About || "no Experience availaable"}</p>

        </div>
      )}



        {activeTab === "Reviews" && (
        <div className='bg-white p-7 border border-stone-200 rounded-xl shadow  '>
            <h3 className='text-base font-bold text-stone-900 mb-4'>Reviews</h3>
            <p className='text-sm text-stone-600 leading-relaxed'>{authUser?.Reviews || "no reviews availaable"}</p>

        </div>
      )}
    </>
    
  )
}

export default Tabbar
