import React from 'react';
import Todo from './Todo';

const TodoList=({todos, flip,setTodos,filteredTodos})=>
{
  
    return(
        <div className="todo-container">
        <ul className="todo-list">
         {filteredTodos.map(todo=>{
             return(
                    <Todo fliper={flip} todo={todo} setTodos={setTodos} todos={todos} text={todo.text} key={todo.id}/>
             )
             })}   
        </ul>
    </div>
    )

}
export default TodoList;