import React from 'react'
import { motion } from "framer-motion"

const Cards = ({card, handleDeleteItems, handleshowEditform, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragTransition={{bounceDamping:30}} className='relative w-[280px] h-[300px] bg-[#9775fa] flex flex-col p-8 border-black border-2 rounded-[20px] cursor-pointer select-none' onDoubleClick={()=>handleshowEditform(card.id)}>
      <div className='relative w-full h-[40px] py-3 overflow-hidden'>
        <h1 className='text-black font-extrabold'>{card.title}</h1>
      </div>
      <div className='relative w-full h-[200px] overflow-hidden py-2'>
        <p className='text-black font-semibold'>{card.description}</p>
      </div>
      <button className='text-white text-center font-semibold bg-black px-7 py-3 rounded-[10px] mt-3 self-end' onClick={()=>{handleDeleteItems(card.id)}}>Delete</button>
    </motion.div>
  )
}

export default Cards