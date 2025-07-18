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
  function addTask() {
    settodos([...todos, { task: text, isComplete: false }]);
    setText("");
  }
  function changeStatus(e, i) {
    let newtodos = [...todos];
    newtodos[i].isComplete = e.target.checked;
    settodos(newtodos);
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
               
                <span
                  style={{
                    textDecoration: v.isComplete ? "line-through" : "none",
                  }}
                >
                  {v.task} 
                </span>

            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDos;