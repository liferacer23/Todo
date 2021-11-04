import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { BsPatchCheckFill } from 'react-icons/bs'
const Todo = ({text,todos,todo,setTodos}) => {

    const deleteHandler =(e)=>
    {
        
/*         setTodos(todos.map(el=>{
            if(el.id === todo.id)
            {
                return {...el, delete:!el.delete}
            }
            return el;
           
        })); */
         setTodos(todos.filter(el=>el.id !==todo.id))  
    }
    const completedHandler=()=>
    {
        setTodos(todos.map(item=>{
            if(item.id === todo.id)
            {
                return {...item, completed:!item.completed}
            }
            return item;
        }));
    }
    return (
        <div className={`todo ${todo.delete?"fall":''}`}>
            <li className={`todo-item ${todo.completed ? "completed":''}`}>{text}</li>
            <button onClick={completedHandler} className="complete-btn">
                <i className="check"><BsPatchCheckFill /></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="trash"><RiDeleteBin5Line /></i>         
            </button>
        </div>
    )

}
export default Todo;