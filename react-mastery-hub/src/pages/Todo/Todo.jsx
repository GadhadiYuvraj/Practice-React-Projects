import React, { useState } from "react";
import "./todoStyle.css";

function Todo() {
  let [todolist, setTodoList] = useState([]);

  const saveTodoList = (event) => {
    const toname = event.target.toname.value;

    if (!todolist.includes(toname)) {
      let finalToDoList = [...todolist, toname];
      setTodoList(finalToDoList);
    } else {
      alert("This ToDo already Exists in List");
    }

    event.preventDefault();
  };

  const list = todolist.map((value, index) => {
    return (
      <>
        <TodoListItems value={value} />
      </>
    );
  });

  return (
    <>
      <div className="body">
        <h1> Todo App </h1>
        <form onSubmit={saveTodoList}>
          {/* <input type="text"></input> */}
          <input
            type="text"
            name="toname"
            className="input"
            placeholder="Type here... "
          ></input>
          <button className="button2"> Save</button>
        </form>
        <div className="List-Div">
          <ul>{list}</ul>
        </div>
      </div>
    </>
  );
}

export default Todo;

function TodoListItems({ value }) {
  return (
    <>
      <li>
        {value} <span>&times;</span>
      </li>
    </>
  );
}
