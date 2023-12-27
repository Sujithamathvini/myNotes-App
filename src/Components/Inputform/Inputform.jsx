import React, { useState } from 'react'
import '../Inputform/Inputform.css'

const Inputform = ({onClose, onAddItems}) => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")

  function handleSubmit(event){
    event.preventDefault()
    if(title.length === 0 && description.length === 0) alert("Your notes can't be empty !!")
    else{
    const newcard = {
      id: Date.now(), title, description
    }
    onAddItems(newcard)
    onClose()

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
            <button className='text-white text-center font-semibold bg-black px-7 py-3 rounded-[10px] mt-auto z-10' onClick={handleSubmit}>
              Add
            </button>
        </form>
    </div>
  )
}

export default Inputform