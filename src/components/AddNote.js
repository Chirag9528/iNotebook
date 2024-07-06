import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note , setNote] = useState({title:"",description:"",tag:""});

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title , note.description , note.tag)
        setNote({title:"",description:"",tag:""})
        props.showAlert("Added Successfully" , "success")
    }
    const OnChange = (e)=>{
        setNote({...note , [e.target.name]:e.target.value})
    }
  return (
    <div className="container my-3">
      <h2>Add a note</h2>
      <form className='my-3'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" value={note.title} id="title" name="title" aria-describedby="emailHelp" minLength={2} required onChange={OnChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" value={note.description} id="description" name="description" minLength={5} required onChange={OnChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" value={note.tag} id="tag" name="tag" onChange={OnChange}/>
        </div>
        
        <button disabled={note.title.length < 2 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
      </div>
  )
}

export default AddNote
