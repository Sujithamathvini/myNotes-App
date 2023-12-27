import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import Inputform from './Components/Inputform/Inputform'

function App() {
  const [showInputform, setshowInputform] = useState(false)
  const [cards, setcards] = useState([
    {id:1, title:"Title comes here", description:"Decription comes here !! Decription comes here !! Decription comes here !! Decription comes here !! sdhfjhfjkdhfjksh"},
  ])

  function handleshowInputform(){
    setshowInputform(true)
  }
  function handlecloseInputform(){
    setshowInputform(false)
  }

  function handleAddItems(newcard){
    setcards([...cards, newcard])
  }
  function handleDeleteItems(id){
    setcards(cards.filter((card)=>(card.id !== id)))
  }

  return (
    <>
      <div className='m-10'>
        <div className='flex items-center justify-end'>
          <button onClick={handleshowInputform}>
            <h1 className='text-black font-extrabold bg-[#9775fa] border-black border-2 rounded-full w-[40px] h-[40px] flex items-center justify-center text-[20px] text-center'>+</h1>
          </button>
        </div>
        <div className='flex flex-wrap gap-4 justify-center items-center'>
          {cards.map((card) => (
            <Cards card={card} key={card.id} onDeleteItems={handleDeleteItems} />
          ))}
        </div>
      </div>
      <div className='fixed flex items-center justify-center w-full h-[60px] bg-[#9775fa] bottom-0 border-black border-t-2'>
        <h3 className='text-black font-bold tracking-[.15rem] text-[18px]'>You can only ADD and DELETE notes in <span className='text-white'>myNotes</span></h3>
      </div>
      {showInputform &&
      <div className='fixed flex justify-center items-center inset-0'>
          <Inputform onClose={handlecloseInputform} onAddItems={handleAddItems}/>
      </div>}
    </>
  )
}

export default App
