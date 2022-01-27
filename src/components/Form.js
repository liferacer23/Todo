import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import TodoList from "./TodoList";

const Form = ({
  setStatus,
  flip,
  setFlip,
  setInputText,
  todos,
  setTodos,
  inputText,
  filteredTodos,
}) => {
  const backgroundDark = <MdDarkMode />;
  const backgroundLight = <MdLightMode />;
  const [background, setBackground] = useState(backgroundDark);
  

  const darModeHandler = (e) => {
    e.preventDefault();

    if (flip === true) {
        setBackground(backgroundLight);
      
    } else {
        setBackground(backgroundDark);
         
    }
    setFlip(!flip);
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitToDoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        delete: false,
        id: Math.random() * 100,
      },
    ]);

    setInputText("");
  };
  const statusHandler = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
  };
  return (
    <>
      <form>
        <div className={`form-top`}>
          <h2>TODO</h2>
          <button type="button" onClick={darModeHandler}>{background}</button>
        </div>

        <div className={`input-section`}>
          <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            className={`todo-input ${flip?'dark-background':'light-background'}`}
          />
          <button
            onClick={submitToDoHandler}
            className={`todo-button ${flip?'dark-background':'light-background'}`}
            type="submit"
          >
            <AiOutlinePlus className="plus-icon" />
          </button>
        </div>

        <TodoList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
          flip={flip}
        />
        <div className="select">
          <div onClick={statusHandler} name="todos" className="filter-todo">
            <button value="all" disable className={`number-display ${flip?'dark-background':'light-background'}`}>
              {todos.length} Items left
            </button>
            <div className="filter-display" >
              <button className={` ${flip?'dark-background':'light-background'}`} value="all">All</button>
              <button className={` ${flip?'dark-background':'light-background'}`} value="completed">Completed</button>
              <button className={` ${flip?'dark-background':'light-background'}`} value="uncompleted">Uncompleted</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Form;
