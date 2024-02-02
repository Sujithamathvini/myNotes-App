import React, { useState } from 'react'
import '../Editform/Editform.css'

const Editform = ({EditId, EditTitle, EditDesc, handlecloseEditform, handleUpdateItems}) => {
  const [title, settitle] = useState(EditTitle)
  const [description, setdescription] = useState(EditDesc)

  function handleSubmit(event){
    event.preventDefault()
    if(title.length === 0 || description.length === 0) alert("Your notes can't be empty !!")
    else{
    handleUpdateItems(EditId, title, description)
    handlecloseEditform()

    settitle("")
    setdescription("")
    }
  }

  return (
    <div className='relative w-[50vw] h-[80vh]'>
        <div className="absolute inset-0 bg-[#9775fa] opacity-50 z-0 border-black border-2 rounded-[10px]"></div>
        <form onSubmit={handleSubmit}
        className='relative z-10 flex flex-col items-center justify-center'>
            <input className='w-[40vw] h-[20px] m-10 p-8 text-[24px] text-black font-bold tracking-[.15rem] bg-[#e9ecef] border-black border-2 rounded-[13px] focus:outline-none'
            type="text" placeholder='Title' value={title} onChange={(event)=>{settitle(event.target.value)}}/>
            <div className='w-[40vw] h-[45vh] mx-10 mb-6 p-8 bg-[#e9ecef] border-black border-2 rounded-[13px]'>
                <textarea className='text-[24px] text-black font-semibold tracking-[.15rem] bg-transparent focus:outline-none resize-none scrollbars'
                name="" id="" cols="39" rows="7" placeholder='Description' value={description} onChange={(event)=>{setdescription(event.target.value)}}>
                </textarea>
            </div>
            <div className='flex gap-10'>
              <button className='text-white text-center font-semibold bg-black px-7 py-3 rounded-[10px] mt-auto z-10' onClick={handleSubmit}>
                Save
              </button>
              <button className='text-white text-center font-semibold bg-black px-7 py-3 rounded-[10px] mt-auto z-10' onClick={()=>{handlecloseEditform}}>
                Cancel
              </button>
            </div>
        </form>
    </div>
  )
}

export default Editform