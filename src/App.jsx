import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
const [notesTitle,setNotesTitle]=useState("")
const [notes,setNotes]=useState([
  {id:1,title:'adnan'},
  {id:1,title:'adnan'}
])
const [editMode,setEditMode]=useState(false)
const [editableNote,setEditableNote]=useState(null)

const changeHandler=(e)=>{
 setNotesTitle(e.target.value)
}
const submitHandler=(e)=>{
 e.preventDefault();
 if(notesTitle.trim() ===""){
  return alert(`please enter a valid data`)
 }
 const newNote={
  id:Date.now()+"",
  title:notesTitle,
 };
 setNotes([...notes,newNote])
 setNotesTitle("")
}
  return(
    <div className="Form-Body">
    <form onSubmit={submitHandler}>
      <input type="text" value={notesTitle} onChange={changeHandler}/>
      <button type="submit">Add Note</button>
    </form>
    <div className="form-list">
<h2>Add Data Now</h2>
<ul>
  {notes.map((note)=>(
    <>
    <li>
      <span>{note.title}</span>
      <button>Edit</button>
      <button>Delete</button>
    </li>
    </>
  ))}
</ul>
    </div>
    </div>
  )
   
  
}

export default App
