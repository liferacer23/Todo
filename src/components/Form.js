import React from 'react';
import { FcPlus } from 'react-icons/fc'
const Form = ({ setStatus,setInputText, todos, setTodos, inputText }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
        
    }

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos,{ text:inputText, completed: false, delete: false, id: Math.random()*100 }

        ]);
        console.log(todos );
        setInputText("");
    }
    const statusHandler=(e)=>
    {
        setStatus(e.target.value);

    }
    return (
        <form>
            <div className="input-section">     
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <i ><FcPlus className="plus-icon"/></i>
            </button>
            </div>
            <div className="select">
                <select onClick={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
        
        )


}
export default Form;