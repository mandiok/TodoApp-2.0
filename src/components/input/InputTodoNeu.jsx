import { TextField } from "@mui/material" 
import '../../App.css'
import {Button} from "@mui/material";
import { useRef } from "react";
import {v4 as uuid4} from 'uuid';

const InputTodo = (todos,setTodos) => {
    const addTodo = ( ) => 
    {
        setTodos([...todos, {
            text: inputRef.current.value,
            id: uuid4
        }]  ) // "..." = alle Werte werden in Variable todos gespeichert 
        
    };

    const inputRef = useRef ("");
    return(
        <div className="inputContainer">
            <TextField 
                id="standard-basic" 
                label="Neues Todo" 
                variant="standard" 
                name="todoInput"
                inputRef={inputRef}
                inputProps={
                    {style: {
                        fontSize: "1.5em"
                        }
                    }}
                InputLabelProps={
                    {style: {
                        fontSize: "1.3em"
                        }
                    }}
                sx={{ width: "75%" }} 
            />
            <Button 
                onClick={addTodo}
                variant="contained" 
                sx={{style: {
                    width: "25%",
                    backgroundColor: '#ff2304' // wird nicht angezeigt??
                }}}
            >Hinzufügen</Button>
        </div>
    )
}

export default InputTodo;