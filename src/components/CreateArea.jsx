import React, {useState} from 'react'
import { Add } from '@material-ui/icons';
import { Fab } from '@material-ui/core';
import {Zoom} from '@material-ui/core';

const CreateArea = (props) => {
        const [note, setNote] = useState({
            title: "",
            content: ""
        });

        const [isExpanded, setExpanded] = useState(false);

        function handleChange(event){
            const {name, value} = event.target;

            setNote(prevNote => {
                return {
                    ...prevNote,
                    [name]: value
                }
            });
        }

        function submitNote(event){
            props.onAdd(note);
            setNote({
                title: "",
                content: ""
            })
            event.preventDefault();
        }

        function expand(){
            setExpanded(true);
        }

    return (
        <div>
          <form className='create-note'>
           {isExpanded &&  
           <input
             onChange={handleChange} 
             name="title" 
             placeholder="Title" 
             value={note.title} 
             /> }

            <textarea 
             name="content"
             placeholder="Take a note..."
             rows={isExpanded ? 3 : 1}
             onChange={handleChange}
             onClick={expand}
             value={note.content}
             />

            <Zoom in={isExpanded ? true : false}>
                 <Fab  onClick={submitNote}>
                <Add />
                </Fab>
            </Zoom>
          </form>
        </div>
      );
}

export default CreateArea
