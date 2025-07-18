import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {studentData as StudentData } from './components/student-data.js'
import Student from './components/sutdent.jsx'
import State from './states/State.jsx'
import Form from './states/Form.jsx'
import Todo from './states/Todo.jsx'
import Todos from "./states/Todos.jsx"
import TaskManager from './states/TaskManager.jsx'
import StaticTodo from './states/StaticTodo.jsx'

function App() {


  return (
    <>
      {/* <TaskManager></TaskManager> */}
      {/* <Todos /> */}
      <StaticTodo />
    </>
  )  
  
  
  // const [count, setCount] = useState(0)

  // return (
  //   <> <div>
  //     {StudentData.map((stud,index)=>{
  //     return <Student {...stud} />
  //     })}
  //     </div>
  //   </>
  // )
}

export default App
