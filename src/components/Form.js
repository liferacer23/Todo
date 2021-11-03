import React, { useState } from 'react';
import TodoList from './TodoList';
import { FcPlus } from 'react-icons/fc'
const Form = ({ setInputText, todos, setTodos, inputText }) => {

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
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <i className="plus-icon"><FcPlus /></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
        
        )


}
export default Form;