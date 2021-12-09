import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';
import React, { useState, useEffect} from 'react';

function App() {



  const [inputText,setInputText]= useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);


 


useEffect(() => {

  getLocalTodos();
  
}, [])

  useEffect(() => {
  filterHandler();
  saveLocalTodos();
  },[status,todos]);

  const filterHandler =()=>
  {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo=>todo.completed===true))
          break;
          case 'uncompleted':
            setFilteredTodos(todos.filter(todo=>todo.completed===false))
            break;
          default:
            setFilteredTodos(todos);
            break;
        } 
  }

  const saveLocalTodos=()=>
  {

      localStorage.setItem("todo",JSON.stringify(todos));
  
  }

  const getLocalTodos=()=>
  {
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));
    }else{
     let todoLocal= JSON.parse(localStorage.getItem("todo",JSON.stringify(todos)));
      setTodos(todoLocal);
    }

  } 
  
  return (
    <div className="title">

      <header >
      </header>
      <Form filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} status={status} setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
    </div>
    
    
  
    );
}

export default App;
