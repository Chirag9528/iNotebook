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
          'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyMzllZWI3ZTNkZWMyNTZiZGFjZGU5In0sImlhdCI6MTcxMzkwMDU3N30.EVei70lVyExVeYX5Cl9_s9y9tT6adLk5YG3Tuire6i8"
        }
      });

      const json = await response.json()

      console.log(json);
      setNotes(json)

    }



      // Add a note
      const addNote = async (id , title , description , tag)=>{
        // TODO api call

        const response = await fetch(`${host}/api/notes/addnote/`,{
          method : 'POST',
          headers: {
            'Content-Type' : 'application/json',
            'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyMzllZWI3ZTNkZWMyNTZiZGFjZGU5In0sImlhdCI6MTcxMzkwMDU3N30.EVei70lVyExVeYX5Cl9_s9y9tT6adLk5YG3Tuire6i8"
          },
          body : JSON.stringify({title , description , tag})
        });


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
      const editNote = async (id , title , description , tag)=>{
        // API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
          method : 'POST',
          headers: {
            'Content-Type' : 'application/json',
            'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyMzllZWI3ZTNkZWMyNTZiZGFjZGU5In0sImlhdCI6MTcxMzkwMDU3N30.EVei70lVyExVeYX5Cl9_s9y9tT6adLk5YG3Tuire6i8"
          },
          body : JSON.stringify({title , description , tag})
        });
        const json = response.json();

        // logic to edit in client
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if (element.id === id){
            element.title = title;
            element.description = description;
            element.tag = tag;
          }
        }
      }


    return (
        <NoteContext.Provider value = {{notes , addNote , deleteNote , editNote , getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;