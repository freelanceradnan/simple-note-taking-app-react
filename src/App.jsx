import { use, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App(){
const [noteTitle,setNoteTitle]=useState("")
const [notes,setNotes]=useState([
  {id:1,title:'adnan'},
  {id:1,title:'adnan'}
])
const [editMode,setEditMode]=useState(false)
const [editableNote,setEditableNote]=useState(null)

const changeHandler=(e)=>{
  setNoteTitle(e.target.value)
}
const submitHandler=(e)=>{
  e.preventDefault();
  if(noteTitle.trim()===""){
  return alert(`please enter a vaild input value`)
  }
  const newNote={
  id:Date.now()+"",
  title:noteTitle,
  }
  setNotes([newNote,...notes])
}
const removeHandler=(noteId)=>{
  const updateNotes=notes.filter((item)=>item.id!==noteId)
  setNotes(updateNotes)
}
  return(
    
 <div className="form-Body">
  <h2>All Notes</h2>
  <form onSubmit={submitHandler}>
    <input type="text" value={noteTitle} onChange={changeHandler}/>
    <button type="submit">Add</button>
  </form>
  
  <ul className="notes">
    {notes.map((note)=>(
      <>
      <li>
        <span>{note.title}</span>
        <button>Edit</button>
        <button onClick={()=>removeHandler(note.id)}>Delete</button>
        </li>
      </>
      
    ))}
  </ul>
 </div>
  )
}

export default App
