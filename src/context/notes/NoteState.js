import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const host = "http://localhost:8000";
    const notesinitial = []
    const [notes , setNotes] = useState(notesinitial)

    // GET ALL NOTES
    const getNotes = async ()=>{
      const response = await fetch(`${host}/api/notes/fetchallnotes/`,{
        method : 'GET',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token' : localStorage.getItem('token')
        }
      });

      const json = await response.json()

      console.log(json);
      setNotes(json)

    }



      // Add a note
      const addNote = async ( title , description , tag)=>{
        // TODO api call
        // eslint-disable-next-line
        const response = await fetch(`${host}/api/notes/addnote/`,{
          method : 'POST',
          headers: {
            'Content-Type' : 'application/json',
            'auth-token' : localStorage.getItem('token')
          },
          body : JSON.stringify({title , description , tag})
        });

        const note = await response.json();

        console.log("Adding a new note");
        setNotes(notes.concat(note))
      }

      // Delete a note
      const deleteNote = async (id)=>{
        // TODO : do api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
          method : 'DELETE',
          headers: {
            'Content-Type' : 'application/json',
            'auth-token' : localStorage.getItem('token')
          }
        });
        const json = response.json();
        console.log(json)

        console.log("Deleting the note "+id);
        const newnotes = notes.filter((note)=>{return note._id!==id});
        setNotes(newnotes)
      }

      
      // Edit a note
      const editNote = async (id , title , description , tag)=>{
        // API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
          method : 'PUT',
          headers: {
            'Content-Type' : 'application/json',
            'auth-token' : localStorage.getItem('token')
          },
          body : JSON.stringify({title , description , tag})
        });
        // eslint-disable-next-line
        const json = response.json();

        // logic to edit in client
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if (element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
        }
        console.log(newNotes);
        setNotes(newNotes)
      }


    return (
        <NoteContext.Provider value = {{notes , addNote , deleteNote , editNote , getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;