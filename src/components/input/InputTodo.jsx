import { TextField } from "@mui/material"
import {Button} from "@mui/material";
import Box from '@mui/material/Box';

import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

const InputTodo = ({todos,setTodos,checkedId}) => {

    //[Aufgabe 2.3/2.4] useRef Hook an Variable binden
    const todoRef = useRef("");
    
    //[Aufgabe 2.3/2.4] verarbeitende Funktion um Inputwert abzugreifen
    const getInput = () => {
        if(todoRef.current["todo"].value !== "") {
            const todoVal = todoRef.current["todo"].value;
            todoRef.current["todo"].value = "";
            return todoVal;
        } else {
            throw new Error("Missing Input!");
        }
    };
    //[Aufgabe 2.3/2.4] Add Funktion, die als callback an den "click" Event  des Buttons weitergereicht wird
    const addTodo = () => {

        const newTodo = getInput();
        setTodos(
            [...todos,{
                text: newTodo,
                done: false,
                id: uuidv4()
            }]
        )
   //     showNotification(`Added: ${newTodo}`,'normal');
    }
    const handleInput = (e) => {

        if(e.keyCode === "13") {
            addTodo(e);
 
        }

    }
    const changeTodo = () => {
        if(checkedId !== "" && todoRef.current["todo"].value){
            setTodos([...todos],
                todos.filter(e => e.id === checkedId ? e.text = todoRef.current["todo"].value : null))
        }
        // console.log(checkedId);
    }
    
    return(
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          alignItems: 'center'
        }}
        noValidate
        autoComplete="off"
        ref={todoRef}
        >
            <TextField id="todoInput" label="Todo" variant="outlined" sx={{
                width: '25%',

            }}  inputProps={
                {style: {  
                    fontSize: 20,
                }}
            } name="todo"
            onKeyDown={handleInput}
            /> 
            <Button variant="contained" sx={{  
                color: 'white',
                marginRight: '10px',
            }} onClick={() => {
                try{
                    addTodo(todoRef); //Aufgabe [2.3/2.4] Übergabe an Funktion
                }catch(e) {
                    alert(`Error occured:${e}`);
                }
            }}>Submit</Button>
                        <Button variant="contained" sx={{ 
                color: 'white'
            }} onClick={changeTodo} 
            >Change  </Button>
        </Box>
    )
}


export default InputTodo;