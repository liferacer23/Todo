import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import TodoList from './TodoList';
const Form = ({ setStatus,setInputText, todos, setTodos, inputText,filteredTodos }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
        
    }

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos,{ text:inputText, completed: false, delete: false, id: Math.random()*100 }

        ]);
     
        setInputText("");
    }
    const statusHandler=(e)=>
    {
        e.preventDefault();
        setStatus(e.target.value);

    }
    return (
        <form>
            <div><h2>TODO</h2></div>
            
            <div className="input-section">     
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <AiOutlinePlus className="plus-icon"/>
            </button>
            </div>
          
            <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
            
            <div className="select">
                <button onClick={statusHandler} name="todos" className="filter-todo">
                    <button value="all">All</button>
                    <button value="completed">Completed</button>
                    <button value="uncompleted">Uncompleted</button>
                </button>
            </div>
        </form>
        
        )


}
export default Form;