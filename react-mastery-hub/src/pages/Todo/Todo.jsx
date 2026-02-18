import React, { useState } from "react";
import "./todoStyle.css";

function Todo() {
  const [todolist, setTodoList] = useState([]);
  // const [] = useState();

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
      <TodoListItems
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        setTodoList={setTodoList}
      />
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

function TodoListItems({ value, indexNumber, todolist, setTodoList }) {
  const deleteTodoItem = () => {
    const finalData = todolist.filter((v, i) => i != indexNumber);
    setTodoList(finalData);
  };

  const [status, setStatus] = useState(false);
  const checkStatus = () => {
    setStatus(!status);
  };
  return (
    <>
      <li className={status ? "complete" : ""} onClick={checkStatus}>
        {indexNumber + 1} {""}
        {value} <span onClick={deleteTodoItem}>&times;</span>
      </li>
    </>
  );
}
