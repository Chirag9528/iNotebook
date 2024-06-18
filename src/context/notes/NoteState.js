import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesinitial = [
        {
          "_id": "662a8b9ad533a793df1a782c",
          "user": "66239eeb7e3dec256bdacde9",
          "title": "My title2",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-04-25T16:58:02.128Z",
          "__v": 0
        },
        {
          "_id": "662aa4350f32c9bc5b7b7dfa",
          "user": "66239eeb7e3dec256bdacde9",
          "title": "My title2",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-04-25T18:43:01.980Z",
          "__v": 0
        },
        {
            "_id": "662a8b9ad533a793dsf1a782c",
            "user": "66239eeb7e3dec256bdacde9",
            "title": "My title2",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-04-25T16:58:02.128Z",
            "__v": 0
          },
          {
            "_id": "662aa4350f32c9bc5b7bs7dfa",
            "user": "66239eeb7e3dec256bdacde9",
            "title": "My title2",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-04-25T18:43:01.980Z",
            "__v": 0
          },{
            "_id": "662a8bs9ad533a793df1a782c",
            "user": "66239eeb7e3dec256bdacde9",
            "title": "My title2",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-04-25T16:58:02.128Z",
            "__v": 0
          },
          {
            "_id": "6s62aa4350f32c9bc5b7b7dfa",
            "user": "66239eeb7e3dec256bdacde9",
            "title": "My title2",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-04-25T18:43:01.980Z",
            "__v": 0
          }
      ]
    const [notes , setNotes] = useState(notesinitial)

      // Add a note
      const addNote = (title , description , tag)=>{
        // TODO api call
        console.log("Adding a new note");
        const note = {
          "_id": "6s62aa4350f32c9bc5b7b7dfa",
          "user": "66239eeb7e3dec256bdacde9",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-04-25T18:43:01.980Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      // Delete a note
      const deleteNote = (id)=>{
        // TODO : do api call
        console.log("Deleting the note "+id);
        const newnotes = notes.filter((note)=>{return note._id!==id});
        setNotes(newnotes)
      }

      
      // Edit a note
      const editNote = ()=>{

      }


    return (
        <NoteContext.Provider value = {{notes , addNote , deleteNote , editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;