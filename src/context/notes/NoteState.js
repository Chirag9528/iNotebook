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
          },{
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
          }
      ]
    const [notes , setNotes] = useState(notesinitial)
    return (
        <NoteContext.Provider value = {{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;