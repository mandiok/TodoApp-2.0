import './App.css';
import Header from './components/heading/Header';
import List from './components/list-items/List'
import InputTodoNeu from './components/input/InputTodoNeu'; 
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';

const todosArray = [ // Liste aus Objekten
  {  
    text: "Einkaufen",
    key: uuidv4()
  },
  {  
    text: "Kochen",
    key: uuidv4()
  }
];

function App() {
  const [todos, setTodos] = useState(todosArray);
  return (
    <div className="App"> 
      <Header title={"To Do App"} newClass={"head-1"}/>
      <List todos={todos}/>
      <InputTodoNeu todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;