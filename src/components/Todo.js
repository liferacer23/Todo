import React,{useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillCheckCircle } from 'react-icons/ai'
const Todo = ({text,todos,todo,setTodos,fliper}) => {

    const [flip,setFlip]=useState(false);
    const deleteHandler =(e)=>
    {
        e.preventDefault();
       setTodos(todos.map(el=>{
            if(el.id === todo.id)
            {
                return {...el, delete:!el.delete}
            }
            return el;
           
        })); 
        setTodos(todos.filter(el=>el.id !==todo.id))  
    }
    const completedHandler=(e)=>
    {
        setFlip(!flip);
        e.preventDefault();
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
            
            {/* {`check ${flip?'checked':''}`} */}
            <button onClick={completedHandler} className={`complete-btn ${fliper?'dark-background':'light-background'}`}>
                <AiFillCheckCircle className={`check ${todo.completed?'checked':''}`} />
            </button>
            <input placeholder={text} className={`todo-item ${fliper?'dark-background':'light-background'} ${todo.completed ? "completed":''}`} />
            <button onClick={deleteHandler} className={`trash-btn ${fliper?'dark-background':'light-background'}`}>
                <i className="trash"><AiOutlineClose /></i>         
            </button>
        </div>
    )

}
export default Todo;