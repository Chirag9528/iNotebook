import React, { useContext, useEffect , useRef , useState} from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom'

const Notes = (props) => {
    const context = useContext(noteContext);
    const {notes , getNotes , editNote} = context;
    let navigate = useNavigate()
    useEffect(()=>{
      if (localStorage.getItem('token')){
        // console.log(localStorage.getItem('token'))
        getNotes()
      }
      else{
        navigate('/login')
      }
      // eslint-disable-next-line
    },[])

    const ref = useRef(null);
    const refClose = useRef(null);
    
    const [note , setNote] = useState({id:"" , etitle:"",edescription:"",etag:""});
    
    const updateNote = (currentNote)=>{
      ref.current.click();
      setNote({id:currentNote._id , etitle: currentNote.title , edescription : currentNote.description , etag : currentNote.tag})
    }

    
    const handleClick = (e)=>{
        // e.preventDefault();
        refClose.current.click()
        editNote(note.id , note.etitle , note.edescription , note.etag);
        props.showAlert("Updated Successfully" , "success")

    }
    const OnChange = (e)=>{
        setNote({...note , [e.target.name]:e.target.value})
    }

    return (
     <>
      <AddNote showAlert={props.showAlert}/>
      <button type="button"  ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className='my-3'>
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="etitle" value={note.etitle} name="etitle" aria-describedby="emailHelp" minLength={2} required onChange={OnChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">Description</label>
                <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" minLength={5} required onChange={OnChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="etag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="etag" value={note.etag} name="etag" onChange={OnChange}/>
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 2 || note.edescription.length < 5} type="button" onClick={handleClick} className="btn btn-primary">Update  Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h2>Your Notes</h2>
        <div className="container mx-1">
        {notes.length === 0 && 'No Notes to display'}
        </div>
        {notes.map((note)=>{
          return <Noteitem  key={note._id} showAlert={props.showAlert} updateNote = {updateNote} note = {note}/>;
        })}
      </div>
    </> 
  )
}

export default Notes
