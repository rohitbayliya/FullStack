import React, { useState } from "react";

let initialState = [
  {
    task: "wake up 7am",
    isComplete: true,
  },
];
function ToDos() {
  const [todos, settodos] = useState(initialState);
  const [text, setText] = useState("");
  const [edit, setEdit] = useState(null);
  const [editText,setEditText] = useState('')
  function addTask() {
    settodos([...todos, { task: text, isComplete: false }]);
    setText("");
  }
  function changeStatus(e, i) {
    let newtodos = [...todos];
    newtodos[i].isComplete = e.target.checked;
    settodos(newtodos);
  }
  function handleEdit(i) {
    setEdit(i)
    setEditText(todos[i].task)
  }
  function handleSave(i){
    let newtodos = [...todos]
    newtodos[i].task = editText 
    settodos(newtodos)
    setEdit(null)
  }
  function deleteTask(i) {
    let newtodos = [...todos]
    newtodos.splice(i,1)
    settodos(newtodos)
  }
  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      />
      <button onClick={addTask}>add task</button>
      <ul>
        {todos.map((v, i) => {
          return (
            <li key={i}>
              <input
                onChange={(e) => changeStatus(e, i)}
                type="checkbox"
                checked={v.isComplete}
              />
              {edit == i ? (
                <>
                  <input type="text" onChange={e=>setEditText(e.target.value)}
                  value={editText}  />
                  <button onClick={()=>handleSave(i)}>save</button>
                </>
              ) : (
                <span
                  style={{
                    textDecoration: v.isComplete ? "line-through" : "none",
                  }}
                >
                  {" "}
                  {v.task} {" "}
                  <button onClick={()=>handleEdit(i)}>edit</button>{" "}
                </span>
              )}
              <button onClick={()=>deleteTask(i)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDos;