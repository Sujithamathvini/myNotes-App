import React from 'react'

const Cards = ({card, onDeleteItems}) => {
  return (
    <div className='relative w-[280px] h-[300px] bg-[#9775fa] flex flex-col p-8 border-black border-2 rounded-[20px]'>
      <div className='relative w-full h-[40px] py-3 overflow-hidden'>
        <h1 className='text-black font-extrabold'>{card.title}</h1>
      </div>
      <div className='relative w-full h-[200px] overflow-hidden py-2'>
        <p className='text-black font-semibold'>{card.description}</p>
      </div>
      <button className='text-white text-center font-semibold bg-black px-7 py-3 rounded-[10px] mt-3 self-end' onClick={()=>{onDeleteItems(card.id)}}>Delete</button>
    </div>
  )
}

export default Cards