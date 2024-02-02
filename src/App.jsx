import { useRef, useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import Inputform from './Components/Inputform/Inputform'
import Editform from './Components/Editform/Editform'

function App() {
  const ref = useRef(null)
  const [showInputform, setshowInputform] = useState(false)
  const [showEditform, setshowEditform] = useState(false)
  const [EditId, setEditId] = useState(null)
  const [EditTitle, setEditTitle] = useState("")
  const [EditDesc, setEditDesc] = useState("")
  const [cards, setcards] = useState([
    {id:1, title:"Title comes here", description:"Decription comes here !! Decription comes here !! Decription comes here !! Decription comes here !!"},
  ])

  function handleshowInputform(){
    setshowInputform(true)
  }
  function handlecloseInputform(){
    setshowInputform(false)
  }

  function handleshowEditform(id){
    setshowEditform(true)
    setEditId(id)
    cards.map((card) => {
      if(card.id === id){
        setEditTitle(card.title)
        setEditDesc(card.description)
      }
    })
  }
  function handlecloseEditform(){
    setshowEditform(false)
  }

  function handleAddItems(newcard){
    setcards([...cards, newcard])
  }
  function handleDeleteItems(id){
    setcards(cards.filter((card)=>(card.id !== id)))
  }
  function handleUpdateItems(id, title, description){
    setcards(cards.map((card) =>
    card.id === id ? {...card, title:title, description:description} : card))
  }

  return (
    <>
      <div className='m-10'>
        <div className='flex items-center justify-end'>
          <button onClick={handleshowInputform}>
            <h1 className='text-black font-extrabold bg-[#9775fa] border-black border-2 rounded-full w-[40px] h-[40px] flex items-center justify-center text-[20px] text-center'>+</h1>
          </button>
        </div>
        <div ref={ref} className='flex flex-wrap gap-4 justify-center items-center mb-[100px]'>
          {cards.map((card) => (
            <Cards card={card} key={card.id} handleDeleteItems={handleDeleteItems} handleshowEditform={handleshowEditform} reference={ref} />
          ))}
        </div>
      </div>
      <div className='fixed flex items-center justify-center w-full h-[60px] bg-[#9775fa] bottom-0 border-black border-t-2'>
        <h3 className='text-black font-bold tracking-[.15rem] text-[18px]'>You can ADD, EDIT/SHOW(double click) and DELETE notes in <span className='text-white'>myNotes</span></h3>
      </div>
      {showInputform &&
      <div className='fixed flex justify-center items-center inset-0'>
          <Inputform handlecloseInputform={handlecloseInputform} handleAddItems={handleAddItems}/>
      </div>}
      {showEditform &&
      <div className='fixed flex justify-center items-center inset-0'>
          <Editform EditId={EditId} EditTitle={EditTitle} EditDesc={EditDesc} handlecloseEditform={handlecloseEditform} handleUpdateItems={handleUpdateItems}/>
      </div>}
    </>
  )
}

export default App
